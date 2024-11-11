'use client';
import React from 'react';
import PrimaryEnquiryForm from '@/components/Forms/PrimaryEnquiryForm';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[100vh] w-full"
      >
        <div
          className="absolute h-[100vh] w-full bg-cover  bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/diowslfww/image/upload/v1730548984/mbfasiufmgutamgbixxv.png')",
            opacity: 1,
            backgroundSize: 'cover', // Ensures the image covers the area
            backgroundPosition: 'center', // Ensures the image is centered
            backgroundRepeat: 'no-repeat', // Prevents image repetition
          }}
        />



        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Primary Education
              </h1>
              <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                Collaborative, challenging and enjoyable learning experiences.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At our school, Primary Education is all about nurturing young minds and laying a strong foundation for lifelong learning. In these formative years, we focus on developing key skills in literacy, numeracy, critical thinking, and creativity. Our engaging, hands-on curriculum is designed to spark curiosity and foster a love for learning.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="py-12 bg-[#FEF4EA]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706832/mvekzzwzkoqpfabet6ic.png"
                alt="Students in computer lab"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706803/n6ghlzbw5wcw19wvdre5.png"
                alt="Students in classroom"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706800/lgk4qy00uobjv6hdmmlp.png"
                alt="Students in laboratory"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enquiry Form Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="py-12 "
        style={{ backgroundColor: '#FEF4EA' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <PrimaryEnquiryForm/>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
