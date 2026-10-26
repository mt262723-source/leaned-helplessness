import React from 'react';
import { PageId } from '../types';
import { ShieldAlert, HeartHandshake, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Column 1: Brand & Purpose */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-md bg-stone-100 text-stone-900 font-bold flex items-center justify-center font-serif text-sm">
                다
              </span>
              <span className="font-bold text-white text-base">다시, 한 걸음</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              학습된 무기력의 심리학적 기제를 이해하고, 2D 상황극을 통해 비관적 해석과 현실적 낙관성, 회복탄력성 있는 그릿을 함께 탐구하는 비영리 교육 웹사이트입니다.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-400">
              <button onClick={() => onNavigate('understand')} className="hover:text-stone-200 transition-colors">이해하기</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => onNavigate('story')} className="hover:text-stone-200 transition-colors">상황극</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => onNavigate('practice')} className="hover:text-stone-200 transition-colors">실천하기</button>
            </div>
          </div>

          {/* Column 2: Non-judgmental Educational Notice */}
          <div className="p-4 bg-stone-800/60 rounded-xl border border-stone-700/60 text-xs">
            <div className="flex items-center gap-2 text-stone-200 font-semibold mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>안내 및 면책 조항</span>
            </div>
            <p className="text-stone-300 leading-relaxed">
              본 사이트의 콘텐츠와 상황극은 심리학 이론(마틴 셀리그만, 앤절라 더크워스 등)에 기반한 교육적 목적의 가상 사례이며, 의학적·정신건강의학적 진단 도구가 아닙니다. 개인의 상황에 따라 적절한 전문가의 도움이 필요할 수 있습니다.
            </p>
          </div>

          {/* Column 3: Professional Support Hotlines */}
          <div className="p-4 bg-stone-800/60 rounded-xl border border-stone-700/60 text-xs">
            <div className="flex items-center gap-2 text-stone-200 font-semibold mb-2">
              <HeartHandshake className="w-4 h-4 text-rose-400 shrink-0" />
              <span>도움이 필요할 때 연락처 (24시간)</span>
            </div>
            <ul className="space-y-1.5 text-stone-300">
              <li className="flex justify-between items-center">
                <span>청소년 전화 / 사이버 상담:</span>
                <span className="font-mono font-bold text-amber-300">국번없이 1388</span>
              </li>
              <li className="flex justify-between items-center">
                <span>정신건강 위기상담전화:</span>
                <span className="font-mono font-bold text-amber-300">1577-0199</span>
              </li>
              <li className="flex justify-between items-center">
                <span>자살예방 상담전화:</span>
                <span className="font-mono font-bold text-amber-300">109</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div>
            모든 학술 자료는 검증된 피어리뷰 저널(APA, NIH PMC, Taylor & Francis) 원문을 인용하고 있습니다.
          </div>
          <div className="text-stone-400">
            © 다시, 한 걸음 (Take Another Step) · 교육용 심리학 웹 서비스
          </div>
        </div>
      </div>
    </footer>
  );
};
