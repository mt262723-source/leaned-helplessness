import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { ACTION_GUIDE_STEPS, PRACTICAL_SCENARIOS, RESEARCH_PAPERS } from '../data/contentData';
import { CheckCircle2, Copy, Check, Sparkles, HelpCircle, HeartHandshake, ArrowRight, RotateCcw, ExternalLink } from 'lucide-react';

interface PracticePageProps {
  onNavigate: (page: PageId) => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({ onNavigate }) => {
  // Self-reflection check inputs
  const [changeablePart, setChangeablePart] = useState<string>('');
  const [supportPerson, setSupportPerson] = useState<string>('');
  const [microAction, setMicroAction] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [savedLocally, setSavedLocally] = useState<boolean>(false);
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [activeScenarioId, setActiveScenarioId] = useState<string>('case-test');

  // Load any previously saved reflections from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dasi_step_reflection');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.changeablePart) setChangeablePart(parsed.changeablePart);
        if (parsed.supportPerson) setSupportPerson(parsed.supportPerson);
        if (parsed.microAction) setMicroAction(parsed.microAction);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const handleSaveReflection = () => {
    try {
      const data = { changeablePart, supportPerson, microAction, savedAt: new Date().toISOString() };
      localStorage.setItem('dasi_step_reflection', JSON.stringify(data));
      setSavedLocally(true);
      setTimeout(() => setSavedLocally(false), 2500);
    } catch {
      // Storage error fallback
    }
  };

  const handleCopyPlan = () => {
    const textToCopy = `[다시, 한 걸음 — 나의 실천 카드]\n\n1. 지금 내가 바꿀 수 있는 작은 부분:\n${changeablePart || '(미작성)'}\n\n2. 도움을 청할 수 있는 사람:\n${supportPerson || '(미작성)'}\n\n3. 오늘 당장 시도할 가장 작은 행동(5분):\n${microAction || '(미작성)'}\n\n"실패는 전략을 수정하라는 신호일 뿐이다."`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedScenario = PRACTICAL_SCENARIOS.find((s) => s.id === activeScenarioId) || PRACTICAL_SCENARIOS[0];

  return (
    <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24">
      {/* Header section */}
      <section className="text-center space-y-4 pt-4 sm:pt-8 pb-8 border-b border-stone-200">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-stone-500">
          <span>일상 적용 실천 매뉴얼</span>
          <span aria-hidden="true">·</span>
          <span>건강한 그릿과 행동 전략</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          실천하기: 실패를 마주했을 때의 5단계 전략
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          상황극에서 살펴본 인지적 재해석을 일상에서 실제로 작동시키는 구체적인 행동 가이드와 나만의 성찰 워크시트입니다.
        </p>
      </section>

      {/* SECTION 1: 5-STEP ACTION GUIDE */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-amber-700 tracking-wider">실행 전략</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            01. 실패를 회복으로 바꾸는 5단계 프로토콜
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            좌절을 겪었을 때 순서대로 따라 해볼 수 있는 인지·행동적 단계입니다.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 p-1.5 bg-stone-100 rounded-xl border border-stone-200">
          {ACTION_GUIDE_STEPS.map((step) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStepTab(step.stepNumber)}
              className={`py-2 px-1 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center ${
                activeStepTab === step.stepNumber
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <span className="block sm:inline font-mono">Step {step.stepNumber}</span>
              <span className="hidden sm:inline sm:ml-1 text-xs font-normal">
                ({step.stepNumber === 1 && '감정 인정'}
                {step.stepNumber === 2 && '사실 분해'}
                {step.stepNumber === 3 && '통제 구분'}
                {step.stepNumber === 4 && '작은 행동'}
                {step.stepNumber === 5 && '유연 조정'})
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        {(() => {
          const step = ACTION_GUIDE_STEPS.find((s) => s.stepNumber === activeStepTab) || ACTION_GUIDE_STEPS[0];
          return (
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-600 font-mono">STEP 0{step.stepNumber}</span>
                  <h3 className="text-xl font-bold text-stone-900">{step.title}</h3>
                </div>
                <div className="text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1.5 rounded-md border border-stone-200 w-fit">
                  {step.tagline}
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700">
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1">왜 필요한가? (핵심 원리)</h4>
                  <p className="text-stone-600">{step.corePrinciple}</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">구체적인 실행 방법</h4>
                  <p className="text-stone-800 font-medium">{step.concreteMethod}</p>
                </div>

                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 space-y-1 text-xs sm:text-sm">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">실제 적용 예시</h4>
                  <p className="text-amber-950">{step.realWorldExample}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* SECTION 2: GRIT RE-EXPLAINED ACCURATELY */}
      <section className="p-6 sm:p-8 bg-stone-900 text-stone-100 rounded-2xl shadow-md space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-amber-400 tracking-wider">심리학적 정정</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            그릿(Grit)은 무조건 참고 버티는 악바리 근성이 아닙니다
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            많은 사람들이 그릿을 “고통을 무조건 참으며 혼자 버티는 것”으로 오해합니다. 하지만 연구(Duckworth et al., 2007; Crede et al., 2017)에 따르면, 피로를 무시한 맹목적 버티기는 번아웃과 2차 무기력을 초래합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-stone-800 rounded-xl border border-stone-700 space-y-2">
            <span className="text-xs font-bold text-amber-300">01. 전략의 유연한 변경</span>
            <p className="text-xs text-stone-300 leading-relaxed">
              목표 자체를 버리지 않되, 통하지 않는 방식은 과감히 버리고 다른 학습법과 시간표로 교체하는 유연성입니다.
            </p>
          </div>

          <div className="p-4 bg-stone-800 rounded-xl border border-stone-700 space-y-2">
            <span className="text-xs font-bold text-emerald-300">02. 의도적 휴식과 자기 자비</span>
            <p className="text-xs text-stone-300 leading-relaxed">
              지친 뇌와 마음을 정직하게 돌보고, 회복 시간을 계획에 포함시키는 것이 지속력을 담보하는 진짜 그릿입니다.
            </p>
          </div>

          <div className="p-4 bg-stone-800 rounded-xl border border-stone-700 space-y-2">
            <span className="text-xs font-bold text-sky-300">03. 도움 요청의 용기</span>
            <p className="text-xs text-stone-300 leading-relaxed">
              모든 문제를 혼자 짊어지는 대신, 스승·친구·동료에게 솔직하게 모르는 부분을 질문하고 지지를 얻는 협력적 태도입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRACTICAL SCENARIO WORKBOOK */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-amber-700 tracking-wider">상황별 대처 가이드</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            02. 자주 마주치는 3대 상황별 대처 매뉴얼
          </h2>
        </div>

        {/* Scenario Toggle */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl border border-stone-200">
          {PRACTICAL_SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioId(sc.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeScenarioId === sc.id
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200 font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Selected Scenario Detail */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-stone-900">{selectedScenario.situation}</h3>
            <p className="text-xs sm:text-sm text-stone-500">
              초기 감정: <span className="text-stone-700">{selectedScenario.initialFeeling}</span>
            </p>
            <div className="p-3 bg-rose-50/70 rounded-lg text-xs text-rose-800 border border-rose-200">
              <strong>피해야 할 비생산적 반응:</strong> {selectedScenario.unhelpfulReaction}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-stone-900 tracking-wider">추천하는 단계별 실천 행동:</h4>
            <div className="space-y-2">
              {selectedScenario.stepByStepAction.map((stepTxt, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{stepTxt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-stone-100 rounded-xl text-xs sm:text-sm text-stone-700 italic border border-stone-200 font-medium">
            “{selectedScenario.encouragement}”
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE SELF-REFLECTION CHECK ( 성찰 워크시트 - 점수화/진단이 아님 ) */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>나만의 실천 워크시트</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            03. 내 삶에 적용하는 자기 점검 질문 3가지
          </h2>
          <p className="text-sm text-stone-600">
            이 질문은 점수를 매기는 시험이 아닙니다. 지금 겪고 있는 막막함을 아주 작은 행동 단위로 나누어 보는 성찰의 도구입니다.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-stone-300 shadow-md space-y-6">
          {/* Question 1 */}
          <div className="space-y-2">
            <label htmlFor="q1" className="block text-sm font-bold text-stone-900">
              1. 지금 내가 직면한 상황에서 <span className="text-blue-600">‘내 힘으로 바꿀 수 있는 가장 작은 부분’</span>은 무엇인가요?
            </label>
            <p className="text-xs text-stone-500">
              예: 남의 평판이나 시험 난이도는 통제할 수 없지만, '오답 1문제 다시 풀기', '오늘 밤 11시 취침'은 통제할 수 있습니다.
            </p>
            <textarea
              id="q1"
              value={changeablePart}
              onChange={(e) => setChangeablePart(e.target.value)}
              placeholder="내가 지금 통제할 수 있는 작은 부분을 적어보세요..."
              rows={2}
              className="w-full p-3.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:border-stone-900 focus:outline-none transition-colors"
            />
          </div>

          {/* Question 2 */}
          <div className="space-y-2">
            <label htmlFor="q2" className="block text-sm font-bold text-stone-900">
              2. 혼자 끙끙 앓지 않고 <span className="text-emerald-600">‘도움이나 조언을 청할 수 있는 사람’</span>은 누구인가요?
            </label>
            <p className="text-xs text-stone-500">
              예: 과목 선생님, 같은 어려움을 겪어본 친구, 학교 상담 선생님, 신뢰하는 가족 등.
            </p>
            <input
              id="q2"
              type="text"
              value={supportPerson}
              onChange={(e) => setSupportPerson(e.target.value)}
              placeholder="도움을 요청할 수 있는 사람의 이름이나 역할을 적어보세요..."
              className="w-full p-3.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:border-stone-900 focus:outline-none transition-colors"
            />
          </div>

          {/* Question 3 */}
          <div className="space-y-2">
            <label htmlFor="q3" className="block text-sm font-bold text-stone-900">
              3. 오늘 당장 <span className="text-amber-600">‘5분 안에 시도할 수 있는 가장 작은 행동’</span> 하나는 무엇인가요?
            </label>
            <p className="text-xs text-stone-500">
              예: 책상 위 시험지 펼치기, 모르는 문제 사진 찍어두기, 깊은 호흡 5번 하기 등.
            </p>
            <input
              id="q3"
              type="text"
              value={microAction}
              onChange={(e) => setMicroAction(e.target.value)}
              placeholder="실패할 수 없을 만큼 작은 행동 1가지를 적어보세요..."
              className="w-full p-3.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:border-stone-900 focus:outline-none transition-colors"
            />
          </div>

          {/* Action buttons for Reflection */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleSaveReflection}
                className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-stone-300"
              >
                {savedLocally ? <Check className="w-4 h-4 text-emerald-600" /> : null}
                <span>{savedLocally ? '브라우저에 저장됨' : '작성 내용 저장'}</span>
              </button>

              <button
                onClick={handleCopyPlan}
                className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-500" />}
                <span>{copied ? '복사 완료!' : '내 카드 복사하기'}</span>
              </button>
            </div>

            <div className="text-xs text-stone-400">
              입력한 내용은 다른 서버로 전송되지 않고 본인 기기에만 안전하게 유지됩니다.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROFESSIONAL SUPPORT & SAFETY NET */}
      <section className="p-6 sm:p-8 bg-rose-50/60 rounded-2xl border border-rose-200 space-y-4">
        <div className="flex items-start gap-3">
          <HeartHandshake className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-rose-950">
              무기력이 깊어 일상생활이 버겁다면, 언제든 전문가의 도움을 받으세요
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              만약 무기력감, 우울감, 또는 아무것도 할 수 없는 상태가 2주 이상 지속되고 수면이나 식사에 지장이 생긴다면, 이는 개인의 의지 문제가 아니라 전문적인 심리 상담이나 의료적 지원이 필요한 시점일 수 있습니다. 믿을 수 있는 가족, 학교 상담실(Wee 클래스), 또는 아래의 전문 상담 기관에 주저 없이 연락해 보세요.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-rose-900">
              <div>청소년상담전화: <span className="font-mono underline">1388</span></div>
              <div>정신건강위기상담: <span className="font-mono underline">1577-0199</span></div>
              <div>자살예방상담전화: <span className="font-mono underline">109</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA: REVISIT STORY OR UNDERSTAND */}
      <section className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('story')}
          className="w-full sm:w-auto px-5 py-3 bg-stone-900 text-white font-semibold text-sm rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <RotateCcw className="w-4 h-4 text-amber-400" />
          <span>상황극 다시 해보기</span>
        </button>

        <button
          onClick={() => onNavigate('understand')}
          className="w-full sm:w-auto px-5 py-3 text-stone-700 bg-stone-100 hover:bg-stone-200 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <span>이해하기 페이지로 이동</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
