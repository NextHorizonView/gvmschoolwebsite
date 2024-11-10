'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PrimaryAdmissionSection = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Primary Education Section */}
      <div
        className="relative h-[100vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/diowslfww/image/upload/v1730611515/lxhilihugq6gezsik2di.png')" }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Primary Education</h1>
              <p className="text-lg md:text-xl text-black italic mb-6">Collaborative, challenging, and enjoyable learning experiences.</p>
              <p className="text-base md:text-lg text-black mb-8 leading-relaxed">
                At our school, Primary Education is all about nurturing young minds and laying a strong foundation for lifelong learning. In these formative years, we focus on developing key skills in literacy, numeracy, critical thinking, and creativity. Our engaging, hands-on curriculum is designed to spark curiosity and foster a love for learning.
              </p>
              <Link href='/PrimaryAdmission'>
                <button className="bg-teal-800 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-teal-700 transition-all">
                  Enquiry Form
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Primary Education Image Grid Section */}
      <div className="w-full py-8 bg-[#FEF4EA]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div className="overflow-hidden rounded-lg h-full">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706832/mvekzzwzkoqpfabet6ic.png" 
                alt="Students in computer lab" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706803/n6ghlzbw5wcw19wvdre5.png" 
                alt="Students in classroom" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706800/lgk4qy00uobjv6hdmmlp.png" 
                alt="Students in laboratory" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryAdmissionSection;
