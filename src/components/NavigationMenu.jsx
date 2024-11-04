'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logoUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730352732/jluyshuiettxfwihtz22.png';

    return (
        <motion.nav
            className="absolute top-0 w-full h-[143px] z-50 px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center h-full">
                {/* Logo and School Name Container */}
                <div className="flex items-center gap-3">
                    <div className="relative w-[60px] h-[60px]">
                        <Image
                            src={logoUrl}
                            alt="School Logo"
                            width={60}
                            height={60}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        
                        <h1 className="text-3xl font-bold opacity-80">Gyanodaya</h1>
                        <h2 className="text-3xl font-bold opacity-80">Vidya Mandir</h2>
                        <h3 className="text-3xl font-bold opacity-80">High School</h3>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-8 items-center text-white text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                        <Link href="/Admissions" className="hover:text-gray-300 transition-colors">Admissions</Link>
                        <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
                        <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                        <div className="bg-black/20 backdrop-blur-sm rounded-full px-6 py-2">
                            <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
                        </div>
                    </nav>

                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm mt-2 py-6 px-4 md:hidden"
                >
                    <nav className="flex flex-col space-y-6 text-white text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                        <Link href="/admissions" className="hover:text-gray-300 transition-colors">Admissions</Link>
                        <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
                        <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                        <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
                    </nav>
                </motion.div>
            )}
        </motion.nav>
    );
}