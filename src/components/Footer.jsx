'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
          <Link href="/">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Home
            </motion.a>
          </Link>
          <Link href="/Admissions">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Admissions
            </motion.a>
          </Link>
          <Link href="/Staff">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Team
            </motion.a>
          </Link>
          <Link href="/">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Contact
            </motion.a>
          </Link>
        </div>
        
        {/* Our Mission */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Our Mission</h3>
          <Link href="#vision">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Vision
            </motion.a>
          </Link>
          <Link href="#values">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Values
            </motion.a>
          </Link>
          <Link href="#history">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              History
            </motion.a>
          </Link>
          <Link href="#partnerships">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Partnerships
            </motion.a>
          </Link>
        </div>
        
        {/* Connect with Us */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Connect with Us</h3>
          <Link href="#facebook">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Facebook
            </motion.a>
          </Link>
          <Link href="#twitter">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Twitter
            </motion.a>
          </Link>
          <Link href="#instagram">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              Instagram
            </motion.a>
          </Link>
          <Link href="#linkedin">
            <motion.a className="block text-gray-700 hover:text-gray-900" whileHover={{ scale: 1.05 }}>
              LinkedIn
            </motion.a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
