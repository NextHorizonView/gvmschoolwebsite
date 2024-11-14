import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const MeetPrincipalStaff = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
    };

    // Custom Link Component
    const AnimatedLink = ({ href, text }) => (
        <Link href={href}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer border-y border-[#18413F] py-4 hover:bg-[#18413F]/5 transition-all duration-300"
            >
                <div className="flex items-center justify-between px-4">
                    <span className="text-[#18413F] text-lg font-medium">
                        {text}
                    </span>
                    <ChevronRight 
                        className="text-[#18413F] transform group-hover:translate-x-1 transition-transform" 
                        size={24} 
                    />
                </div>
            </motion.div>
        </Link>
    );

    return (
        <motion.section
            className="w-full bg-[#FFF5EE] py-16 md:py-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-full h-[500px] md:h-[600px]"
                    >
                        <img
                            src="https://res.cloudinary.com/diowslfww/image/upload/v1730610889/urluxcsgydj38vv6bnog.png"
                            alt="School Principal"
                            className="w-full h-full object-cover rounded-sm"
                        />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col space-y-6"
                    >
                        <motion.h2
                            variants={textVariants}
                            className="unica-one-regular text-4xl md:text-5xl lg:text-6xl text-[#18413F]"
                        >
                            Meet The Principal
                        </motion.h2>

                        <motion.p
                            variants={textVariants}
                            className="text-[#18413F] text-lg md:text-xl leading-relaxed"
                        >
                            As a dedicated educator with over 25 years of experience and a parent myself, I deeply understand the significance of selecting the right school for your child. It’s a decision that shapes their future, fostering not just academic growth but also life skills that will serve them well beyond the classroom. We all desire a nurturing environment where our children can thrive into healthy, capable adults, equipped with resilience, adaptability, and readiness for the world ahead.
                        </motion.p>

                        <motion.div
                            className="flex flex-col space-y-4 pt-6"
                            variants={containerVariants}
                        >
                            {/* Links Section */}
                            
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default MeetPrincipalStaff;