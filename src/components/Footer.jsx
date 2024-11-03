'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center lg:items-start">
          <motion.img
            src="https://res.cloudinary.com/diowslfww/image/upload/v1730352732/jluyshuiettxfwihtz22.png" 
            alt="School Logo"
            className="w-20 h-20 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-gray-700 text-sm">
            © 2024 Gyanodaya Vidya Mandir High School, Inc.
            <br />
            All rights reserved.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Quick Links</h3>
          <motion.a 
            href="#home" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#about" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#programs" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Programs
          </motion.a>
          <motion.a 
            href="#contact" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>
        
        {/* Our Mission */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Our Mission</h3>
          <motion.a 
            href="#vision" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Vision
          </motion.a>
          <motion.a 
            href="#values" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Values
          </motion.a>
          <motion.a 
            href="#history" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            History
          </motion.a>
          <motion.a 
            href="#partnerships" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Partnerships
          </motion.a>
        </div>
        
        {/* Connect with Us */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Connect with Us</h3>
          <motion.a 
            href="#facebook" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Facebook
          </motion.a>
          <motion.a 
            href="#twitter" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Twitter
          </motion.a>
          <motion.a 
            href="#instagram" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            Instagram
          </motion.a>
          <motion.a 
            href="#linkedin" 
            className="block text-gray-700 hover:text-gray-900" 
            whileHover={{ scale: 1.05 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
