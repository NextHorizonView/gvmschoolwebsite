'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Palette, Trophy, User } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsSection() {
  const aboutUsImageUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730548984/mbfasiufmgutamgbixxv.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cards = [
    {
      icon: <BookOpen className="w-12 h-12 text-[#18413F]" />,
      title: "Academic Excellence",
      description: "Discover our rich history and tradition of academic excellence.",
      buttonText: "Admissions",
      bgColor: "bg-[#E2C1A5]",
      link: "/Admissions"
    },
    {
      icon: <Palette className="w-12 h-12 text-white" />,
      title: "Cultural Activities",
      description: "Immerse yourself in a vibrant tapestry of cultural events.",
      buttonText: "Learn More",
      bgColor: "bg-[#18413F]",
      link: "#cultural-activities"
    },
    {
      icon: <Trophy className="w-12 h-12 text-white" />,
      title: "Sports and Athletics",
      description: "Unleash your competitive spirit through our athletic programs.",
      buttonText: "Join a Team",
      bgColor: "bg-[#19413F]",
      link: "#cultural-activities"
    },
    {
      icon: <User className="w-12 h-12 text-[#18413F]" />,
      title: "Faculty and Staff",
      description: "Meet our dedicated educators and administrators.",
      buttonText: "Know Us",
      bgColor: "bg-[#E2C1A5]",
      link: "/Staff"
    }
  ];

  return (
    <motion.section
      className="relative w-full min-h-screen py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={aboutUsImageUrl}
          alt="School Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="unica-one-regular text-4xl md:text-5xl lg:text-6xl text-[#18413F] text-center mb-16"
          variants={textVariants}
        >
          About Our School
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${card.bgColor} rounded-sm p-8 flex flex-col items-center text-center min-h-[350px]`}
            >
              <div className="mb-6">
                {card.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${card.bgColor === 'bg-[#E2C1A5]' ? 'text-[#18413F]' : 'text-white'}`}>
                {card.title}
              </h3>
              <p className={`mb-8 flex-grow ${card.bgColor === 'bg-[#E2C1A5]' ? 'text-[#18413F]' : 'text-white'}`}>
                {card.description}
              </p>
              <Link href={card.link}>
                <button
                  className={`px-6 py-2 rounded-[53px] transition-colors ${
                    card.bgColor === 'bg-[#E2C1A5]' 
                      ? 'bg-[#18413F] text-[#E2C1A5] hover:bg-opacity-90' 
                      : 'bg-[#E2C1A5] text-[#18413F] hover:bg-opacity-90'
                  }`}
                >
                  {card.buttonText}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
