import React from 'react';
import { motion } from 'framer-motion';
import { Users, Phone, Globe, Building2 } from 'lucide-react';

const ConnectWithUsSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const cards = [
        {
            icon: <Users className="w-12 h-12 text-[#18413F]" />,
            title: "Faculty",
            description: "Contact and meet our faculty to know more about us",
            buttonText: "Plan a Visit",
            bgColor: "bg-[#E2C1A5]"
        },
        {
            icon: <Phone className="w-12 h-12 text-white" />,
            title: "Contact Information",
            description: "Get in touch with our dedicated admissions team to learn more about our programs and explore your options",
            buttonText: "Reach Out",
            bgColor: "bg-[#18413F]"
        },
        {
            icon: <Globe className="w-12 h-12 text-white" />,
            title: "Stay Connected",
            description: "Follow us on social media to stay up-to-date with the latest news and events",
            buttonText: "Join Our Community",
            bgColor: "bg-[#19413F]"
        },
        {
            icon: <Building2 className="w-12 h-12 text-[#18413F]" />,
            title: "Partners and Affiliations",
            description: "Explore our collaborations with industry leaders and renowned institutions",
            buttonText: "Learn More",
            bgColor: "bg-[#E2C1A5]"
        }
    ];

    return (
        <motion.section
            className="relative w-full min-h-screen py-16 md:py-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://res.cloudinary.com/diowslfww/image/upload/v1730611515/lxhilihugq6gezsik2di.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                {/* Heading */}
                <motion.h2 
                    variants={textVariants}
                    className="unica-one-regular text-4xl md:text-5xl lg:text-6xl text-[#18413F] text-center mb-16"
                >
                    Connect With Us
                </motion.h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className={`${card.bgColor} rounded-sm p-8 flex flex-col items-center text-center min-h-[350px]`}
                        >
                            <div className="mb-6">
                                {card.icon}
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${card.bgColor === 'bg-[#E2C1A5]' ? 'text-[#18413F]' : 'text-white'}`}>
                                {card.title}
                            </h3>
                            <p className={`mb-8 flex-grow ${card.bgColor === 'bg-[#E2C1A5]' ? 'text-[#18413F]' : 'text-white'}`}>
                                {card.description}
                            </p>
                            <button 
                                className={`px-6 py-2 rounded-[53px] transition-colors ${
                                    card.bgColor === 'bg-[#E2C1A5]' 
                                        ? 'bg-[#18413F] text-[#E2C1A5] hover:bg-opacity-90' 
                                        : 'bg-[#E2C1A5] text-[#18413F] hover:bg-opacity-90'
                                }`}
                            >
                                {card.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ConnectWithUsSection;
