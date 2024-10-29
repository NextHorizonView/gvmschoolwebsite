'use client';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { motion } from 'framer-motion';

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0, transform: 'translateX(40px)' },
        enter: { opacity: 1, transform: 'translateX(0px)' },
        leave: { opacity: 0, transform: 'translateX(-40px)' },
        config: { duration: 800, easing: (t) => t * (2 - t) }, // ease-in-out
    });

    // Automatically increment index every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 2000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    return (
        <motion.div
            className="relative w-full h-screen overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                {transitions((style, i) => (
                    <animated.div
                        key={i}
                        style={{
                            ...style,
                            backgroundImage: index === 0 
                                ? 'url(https://images.unsplash.com/photo-1729636364314-877a914f223a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8)' 
                                : index === 1 
                                ? 'url(https://plus.unsplash.com/premium_photo-1727895552599-fcd861505235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8)' 
                                : 'url(https://images.unsplash.com/photo-1729682459691-e18931cf9893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8)',
                        }}
                        className="absolute w-full h-full bg-cover bg-center"
                    />
                ))}
            </div>
            {/* Navigation Dots */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                    onClick={() => setIndex(0)}
                    className={`w-5 h-5 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-400'}`}
                ></button>
                <button
                    onClick={() => setIndex(1)}
                    className={`w-5 h-5 rounded-full ${index === 1 ? 'bg-white' : 'bg-gray-400'}`}
                ></button>
                <button
                    onClick={() => setIndex(2)}
                    className={`w-5 h-5 rounded-full ${index === 2 ? 'bg-white' : 'bg-gray-400'}`}
                ></button>
            </div>
            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl"
            >
                ‹
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl"
            >
                ›
            </button>
        </motion.div>
    );
}
