import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
      className="w-full bg-[#143B3C] text-white min-h-screen flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl w-full px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Get in Touch Section */}
          <motion.div
            className="space-y-6"
            variants={contentVariants}
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-wide">GET IN TOUCH</h2>
              <p className="text-gray-400 text-sm">Anything in your mind?</p>
              <p className="text-gray-400 text-sm">Request a call from our team</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full p-2 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="w-full p-2 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-400 text-white px-6 py-2 rounded-3xl text-sm hover:bg-emerald-500 transition-colors"
              >
                Send a request
              </button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="space-y-6"
            variants={contentVariants}
          >
            <h2 className="text-3xl font-bold tracking-wide">CONTACT US</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Phone number</h3>
                <p className="text-sm">+1 (999) 999-99-99</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Gmail</h3>
                <p className="text-sm">Gyanodayavidyamandir.com</p>
              </div>
              
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Address</h3>
                <p className="text-sm">Vile Parle, Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;