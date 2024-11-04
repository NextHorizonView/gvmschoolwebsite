'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../NavigationMenu';
import AboutUsSection from '@/components/HomePages/AboutUsSection';
import WelcomeSection from '@/components/HomePages/WelcomeSection';
import MeetPrincipalSection from '@/components/HomePages/MeetPrincipalSection';
import ConnectWithUsSection from './ContactUs';
import ThrivingCommunity from './ThrivingCommunity';
import UnlockingTheFuture from './UnlockingTheFuture';
import EducationSection from './EducationSection1';
import CommunitySection from './Community';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://res.cloudinary.com/diowslfww/image/upload/v1730351465/xn7wfirab3w7mhm8c3fv.png',
    'https://res.cloudinary.com/diowslfww/image/upload/v1730617268/fhxngs3xyadf1axlad59.png',
    'https://res.cloudinary.com/diowslfww/image/upload/v1730617268/fvjafcsesxf687chfyf3.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full object-cover"
          alt={`Slide ${currentIndex + 1}`}
        />
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      
    </div>
)
};

export default function HomePage() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Image Slider Background */}
      <div className="absolute inset-0 z-0">
        <ImageSlider />
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl px-4">
          <motion.div variants={textVariants} className="space-y-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              The Power of Education:
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Empowering Young Minds
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Other Sections */}
      <AboutUsSection />
      <WelcomeSection />
      <MeetPrincipalSection />
      <ConnectWithUsSection />
      <ThrivingCommunity/>
      <UnlockingTheFuture/>
      <EducationSection/>
      <CommunitySection/>
    </div>
  );
}
