/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UnderstandPage } from './pages/UnderstandPage';
import { StoryPage } from './pages/StoryPage';
import { PracticePage } from './pages/PracticePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('understand');

  // Sync with browser hash for standard 3-page URL routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'story') {
        setCurrentPage('story');
      } else if (hash === 'practice') {
        setCurrentPage('practice');
      } else {
        setCurrentPage('understand');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'understand' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* 3-zone Header Contract */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {currentPage === 'understand' && <UnderstandPage onNavigate={handleNavigate} />}
        {currentPage === 'story' && <StoryPage onNavigate={handleNavigate} />}
        {currentPage === 'practice' && <PracticePage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
