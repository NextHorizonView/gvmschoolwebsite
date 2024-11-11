// UnlockingTheFuture.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Corrected import for Next.js Link

export default function UnlockingTheFuture() {
  return (
    <motion.div
      className="w-full bg-[#fef4ea] py-12 flex flex-col items-center text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main Heading */}
      <motion.h2
        className="text-4xl font-bold text-[#2C3A4F] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Unlocking the Future
      </motion.h2>
      
      {/* Description */}
      <motion.p
        className="text-md text-gray-700 max-w-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Welcome to our school, a place where the pursuit of knowledge is elevated to an art form. 
        Here, we believe that education is the key to unlocking the boundless potential within each 
        and every student. Our world-class faculty, state-of-the-art facilities, and innovative 
        curriculum work in perfect harmony to create an environment that fosters academic excellence, 
        personal growth, and the development of essential skills for the 21st century.
      </motion.p>
      
      
    </motion.div>
  );
}
