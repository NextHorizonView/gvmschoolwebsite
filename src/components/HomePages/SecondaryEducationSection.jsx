'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SecondaryEducationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="w-full bg-[#18413F] text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={contentVariants}
        >
          <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif">
              Secondary Education
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              In secondary education, our skilled teachers bring subject expertise and a commitment to excellence. 
              They challenge students to think critically, explore their interests, and prepare for future success. 
              Through personalized guidance, they help each student develop the knowledge and skills needed to 
              thrive beyond the classroom.
            </p>
          </div>
          <div className="w-full lg:order-1">
            <img
              src="https://res.cloudinary.com/diowslfww/image/upload/v1730634797/m19v9tccyswg8p9xezi8.png"
              alt="Secondary Education Teachers"
              className="w-full rounded-sm"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SecondaryEducationSection;