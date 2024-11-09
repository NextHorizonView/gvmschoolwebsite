'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAdmissionHovered, setIsAdmissionHovered] = useState(false);
    const dropdownRef = useRef(null);
    const logoUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730352732/jluyshuiettxfwihtz22.png';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsAdmissionHovered(false);
            }
            if (!event.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const AdmissionDropdown = () => (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 bg-black/90 backdrop-blur-sm rounded-lg py-2 mt-2 min-w-[200px]"
        >
            <Link 
                href="/Admissions" 
                className="block px-4 py-2 text-white hover:bg-white/10 transition-all relative group"
                onClick={() => setIsAdmissionHovered(false)}
            >
                <span className="relative">
                    Admissions
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
            </Link>
            <Link 
                href="/PrimaryAdmission" 
                className="block px-4 py-2 text-white hover:bg-white/10 transition-all relative group"
                onClick={() => setIsAdmissionHovered(false)}
            >
                <span className="relative">
                    Primary Admission
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
            </Link>
            <Link 
                href="/SecondaryAdmission" 
                className="block px-4 py-2 text-white hover:bg-white/10 transition-all relative group"
                onClick={() => setIsAdmissionHovered(false)}
            >
                <span className="relative">
                    Secondary Admission
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
            </Link>
        </motion.div>
    );

    return (
        <motion.nav
            className="absolute top-0 w-full h-[143px] z-50 px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center h-full">
                {/* Logo and School Name Container */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
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
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center">
                    <nav className="flex items-center gap-8 text-white text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <Link href="/" className="relative group">
                            <span className="relative">
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </Link>
                        <div 
                            className="relative"
                            ref={dropdownRef}
                        >
                            <button
                                className="flex items-center gap-1 relative group cursor-pointer py-2"
                                onClick={() => setIsAdmissionHovered(!isAdmissionHovered)}
                                onMouseEnter={() => setIsAdmissionHovered(true)}
                            >
                                <span className="relative">
                                    Admissions
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </span>
                                <ChevronDown 
                                    size={20} 
                                    className={`transform transition-transform ${isAdmissionHovered ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            <AnimatePresence>
                                {isAdmissionHovered && (
                                    <div 
                                        onMouseLeave={() => setIsAdmissionHovered(false)}
                                        className="absolute top-full left-0 pt-2"
                                    >
                                        <div 
                                            className="absolute -top-2 left-0 right-0 h-4 bg-transparent"
                                        />
                                        <AdmissionDropdown />
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link href="/Staff" className="relative group">
                            <span className="relative">
                                Team
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </Link>
                        <Link href="/contact" className="relative group">
                            <span className="relative">
                                Contact
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </Link>
                    </nav>
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
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm mt-2 py-6 px-4 md:hidden"
                    >
                        <nav className="flex flex-col space-y-4 text-white text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <Link 
                                href="/" 
                                className="relative group w-fit"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="relative">
                                    Home
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                            <div className="space-y-2">
                                
                                <Link 
                                    href="/Admissions" 
                                    className="block pl-4 relative group w-fit"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative">
                                        Admissions
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                <Link 
                                    href="/PrimaryAdmission" 
                                    className="block pl-4 relative group w-fit"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative">
                                        Primary Admission
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                                <Link 
                                    href="/SecondaryAdmission" 
                                    className="block pl-4 relative group w-fit"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative">
                                        Secondary Admission
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </div>
                            <Link 
                                href="/Staff" 
                                className="relative group w-fit"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="relative">
                                    Team
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                            <Link 
                                href="/contact" 
                                className="relative group w-fit"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="relative">
                                    Contact
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}