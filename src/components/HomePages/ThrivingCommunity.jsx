// WelcomeSection.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ThrivingCommunity() {
  const images = {
    bright: 'https://res.cloudinary.com/diowslfww/image/upload/v1730625967/sdmsyhhf4zc2l2wbpfuy.png',
    visionary: 'https://res.cloudinary.com/diowslfww/image/upload/v1730625967/fppcy5hnmgubkwa0fjbe.png',
    leaders: 'https://res.cloudinary.com/diowslfww/image/upload/v1730625967/c9gqeokr2aiugj6qjgwe.png'
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="w-full bg-[#FEF4EA] py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl font-bold text-[#1E2A5E] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Cultivating a Thriving Community
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-md text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering through Collaboration
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Shaping Young Minds Card */}
          <motion.div
            className="bg-[#FEF4EA] rounded-lg p-6 flex flex-col items-center text-center"
            variants={cardVariants}
          >
            <img
              src={images.bright}
              alt="Shaping Young Minds"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Shaping Young Minds</h3>
            <p className="text-sm text-gray-700 mb-4">
              Our faculty members are dedicated to providing a personalized learning experience, guiding students to reach their full potential and become the leaders of tomorrow
            </p>
            <p className="text-[#1E2A5E] font-semibold text-sm mt-4 hover:underline">
              Inspiring Innovative Thinkers
            </p>
          </motion.div>

          {/* Visionary Leaders Card */}
          <motion.div
            className="bg-[#FEF4EA] rounded-lg p-6 flex flex-col items-center text-center"
            variants={cardVariants}
          >
            <img
              src={images.visionary}
              alt="Visionary Leaders"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Visionary Leaders</h3>
            <p className="text-sm text-gray-700 mb-4">
              At the heart of our school lies a tapestry of diverse perspectives and experiences, where students learn to navigate the complexities of the modern world with empathy, critical thinking, and a commitment to making a positive impact
            </p>
            <p className="text-[#1E2A5E] font-semibold text-sm hover:underline">
              Join Our Community
            </p>
          </motion.div>

          {/* Nurturing Visionary Leaders Card */}
          <motion.div
            className="bg-[#FEF4EA] rounded-lg p-6 flex flex-col items-center text-center"
            variants={cardVariants}
          >
            <img
              src={images.leaders}
              alt="Nurturing Visionary Leaders"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Nurturing Visionary Leaders</h3>
            <p className="text-sm text-gray-700 mb-4">
              Our school's mission is to cultivate a community of lifelong learners, where students are encouraged to explore their passions, challenge boundaries, and develop the skills necessary to thrive in an ever-evolving global landscape
            </p>
            <p className="text-[#1E2A5E] font-semibold text-sm hover:underline">
              Empowering Innovative Minds
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
