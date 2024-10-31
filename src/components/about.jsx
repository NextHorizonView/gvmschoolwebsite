'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './navbar';

export default function About() {
  const backgroundImageUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730351465/xn7wfirab3w7mhm8c3fv.png';

  return (
    <div className="relative min-h-screen w-full text-white">
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={backgroundImageUrl}
          alt="School environment"
          className="object-cover w-full h-full"
          style={{ filter: 'blur(0px)' }} // Optional styling
          loading="lazy" // Lazy loading
        />
      </div>

      <NavBar />

      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-end px-4 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-16 lg:pb-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            About
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            Gyanodaya Vidya Mandir High School provides a dynamic learning environment for every student.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
