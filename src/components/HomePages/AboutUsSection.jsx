'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  const aboutUsImageUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730548984/mbfasiufmgutamgbixxv.png';

  const images = {
    academics: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/academics_icon.png',
    cultural: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/utkqv5epz2veybwniv5v.png',
    sports: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/va2xlwiznk8shhiijjjg.png',
    faculty: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/nfrpb8ehai0mvsvmxecu.png'
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cards = [
    {
      icon: images.academics,
      title: "Academic Excellence",
      description: "Discover our rich history and tradition of academic excellence",
      buttonText: "Admissions",
      bgColor: "bg-[#19413F]",
      textColor: "text-white",
      buttonBg: "bg-[#E2C1A5]"
    },
    {
      icon: images.cultural,
      title: "Cultural Activities",
      description: "Immerse yourself in a vibrant tapestry of cultural events",
      buttonText: "Learn More",
      bgColor: "bg-[#E2C1A5]",
      textColor: "text-[#19413F]",
      buttonBg: "bg-[#19413F]"
    },
    {
      icon: images.sports,
      title: "Sports and Athletics",
      description: "Unleash your competitive spirit through our athletic programs",
      buttonText: "Join a Team",
      bgColor: "bg-[#19413F]",
      textColor: "text-white",
      buttonBg: "bg-[#E2C1A5]"
    },
    {
      icon: images.faculty,
      title: "Faculty and Staff",
      description: "Meet our dedicated educators and administrators",
      buttonText: "Know Us",
      bgColor: "bg-[#E2C1A5]",
      textColor: "text-[#19413F]",
      buttonBg: "bg-[#19413F]"
    }
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={aboutUsImageUrl}
          alt="School Background"
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative h-full flex flex-col justify-center px-4 py-12 overflow-y-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* About Our School Heading */}
          <motion.h1
            variants={textVariants}
            className="unica-one-regular text-4xl md:text-6xl lg:text-8xl text-[#18413F] mb-16 text-center"
          >
            About Our School
          </motion.h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`${card.bgColor} p-8 rounded-sm flex flex-col items-center text-center min-h-[350px]`}
              >
                <img src={card.icon} alt={card.title} className="w-12 h-12 mb-6" />
                <h3 className={`text-xl font-bold mb-4 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`mb-8 flex-grow ${card.textColor}`}>
                  {card.description}
                </p>
                <button
                  className={`px-6 py-2 rounded-[53px] transition-colors ${card.buttonBg} ${card.textColor === "text-[#19413F]" ? "text-[#E2C1A5]" : "text-[#19413F]"} hover:bg-opacity-90`}
                >
                  {card.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
