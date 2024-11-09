'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SecondaryAdmissionSection = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Secondary Education Section */}
      <div
        className="relative h-[100vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/diowslfww/image/upload/v1730611515/lxhilihugq6gezsik2di.png')" }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Secondary Education</h1>
              <p className="text-lg md:text-xl text-black italic mb-6">Guiding students through the next stage of their educational journey.</p>
              <p className="text-base md:text-lg text-black mb-8 leading-relaxed">
                Our Secondary Education program is designed to guide students through the next stage of their educational journey, where they deepen their knowledge, expand their skill sets, and prepare for future challenges. Building on the foundations of primary education, our secondary curriculum introduces more advanced concepts across a wide range of subjects, including sciences, humanities, arts, and technology.
              </p>
              <Link href='/SecondaryAdmission'>
                <button className="bg-teal-800 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-teal-700 transition-all">
                  Enquiry Form
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Secondary Education Image Grid Section */}
      <div className="w-full py-8 bg-[#FEF4EA]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div className="overflow-hidden rounded-lg h-full">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730707586/ikgtrqgbb5afdflhmknc.png" 
                alt="Secondary Education Activities" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730707596/ktdvldiu4n0zkrb6nfcw.png" 
                alt="Science Experiment" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730707586/bxgidrtjyy8sfzdu56qe.png" 
                alt="Group Study Session" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryAdmissionSection;
