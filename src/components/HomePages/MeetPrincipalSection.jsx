import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const MeetPrincipalSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

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
                            As an educator and leader for over 35 years, and a father for almost as long, 
                            I understand there are few decisions in life as important as the choice of 
                            school for your child. We want them to grow up to be healthy, capable adults; 
                            adaptable, resilient and prepared for life beyond school.
                        </motion.p>

                        <motion.div
                            className="flex flex-col space-y-4 pt-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Meet Our Principal Link */}
                            <motion.div
                                className="group cursor-pointer"
                                variants={linkVariants}
                            >
                                <div className="flex items-center justify-between py-4 border-t border-b border-[#18413F]">
                                    <span className="text-[#18413F] text-lg font-medium">
                                        Meet Our Principal
                                    </span>
                                    <ChevronRight 
                                        className="text-[#18413F] transform group-hover:translate-x-1 transition-transform" 
                                        size={24} 
                                    />
                                </div>
                            </motion.div>

                            {/* Meet Our Team Link */}
                            <motion.div
                                className="group cursor-pointer"
                                variants={linkVariants}
                            >
                                <div className="flex items-center justify-between py-4 border-t border-b border-[#18413F]">
                                    <span className="text-[#18413F] text-lg font-medium">
                                        Meet Our Team
                                    </span>
                                    <ChevronRight 
                                        className="text-[#18413F] transform group-hover:translate-x-1 transition-transform" 
                                        size={24} 
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default MeetPrincipalSection;
