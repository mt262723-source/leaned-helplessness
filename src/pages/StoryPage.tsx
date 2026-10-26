import React, { useState } from 'react';
import { PageId } from '../types';
import { STORY_NODES, COMPARISON_TABLE, StoryBranchNode } from '../data/storyData';
import { ComicSceneVisual } from '../components/ComicSceneVisual';
import { RotateCcw, ArrowRight, GitFork, CheckCircle, Info, Heart, Award } from 'lucide-react';

interface StoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('scene-1-intro');
  const [history, setHistory] = useState<string[]>(['scene-1-intro']);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const currentNode: StoryBranchNode = STORY_NODES[currentNodeId] || STORY_NODES['scene-1-intro'];
  const isFinalScene = currentNode.stage === 3;

  // Handle choice selection
  const handleSelectOption = (targetNodeId: string) => {
    setCurrentNodeId(targetNodeId);
    setHistory((prev) => [...prev, targetNodeId]);
  };

  // Restart scenario from scene 1
  const handleRestart = () => {
    setCurrentNodeId('scene-1-intro');
    setHistory(['scene-1-intro']);
    setShowComparison(false);
  };

  // Switch to the opposite path
  const handleSwitchOppositePath = () => {
    if (currentNodeId.includes('pessimistic')) {
      setCurrentNodeId('scene-2-optimistic');
      setHistory(['scene-1-intro', 'scene-2-optimistic']);
      setShowComparison(false);
    } else {
      setCurrentNodeId('scene-2-pessimistic');
      setHistory(['scene-1-intro', 'scene-2-pessimistic']);
      setShowComparison(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Page Header / Context bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
            <span>2D 인터랙티브 심리 상황극</span>
            <span aria-hidden="true">·</span>
            <span>선택에 따른 생각의 여정</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            민우의 시험 성적표: 두 갈래의 길
          </h1>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRestart}
            className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>처음부터 다시 보기</span>
          </button>
          {isFinalScene && (
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="px-3 py-1.5 text-xs font-medium text-stone-900 bg-amber-200 hover:bg-amber-300 border border-amber-400 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>{showComparison ? '장면 보기' : '두 경로 심층 비교'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress Stepper (Zero-pill discipline) */}
      <div className="flex items-center justify-between text-xs font-medium text-stone-500 bg-stone-100/80 p-3 rounded-xl border border-stone-200">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-900">현재 진행:</span>
          <span>
            {currentNode.stage === 1 && '1단계: 충격과 생각의 선택'}
            {currentNode.stage === 2 && '2단계: 행동과 대처의 갈림길'}
            {currentNode.stage === 3 && '3단계: 2주 후의 모습과 결과'}
          </span>
        </div>
        <div className="text-stone-400 font-mono">
          Stage {currentNode.stage} / 3
        </div>
      </div>

      {/* MAIN COMIC PANEL CARD */}
      {!showComparison ? (
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-300 shadow-md space-y-6">
          {/* Scene Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {currentNode.sceneTitle}
            </h2>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span>장소: {currentNode.location}</span>
              <span aria-hidden="true">·</span>
              <span>시간: {currentNode.timeContext}</span>
            </div>
          </div>

          {/* 2D Comic Visual Artwork Component */}
          <ComicSceneVisual nodeId={currentNode.id} emotion={currentNode.characterEmotion} />

          {/* Narration Box (Classic comic narrative caption) */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-stone-700 text-sm sm:text-base leading-relaxed">
            <span className="font-bold text-stone-900 mr-2">[해설]</span>
            {currentNode.narration}
          </div>

          {/* Dialogue Speech Bubble */}
          <div className="relative p-5 bg-amber-50/60 rounded-2xl border-2 border-stone-800 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)]">
            <div className="text-xs font-bold text-stone-800 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>주인공 민우의 속마음</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed">
              {currentNode.characterSpeech}
            </p>
          </div>

          {/* Choice Prompt & Option Buttons */}
          <div className="pt-4 space-y-4">
            <div className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-stone-900 rounded-full"></span>
              <span>{currentNode.promptQuestion}</span>
            </div>

            {/* If Choices are available */}
            {currentNode.options.length > 0 ? (
              <div className="grid grid-cols-1 gap-3.5">
                {currentNode.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.targetNodeId)}
                    className="group text-left p-4 sm:p-5 rounded-xl border-2 border-stone-300 hover:border-stone-900 bg-white hover:bg-stone-50/80 transition-all shadow-sm hover:shadow-md flex flex-col justify-between gap-2 active:scale-[0.99]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 font-bold text-xs flex items-center justify-center border border-stone-300 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                          {idx === 0 ? 'A' : 'B'}
                        </span>
                        <span className="text-xs font-semibold text-stone-500">
                          {option.badgeLabel}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all shrink-0" />
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-stone-900 pl-8">
                      {option.text}
                    </p>

                    <div className="pl-8 text-xs text-stone-500 italic">
                      심리학적 의미: {option.explanatoryNote}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              /* If reached a Final Outcome Scene (Stage 3) */
              <div className="space-y-4 pt-4 border-t border-stone-200">
                <div className="p-4 bg-stone-100 rounded-xl text-xs sm:text-sm text-stone-600 leading-relaxed flex items-start gap-3">
                  <Info className="w-5 h-5 text-stone-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">결과 안내:</strong> 이 상황극은 이용자의 성격이나 능력을 평가하는 시험이 아닙니다. 두 가지 서로 다른 생각과 행동 방식이 시간이 흐름에 따라 가져올 수 있는 심리적 흐름의 한 예시입니다.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => setShowComparison(true)}
                    className="w-full sm:w-auto flex-1 px-5 py-3.5 bg-stone-900 text-white font-semibold text-sm rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <GitFork className="w-4 h-4 text-amber-400" />
                    <span>두 경로(비관 vs 현실적 낙관) 심층 비교하기</span>
                  </button>
                  <button
                    onClick={handleSwitchOppositePath}
                    className="w-full sm:w-auto px-5 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>다른 선택 경로 체험해보기</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* COMPARISON SUMMARY DASHBOARD */
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-300 shadow-md space-y-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-700 tracking-wider">심층 분석</span>
              <button
                onClick={() => setShowComparison(false)}
                className="text-xs text-stone-600 hover:text-stone-900 underline"
              >
                상황극 화면으로 돌아가기
              </button>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              비관적 해석 vs 현실적 낙관성 비교 분석
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              마틴 셀리그만의 3P 모델(개인화, 영속성, 보편성)과 앤절라 더크워스의 그릿 이론에 비추어 두 사고방식의 차이를 비교합니다.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="space-y-4">
            {COMPARISON_TABLE.map((row, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3"
              >
                <div className="text-xs sm:text-sm font-bold text-stone-900">
                  {row.dimension}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Pessimistic */}
                  <div className="p-3.5 rounded-lg bg-rose-50/70 border border-rose-200 text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-rose-800 block">경로 A: 비관적 해석</span>
                    <p className="text-stone-800">{row.pessimisticAspect}</p>
                  </div>

                  {/* Optimistic */}
                  <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-emerald-800 block">경로 B: 현실적 낙관성</span>
                    <p className="text-stone-800">{row.optimisticAspect}</p>
                  </div>
                </div>

                <div className="text-xs text-stone-600 pt-1 leading-relaxed">
                  <strong>💡 심리학적 메커니즘:</strong> {row.psychologicalImpact}
                </div>
              </div>
            ))}
          </div>

          {/* Key Takeaway Box */}
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed space-y-2">
            <div className="font-bold flex items-center gap-2 text-amber-900">
              <Award className="w-4 h-4 text-amber-600" />
              <span>핵심 교훈: 건강한 그릿이란?</span>
            </div>
            <p>
              그릿은 실패를 무조건 참고 버티는 독기가 아닙니다. 실패가 찾아왔을 때, <strong>나를 자책하는 대신(개인화 완화)</strong>, <strong>일시적인 문제로 바라보며(영속성 차단)</strong>, <strong>선생님이나 동료에게 도움을 청하고 학습 전략을 유연하게 수정하는 것</strong>이 과학적으로 증명된 건강한 그릿입니다.
            </p>
          </div>

          {/* Bottom Navigation CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-sm flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>상황극 처음부터 다시 체험하기</span>
            </button>

            <button
              onClick={() => onNavigate('practice')}
              className="w-full sm:w-auto px-6 py-3 bg-stone-900 text-white font-semibold text-sm rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>실천하기 가이드로 이동하기</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
