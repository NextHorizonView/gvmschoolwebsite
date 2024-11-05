'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeSection() {
  const images = {
    bright: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/yvwivhjaorybeq0pwimf.png',
    visionary: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/q5jpwzdw09nrcbddw1wi.png',
    leaders: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/rj9hm6m0vyxgysziwv6w.png'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-[#FEF4EA] py-12">
      <motion.div 
        className="max-w-7xl mx-auto w-full text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={headerVariants}>
          <h2 className="text-5xl font-bold text-[#1E2A5E] mb-2">
            Welcome to Our School
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore the Endless Possibilities of Learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nurturing Bright Futures Card */}
          <motion.div 
            className="bg-[#FEF4EA] rounded-lg p-6 flex flex-col items-center text-center"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={images.bright}
              alt="Nurturing Bright Futures"
              className="rounded-md w-full h-48 object-cover mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Nurturing Bright Futures</h3>
            <p className="text-sm text-gray-700">
              At our school, we believe in fostering a nurturing environment where students can thrive academically, socially, and personally
            </p>
          </motion.div>

          {/* Visionary Leaders Card */}
          <motion.div 
            className="bg-[#FEF4EA] rounded-lg p-6 flex flex-col items-center text-center"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={images.visionary}
              alt="Visionary Leaders"
              className="rounded-md w-full h-48 object-cover mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Visionary Leaders</h3>
            <p className="text-sm text-gray-700">
              Our school's curriculum is designed to challenge and engage students, encouraging them to develop critical thinking skills, problem-solving abilities, and a love for lifelong learning
            </p>
          </motion.div>

          {/* Community and Collaboration Card */}
          <motion.div 
            className="bg-[#FEF4EA] rounded-lg p-6 flex flex-col items-center text-center"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={images.leaders}
              alt="Community and Collaboration"
              className="rounded-md w-full h-48 object-cover mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Community and Collaboration</h3>
            <p className="text-sm text-gray-700">
              At the heart of our school lies a community of passionate individuals, from our experienced educators to our ambitious students
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}