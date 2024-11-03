'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CommunitySection = () => {
  const [selected, setSelected] = useState('cultural');
  const [direction, setDirection] = useState(0);

  const content = {
    cultural: {
      title: "Cultural",
      description: "While our staff and students come from far and wide, they come together with a true sense of pride and belonging – both in themselves and their school. This ensures our future leaders are part of a community that fosters a culture of learning, support, and acceptance.",
      image: "https://res.cloudinary.com/diowslfww/image/upload/v1730638046/fmluvmrzvbdpfx3zl7cn.png"
    },
    sports: {
      title: "Sports",
      description: "Our comprehensive sports program emphasizes physical fitness, teamwork, and leadership development. Students engage in various sporting activities that not only promote health but also teach valuable life lessons about discipline, perseverance, and sportsmanship.",
      image: "https://res.cloudinary.com/diowslfww/image/upload/v1730351465/xn7wfirab3w7mhm8c3fv.png"
    },
    academic: {
      title: "Academic Excellence",
      description: "Our commitment to academic excellence is reflected in our innovative teaching methods and personalized attention to each student. We create an environment that challenges students to think critically, solve complex problems, and develop a lifelong passion for learning.",
      image: "https://res.cloudinary.com/diowslfww/image/upload/v1730638136/ibu6uuzmonr1jecknabc.png"
    }
  };

  const tabOrder = ['cultural', 'sports', 'academic'];

  const handleTabClick = (tab) => {
    const currentIndex = tabOrder.indexOf(selected);
    const newIndex = tabOrder.indexOf(tab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelected(tab);
  };

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
    <section className="min-h-screen bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl text-[#18413F] font-serif"
            >
              Fostering a Vibrant Community
            </motion.h2>

            {/* Navigation Links */}
            <div className="space-y-4">
              {tabOrder.map((tab) => (
                <motion.div
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`cursor-pointer w-full flex items-center justify-between p-4 border-b border-[#18413F] ${selected === tab ? 'bg-[#18413F] text-white' : 'text-[#18413F]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className="text-xl"
                    onClick={() => handleTabClick(tab)} // Ensure clicking the text also triggers the slide
                  >
                    {content[tab].title}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transform transition-transform ${selected === tab ? 'rotate-90' : ''
                      }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={selected}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="space-y-6"
              >
                <h3 className="text-3xl text-[#18413F] font-serif">
                  {content[selected].title}
                </h3>
                <p className="text-[#18413F] text-lg leading-relaxed">
                  {content[selected].description}
                </p>
                <motion.button
                  className="px-6 py-3 bg-[#18413F] text-white rounded-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OUR FACILITIES
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={selected}
                src={content[selected].image}
                alt={`${content[selected].title} Image`}
                className="w-full h-full object-cover rounded-sm absolute top-0 left-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {tabOrder.map((tab) => (
            <span
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`w-3 h-3 rounded-full cursor-pointer ${selected === tab ? 'bg-[#18413F]' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
