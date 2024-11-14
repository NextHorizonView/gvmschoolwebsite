import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NonTeachingStaff = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const staffImages = [
    { id: 1, imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730809918/kos8wfcxjkjgnayelgcv.png" },
    { id: 2, imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730809618/nd3byyd3rqmcur4kqdaa.png" }
  ];

  useEffect(() => {
    // Delay to ensure the component is mounted to prevent hydration errors
    setIsMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + staffImages.length) % staffImages.length);
  };

  if (!isMounted) return null;

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Slider Section */}
        <div className="mb-12">
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-lg relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
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

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

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
            Non-teaching staff plays a crucial role in ensuring the smooth and effective functioning of educational institutions. Their responsibilities, though behind the scenes, are vital for maintaining a conducive learning environment. From administrative duties to managing facilities, non-teaching staff members support teachers, students, and the overall operations of the institution. Their dedication and hard work contribute significantly to the institution’s success, providing essential services that allow the educational process to thrive.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NonTeachingStaff;
