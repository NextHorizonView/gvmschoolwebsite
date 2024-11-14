'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addAdmissionEnquiry } from '@/firebase/EnquiryForm/write';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    EnquiryFirstName: '',
    EnquiryPhoneNumber: '',
    EnquirySection:'Business',
  });
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const enquiryId = await addAdmissionEnquiry(formData);
      alert(`Enquiry submitted Successfully`);
      setFormData({
        EnquiryFirstName: '',
        EnquiryPhoneNumber: '',
      });
    } catch (error) {
      console.error("Error submitting enquiry",);
      alert("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <motion.section
      className="w-full min-h-screen flex items-center justify-center relative p-4 pt-20 md:pt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div 
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/diowslfww/image/upload/v1730548984/mbfasiufmgutamgbixxv.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl w-full px-4 md:px-6 lg:px-8 py-8 relative z-10 pt-28 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get in Touch Section */}
          <motion.div
            className="space-y-6 backdrop-blur-xl p-8 rounded-2xl"
            variants={contentVariants}
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-wide text-black">GET IN TOUCH</h2>
              <p className="text-black text-sm">Anything in your mind?</p>
              <p className="text-black text-sm">Request a call from our team</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  name="EnquiryFirstName"
                  value={formData.EnquiryFirstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-xl placeholder-black text-black text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="EnquiryPhoneNumber"
                  value={formData.EnquiryPhoneNumber}
                  onChange={handleChange}
                  placeholder="PHONE NUMBER"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-xl placeholder-black text-black text-sm focus:outline-none focus:border-white/40 transition"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-400 text-black px-8 py-3 rounded-3xl text-sm hover:bg-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                Send a request
              </button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="space-y-6 backdrop-blur-xl p-8 rounded-2xl border-white/10"
            variants={contentVariants}
          >
            <h2 className="text-3xl font-bold tracking-wide text-black">CONTACT US</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-black text-sm mb-2">Phone number</h3>
                <p className="text-black text-sm font-medium">+1 (999) 999-99-99</p>
              </div>
              
              <div className="group">
                <h3 className="text-black text-sm mb-2">Gmail</h3>
                <p className="text-black text-sm font-medium">Gyanodayavidyamandir.com</p>
              </div>
              
              <div className="group">
                <h3 className="text-black text-sm mb-2">Address</h3>
                <p className="text-black text-sm font-medium">Vile Parle, Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
