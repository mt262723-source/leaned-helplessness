import React from 'react';
import { PageId } from '../types';
import { Compass, BookOpen, Film, Flame } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onNavigate('understand')}
          className="flex items-center gap-2.5 text-stone-900 font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          aria-label="다시, 한 걸음 홈으로 이동"
        >
          <span className="w-8 h-8 rounded-lg bg-stone-900 text-stone-50 flex items-center justify-center font-serif text-base shadow-sm">
            다
          </span>
          <span className="font-semibold text-stone-900">다시, 한 걸음</span>
        </button>

        {/* Zone 2: Navigation Links (Single-line, clean typography) */}
        <nav className="flex items-center gap-2 sm:gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('understand')}
            className={`flex items-center gap-1.5 py-1.5 px-2.5 sm:px-3 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentPage === 'understand'
                ? 'text-stone-950 font-semibold bg-stone-200/60'
                : 'hover:text-stone-950 hover:bg-stone-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-stone-500" />
            <span>이해하기</span>
          </button>
          
          <button
            onClick={() => onNavigate('story')}
            className={`flex items-center gap-1.5 py-1.5 px-2.5 sm:px-3 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentPage === 'story'
                ? 'text-stone-950 font-semibold bg-stone-200/60'
                : 'hover:text-stone-950 hover:bg-stone-100'
            }`}
          >
            <Film className="w-4 h-4 text-stone-500" />
            <span>상황극</span>
          </button>
          
          <button
            onClick={() => onNavigate('practice')}
            className={`flex items-center gap-1.5 py-1.5 px-2.5 sm:px-3 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentPage === 'practice'
                ? 'text-stone-950 font-semibold bg-stone-200/60'
                : 'hover:text-stone-950 hover:bg-stone-100'
            }`}
          >
            <Flame className="w-4 h-4 text-stone-500" />
            <span>실천하기</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          {currentPage !== 'story' ? (
            <button
              onClick={() => onNavigate('story')}
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-lg shadow-sm border border-stone-800 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Compass className="w-4 h-4" />
              <span>상황극 시작</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('practice')}
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 active:scale-95 transition-all rounded-lg shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>실천 가이드</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
