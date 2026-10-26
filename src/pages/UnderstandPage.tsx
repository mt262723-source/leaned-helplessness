import React, { useState } from 'react';
import { PageId } from '../types';
import { CORE_CONCEPTS, EVERYDAY_EXAMPLES, RESEARCH_PAPERS } from '../data/contentData';
import { ArrowRight, Compass, Sparkles, BookOpen, ExternalLink, HelpCircle, AlertCircle, CheckCircle2 } from 'lucide-react';

interface UnderstandPageProps {
  onNavigate: (page: PageId) => void;
}

export const UnderstandPage: React.FC<UnderstandPageProps> = ({ onNavigate }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(EVERYDAY_EXAMPLES[0].id);
  const activeCase = EVERYDAY_EXAMPLES.find((c) => c.id === selectedCaseId) || EVERYDAY_EXAMPLES[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-12 sm:pb-16 border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Quiet text kicker (Zero-pill discipline) */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-stone-500 tracking-wide">
            <span>심리학 기반 마음 회복 가이드</span>
            <span aria-hidden="true">·</span>
            <span>선택형 2D 스토리 러닝</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.2] text-balance">
            다시 시도할 힘은 어디서 올까?
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-balance">
            반복된 실패 뒤에 찾아오는 무기력은 나약함의 증거가 아닙니다.
            뇌와 생각이 작동하는 과학적 원리를 이해하고, 한 걸음 다시 내딛는 현실적인 힘을 발견해 보세요.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('story')}
              className="w-full sm:w-auto px-6 py-3.5 bg-stone-900 text-stone-50 font-semibold text-sm sm:text-base rounded-xl hover:bg-stone-800 transition-all shadow-sm flex items-center justify-center gap-2 active:scale-98"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>주인공 민우의 이야기 체험하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#core-concepts"
              className="w-full sm:w-auto px-5 py-3.5 text-stone-700 bg-stone-100 hover:bg-stone-200 font-medium text-sm sm:text-base rounded-xl transition-colors text-center"
            >
              핵심 이론 둘러보기
            </a>
          </div>

          {/* Non-diagnostic Empathy Notice */}
          <div className="mt-8 pt-6 border-t border-stone-200/80 max-w-2xl mx-auto text-xs text-stone-500 leading-relaxed flex items-start gap-2.5 text-left bg-stone-50/80 p-3.5 rounded-lg border border-stone-200">
            <AlertCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
            <span>
              <strong>안내:</strong> 누구나 실패 후 의욕이 일시적으로 떨어질 수 있습니다. 본 사이트는 자가 진단 도구가 아니며, 한 번의 좌절만으로 스스로를 무기력증으로 단정할 필요는 없습니다.
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: 학습된 무기력이란 무엇인가? */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            01. 학습된 무기력의 원리와 뇌의 반응
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            자신의 노력으로 결과를 바꿀 수 없었던 경험이 거듭될 때, 우리 뇌는 스스로를 보호하기 위해 에너지를 차단합니다. 이것이 바로 심리학자 마틴 셀리그만(Martin Seligman)이 규명한 <strong>학습된 무기력(Learned Helplessness)</strong>입니다.
          </p>
        </div>

        {/* 2-Zone Explanatory Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-rose-600 tracking-wider">메커니즘</span>
              <h3 className="text-lg font-bold text-stone-900">왜 시도조차 포기하게 될까요?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                “내가 아무리 애써도 상황은 바뀌지 않았다”는 기억이 뇌에 각인되면, 이후에 충분히 벗어날 수 있는 새로운 기회가 찾아와도 <strong>“어차피 해봤자 안 될 거야”</strong>라는 생각 회로가 먼저 작동하여 행동을 멈추게 됩니다.
              </p>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-500 border border-stone-200">
              뇌 과학적 발견: 무기력은 나약함이 아니라 극심한 스트레스에 대한 뇌의 초기 기본 반응(Default Response)입니다.
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-emerald-600 tracking-wider">희망의 근거</span>
              <h3 className="text-lg font-bold text-stone-900">어떻게 무기력을 멈출 수 있을까요?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                2016년 신경과학 연구에 따르면, 전두엽(vmPFC)이 <strong>“내가 바꿀 수 있는 아주 작은 통제권”</strong>을 인지하고 경험할 때, 뇌의 무기력 회로는 억제되고 다시 시도할 동기가 살아납니다.
              </p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-800 border border-emerald-200">
              핵심 해법: 거창한 재도전이 아니라, 5분 안에 끝낼 수 있는 아주 작은 행동(Micro-Action) 하나가 시작입니다.
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 일상에서 나타나는 3가지 구체적 사례 (인터랙티브 탭) */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            02. 일상 속 무기력의 신호와 생각의 차이
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            우리가 일상에서 흔히 겪는 3가지 상황을 선택해 비관적 생각과 새로운 관점을 비교해 보세요.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl border border-stone-200">
          {EVERYDAY_EXAMPLES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCaseId === item.id
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {item.id === 'exam-failure' && '시험 실패'}
              {item.id === 'presentation-mistake' && '발표 실수'}
              {item.id === 'new-challenge-hesitation' && '새로운 도전의 망설임'}
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-amber-700 tracking-wider">구체적 상황</div>
            <h3 className="text-xl font-bold text-stone-900">{activeCase.title}</h3>
            <p className="text-sm text-stone-600 italic bg-stone-50 p-3 rounded-lg border border-stone-200">
              트리거 상황: {activeCase.trigger}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Helpless Thought */}
            <div className="space-y-3 p-5 rounded-xl bg-rose-50/70 border border-rose-200">
              <span className="text-xs font-bold text-rose-700">비관적 자동 사고</span>
              <p className="text-sm text-stone-800 font-medium leading-relaxed">
                {activeCase.helplessThought}
              </p>
              <div className="pt-2 text-xs text-rose-700/90 leading-relaxed border-t border-rose-200">
                <strong>심리적 영향:</strong> {activeCase.psychologicalImpact}
              </div>
            </div>

            {/* Reframed Perspective */}
            <div className="space-y-3 p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold text-emerald-700">현실적인 낙관적 재해석</span>
              <p className="text-sm text-stone-800 font-medium leading-relaxed">
                {activeCase.reframedPerspective}
              </p>
              <div className="pt-2 text-xs text-emerald-800/90 leading-relaxed border-t border-emerald-200">
                <strong>핵심 포인트:</strong> 무조건 긍정이 아니라, 실망을 인정하고 통제 가능한 행동으로 전환하는 것입니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 핵심 개념 카드 (3 Core Concepts) */}
      <section id="core-concepts" className="max-w-4xl mx-auto space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            03. 마음을 지탱하는 3가지 핵심 개념
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            심리학에서 검증된 핵심 이론의 정의와 실생활 적용 포인트를 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_CONCEPTS.map((concept) => (
            <div
              key={concept.id}
              className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-stone-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="text-xs text-stone-400 font-mono tracking-tight">{concept.subtitle}</div>
                <h3 className="text-lg font-bold text-stone-900">{concept.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {concept.definition}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-stone-100">
                <div className="text-xs font-semibold text-stone-800">주요 특징:</div>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {concept.bulletPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-stone-400">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-amber-50/70 rounded-lg text-xs text-amber-900 leading-relaxed border border-amber-200/60 font-medium">
                  {concept.keyTakeaway}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: 검증된 연구 요약 4선 (Peer-Reviewed Research Citations) */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <BookOpen className="w-4 h-4 text-stone-600" />
            <span>학술적 신뢰성</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            04. 공신력 있는 연구 논문 요약과 출처
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            본 사이트의 모든 심리학적 내용은 실제 동료 심사(Peer-Reviewed)를 거친 권위 있는 연구 논문들에 근거합니다.
          </p>
        </div>

        <div className="space-y-5">
          {RESEARCH_PAPERS.map((paper) => (
            <div
              key={paper.id}
              className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">{paper.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-medium">
                    <span>{paper.authors}</span>
                    <span aria-hidden="true">·</span>
                    <span>{paper.year}년</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-600">{paper.journal}</span>
                  </div>
                </div>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline shrink-0 pt-1"
                >
                  <span>공식 원문 보기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                <p><strong>핵심 연구 요약:</strong> {paper.keySummary}</p>
                <p className="text-stone-700"><strong>뒷받침하는 주장:</strong> {paper.supportedClaim}</p>
                <p className="text-stone-500 text-xs italic">
                  <strong>연구의 한계 및 주의점:</strong> {paper.limitations}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA to Story Page */}
      <section className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-stone-900 to-stone-800 text-stone-100 rounded-3xl shadow-lg text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          이제 주인공 민우와 함께 직접 선택해 볼까요?
        </h2>
        <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed">
          시험 결과를 마주한 민우의 2D 상황극에서 서로 다른 생각의 길을 걸어가 보고, 그 결과가 어떻게 달라지는지 인터랙티브 만화로 체험해 보세요.
        </p>
        <button
          onClick={() => onNavigate('story')}
          className="px-6 py-3.5 bg-amber-400 text-stone-950 font-bold text-sm sm:text-base rounded-xl hover:bg-amber-300 transition-all shadow-md inline-flex items-center gap-2 active:scale-95"
        >
          <Compass className="w-5 h-5 text-stone-950" />
          <span>선택형 2D 상황극 시작하기</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
};
