'use client'
import React, { forwardRef } from 'react';

import { motion } from 'framer-motion';

const StaffSection = forwardRef((props, ref) => {
  const profiles = [
    {
      id: 1,
      name: "Dr. Smith",
      position: "Senior Position",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730807578/fulrajhyuzr6ldlcodb8.png"
    },
    {
      id: 2,
      name: "Dr. Johnson",
      position: "Department Head",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: "https://res.cloudinary.com/diowslfww/image/upload/v1730807579/owm8g9xf1gtpzyaruzbf.png"
    }
  ];

  return (
    <section ref={ref} className="staff-section min-h-screen">
       <div 
      className="relative w-full h-full py-16" // Ensures full background coverage
      style={{
        backgroundImage: "url('https://res.cloudinary.com/diowslfww/image/upload/v1730611515/lxhilihugq6gezsik2di.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Profile Cards Container */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 mb-24">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16`}
            >
              {/* Text Content */}
              <div className={`w-full lg:w-1/2 ${
                index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
              }`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-4 sm:p-6  rounded-lg "
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1A364C] mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-4">
                    {profile.position}
                  </p>
                  <p className="text-gray-800 text-sm sm:text-base">
                    {profile.description}
                  </p>
                </motion.div>
              </div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-start"
              >
                <div className="relative w-[90%] sm:w-[75%] md:w-[460px] h-[auto] sm:h-[306.7px] overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={profile.imageUrl}
                    alt={`${profile.name}'s profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    </section>
   
  );
});

export default StaffSection;
