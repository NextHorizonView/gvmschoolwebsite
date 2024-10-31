'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730352732/jluyshuiettxfwihtz22.png';

  return (
    <motion.nav
      className="absolute top-0 w-full z-50 px-4 sm:px-6 md:px-8 py-4 md:py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
            <Image
              src={logoUrl}
              alt="School Logo"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 2.5rem, 
                     (max-width: 768px) 3.5rem,
                     (max-width: 1024px) 4rem,
                     5rem"
              priority
            />
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight">Gyanodaya</h1>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-tight">Vidya Mandir</h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-tight">High School</h3>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 items-center text-white">
            <Link href="/" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Home</Link>
            <Link href="/menu" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Menu</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors text-sm lg:text-base">About us</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors text-sm lg:text-base">Contact</Link>
            <div className="bg-black rounded-full px-3 py-1 lg:px-4 lg:py-1">
              <Link href="/faq" className="hover:text-gray-300 transition-colors text-sm lg:text-base">FAQ</Link>
            </div>
          </nav>

          <div className="w-7 h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 lg:h-5 lg:w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black bg-opacity-90 mt-2 py-4 px-4 md:hidden"
        >
          <nav className="flex flex-col space-y-4 text-white">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/menu" className="hover:text-gray-300 transition-colors">Menu</Link>
            <Link href="/community" className="hover:text-gray-300 transition-colors">Community</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
          </nav>
        </motion.div>
      )}
    </motion.nav>
  );
}