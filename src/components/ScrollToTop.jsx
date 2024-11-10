// components/ScrollToTop.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-teal-800 text-white rounded-full shadow-lg hover:bg-teal-700 transition-all"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTop;
