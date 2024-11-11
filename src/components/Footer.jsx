'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-4 px-4 md:py-8 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center lg:items-start">
          <motion.img
            src="https://res.cloudinary.com/diowslfww/image/upload/v1730352732/jluyshuiettxfwihtz22.png" 
            alt="School Logo"
            className="w-16 h-16 mb-2 md:w-20 md:h-20 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-gray-700 text-xs md:text-sm">
            © 2024 Gyanodaya Vidya Mandir High School, Inc.
            <br />
            All rights reserved.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Quick Links</h3>
          <Link href="/" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Home
            </motion.span>
          </Link>
          <Link href="/Admissions" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Admissions
            </motion.span>
          </Link>
          <Link href="/Staff" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Team
            </motion.span>
          </Link>
          <Link href="/" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Contact
            </motion.span>
          </Link>
        </div>
        
        {/* Connect with Us */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Connect with Us</h3>
          <Link href="#facebook" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Facebook
            </motion.span>
          </Link>
          <Link href="#twitter" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Twitter
            </motion.span>
          </Link>
          <Link href="#instagram" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Instagram
            </motion.span>
          </Link>
          <Link href="#linkedin" passHref>
            <motion.span className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              LinkedIn
            </motion.span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
