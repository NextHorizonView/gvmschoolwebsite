'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  const aboutUsImageUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730548984/mbfasiufmgutamgbixxv.png';

  const images = {
    cultural: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/utkqv5epz2veybwniv5v.png',
    sports: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/va2xlwiznk8shhiijjjg.png',
    faculty: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/nfrpb8ehai0mvsvmxecu.png',
    academics: 'https://res.cloudinary.com/diowslfww/image/upload/v1730549476/academics_icon.png',
    bright: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/yvwivhjaorybeq0pwimf.png',
    visionary: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/q5jpwzdw09nrcbddw1wi.png',
    leaders: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/rj9hm6m0vyxgysziwv6w.png'
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Full-width Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={aboutUsImageUrl}
          alt="School Background"
          className="w-50% h-50% object-cover"
          style={{ minHeight: '100vh' }}
        />
        {/* Semi-transparent overlay */}
        <div className="" />
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
          <motion.div variants={textVariants} className="mb-12 pl-4 md:pl-8 lg:pl-16 text-left">
            <h1 className="unica-one-regular text-4xl md:text-6xl lg:text-8xl text-[#18413F] mb-20 mt-20">
              About Our School
            </h1>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Academic Excellence Card */}
            <motion.div
              variants={textVariants}
              className="bg-[#19413F] text-white p-6 sm:p-8 rounded-sm flex flex-col"
              style={{ minHeight: '300px' }}
            >
              <img src={images.academics} alt="Academic Excellence" className="w-12 h-12 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                Discover our rich history and tradition of academic excellence
              </h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                Learn about our renowned faculty and cutting-edge curriculum
              </p>
              <div className="flex justify-center mt-auto">
                <button className="bg-[#E2C1A5] text-[#19413F] py-2 px-4 rounded-[53px] text-sm hover:bg-opacity-90 transition-colors w-[120px] sm:w-[150px]">
                  Admissions
                </button>
              </div>
            </motion.div>

            {/* Cultural Activities Card */}
            <motion.div
              variants={textVariants}
              className="bg-[#E2C1A5] text-[#19413F] p-6 sm:p-8 rounded-sm flex flex-col"
              style={{ minHeight: '300px' }}
            >
              <img src={images.cultural} alt="Cultural Activities" className="w-12 h-12 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Cultural Activities</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                Immerse yourself in a vibrant tapestry of cultural events
              </p>
              <div className="flex justify-center mt-auto">
                <button className="bg-[#19413F] text-[#E2C1A5] py-2 px-4 rounded-[53px] text-sm hover:bg-opacity-90 transition-colors w-[120px] sm:w-[150px]">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Sports Card */}
            <motion.div
              variants={textVariants}
              className="bg-[#19413F] text-white p-6 sm:p-8 rounded-sm flex flex-col"
              style={{ minHeight: '300px' }}
            >
              <img src={images.sports} alt="Sports and Athletics" className="w-12 h-12 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Sports and Athletics</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                Unleash your competitive spirit through our athletic programs
              </p>
              <div className="flex justify-center mt-auto">
                <button className="bg-[#E2C1A5] text-[#19413F] py-2 px-4 rounded-[53px] text-sm hover:bg-opacity-90 transition-colors w-[120px] sm:w-[150px]">
                  Join a Team
                </button>
              </div>
            </motion.div>

            {/* Faculty Card */}
            <motion.div
              variants={textVariants}
              className="bg-[#E2C1A5] text-[#19413F] p-6 sm:p-8 rounded-sm flex flex-col"
              style={{ minHeight: '300px' }}
            >
              <img src={images.faculty} alt="Faculty and Staff" className="w-12 h-12 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Faculty and Staff</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                Meet our dedicated educators and administrators
              </p>
              <div className="flex justify-center mt-auto">
                <button className="bg-[#19413F] text-[#E2C1A5] py-2 px-4 rounded-[53px] text-sm hover:bg-opacity-90 transition-colors w-[120px] sm:w-[150px]">
                  Know Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Welcome to Our School Section */}
       
      </motion.div>
    </div>

    
  );
}
