'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-50 bg-transparent"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-32 h-auto" />
        </div>
        <div className="flex justify-center space-x-4 mx-auto">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Menu</a>
          <a href="#" className="text-white hover:text-gray-300">Community</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
        <button className="bg-black text-white px-4 py-1 rounded-full">FAQ</button>
      </div>
    </motion.nav>
  );
}
