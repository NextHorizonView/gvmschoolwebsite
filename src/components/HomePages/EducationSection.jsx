'use client';
import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
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

  const sections = [
    {
      title: "Primary Education",
      description: "Our primary teachers are dedicated to nurturing young minds with creativity and compassion. They focus on building essential skills, fostering curiosity, and creating a warm, supportive environment where children feel confident to explore, ask questions, and develop a love for learning.",
      imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730634797/pzcd0v7xb2ocriplakqh.png",
      imageAlt: "Primary Education Teachers"
    },
    {
      title: "Secondary Education",
      description: "In secondary education, our skilled teachers bring subject expertise and a commitment to excellence. They challenge students to think critically, explore their interests, and prepare for future success. Through personalized guidance, they help each student develop the knowledge and skills needed to thrive beyond the classroom.",
      imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730634797/m19v9tccyswg8p9xezi8.png",
      imageAlt: "Secondary Education Teachers"
    }
  ];

  return (
    <motion.section
      className="w-full bg-[#18413F] text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 last:mb-0 items-center`}
            variants={contentVariants}
          >
            {/* Content section */}
            <div 
              className={`flex flex-col justify-center space-y-6 p-8 lg:p-12 ${
                index === 1 ? 'lg:order-2' : ''
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-serif">
                {section.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {section.description}
              </p>
            </div>

            {/* Image section */}
            <div className={`w-full ${index === 1 ? 'lg:order-1' : ''}`}>
              <img
                src={section.imageUrl}
                alt={section.imageAlt}
                className="w-full rounded-sm"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;