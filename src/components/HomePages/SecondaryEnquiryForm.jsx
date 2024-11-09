import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SecondaryEnquiryForm = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure rendering only happens on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent server-side rendering
  if (!isClient) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.section
      className="w-full min-h-screen flex items-center justify-center  py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-2xl w-full px-4">
        <motion.div 
          className="text-center mb-8"
          variants={contentVariants}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800">Secondary Enquiry Form</h2>
        </motion.div>

        <motion.div
          className="bg-[#143B3C] p-8 md:p-12 rounded-lg"
          variants={contentVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400"
              />
            </div>
            
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400"
            />
            
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400"
            />
            
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2.5 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 resize-none"
            />
            
            <button
              type="submit"
              className="w-full p-2.5 bg-transparent border border-gray-600 rounded-md text-white text-sm hover:bg-gray-800 transition-colors"
            >
              Submit Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SecondaryEnquiryForm;
