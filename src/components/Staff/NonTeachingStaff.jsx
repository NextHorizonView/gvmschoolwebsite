import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NonTeachingStaff = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const staffImages = [
    { id: 1, imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730809918/kos8wfcxjkjgnayelgcv.png" },
    { id: 2, imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730809618/nd3byyd3rqmcur4kqdaa.png" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + staffImages.length) % staffImages.length);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Slider Section */}
        <div className="mb-12">
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-lg">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSlide}
                  className="w-full flex-shrink-0"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={staffImages[currentSlide].imageUrl}
                    alt={`Staff member ${currentSlide + 1}`}
                    className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons with Framer Motion */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {staffImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Title Animation */}
        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Non-teaching Staff
        </motion.h1>

        {/* Text Section with Fade-In */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="rounded-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NonTeachingStaff;
