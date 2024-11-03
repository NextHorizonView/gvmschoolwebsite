'use client';
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavigationMenu';
import AboutUsSection from './AboutUsSection';
import WelcomeSection from './WelcomeSection';

export default function HomePage() {
  const generalBackgroundImageUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730351465/xn7wfirab3w7mhm8c3fv.png';

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
      {/* General Background Image */}
      <div className="absolute inset-0 z-0 h-screen">
        <img
          src={generalBackgroundImageUrl}
          alt="General background image"
          className="object-cover w-full h-full"
          loading="lazy"
        />
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

      {/* About Us Section */}
      <AboutUsSection /> {/* Render the AboutUs component */}
      <WelcomeSection />
    </div>
  );
}
