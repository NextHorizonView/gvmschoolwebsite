'use client';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { motion } from 'framer-motion';

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0.1 },
        enter: { opacity: 1 },
        leave: { opacity: 0.1 },
        config: { duration: 1800, easing: (t) => (--t) * t * t + 1 }, // smooth easing-out curve
    });

    // Automatically increment index every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <motion.div
            className="relative w-full h-screen overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Images */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                {transitions((style, i) => (
                    <animated.div
                        key={i}
                        style={{
                            ...style,
                            backgroundImage: index === 0 
                                ? 'url(https://abhs.sa.edu.au/wp-content/uploads/2021/03/ABHS_Image_Hero_Large_10.jpg)' 
                                : index === 1 
                                ? 'url(https://abhs.sa.edu.au/wp-content/uploads/2021/03/ABHS_Image_Hero_Large_6.jpg)' 
                                : 'url(https://abhs.sa.edu.au/wp-content/uploads/2021/03/ABHS_Image_Hero_Large_11.jpg)',
                        }}
                        className="absolute w-full h-full bg-cover bg-center shadow-md"
                    />
                ))}
            </div>
            {/* Subtle Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full">
                {transitions((style, i) => (
                    <animated.div
                        key={i}
                        style={{
                            ...style,
                            backgroundColor: 'rgba(0, 0, 0, 0.15)',
                            opacity: style.opacity,
                        }}
                        className="absolute w-full h-full"
                    />
                ))}
            </div>
            {/* Navigation Dots */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
                {[0, 1, 2].map((dotIndex) => (
                    <button
                        key={dotIndex}
                        onClick={() => setIndex(dotIndex)}
                        className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === dotIndex ? 'bg-white' : 'bg-gray-500 opacity-70 hover:opacity-100'}`}
                    ></button>
                ))}
            </div>
        </motion.div>
    );
}
