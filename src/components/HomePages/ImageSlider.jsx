import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    'https://res.cloudinary.com/diowslfww/image/upload/v1730351465/xn7wfirab3w7mhm8c3fv.png',
    'https://res.cloudinary.com/diowslfww/image/upload/v1730617268/fhxngs3xyadf1axlad59.png',
    'https://res.cloudinary.com/diowslfww/image/upload/v1730617268/fvjafcsesxf687chfyf3.png',
  ];

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.2
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 }
      }
    })
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.div 
          className="text-center px-4 w-full max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="space-y-4 sm:space-y-6">
            <motion.h2 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-bold text-white leading-tight"
              variants={textVariants}
            >
              The Power of Education:
            </motion.h2>
            <motion.h2 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-bold text-white leading-tight"
              variants={textVariants}
            >
              Empowering Young Minds
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Image Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Large Navigation Dots */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative p-4 focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span 
              className={`block w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 
                ${currentIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 group-hover:bg-white/75'}`
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 