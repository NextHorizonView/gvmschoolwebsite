import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { addAdmissionEnquiry } from '@/firebase/EnquiryForm/write';

const SecondaryEnquiryForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    EnquiryLastName: '',
    EnquiryFirstName: '',
    EnquiryEmail: '',
    EnquiryPhoneNumber: '',
    EnquiryMessage: '',
    EnquirySection:'Secondary',
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

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
        EnquiryLastName: '',
        EnquiryFirstName: '',
        EnquiryEmail: '',
        EnquiryPhoneNumber: '',
        EnquiryMessage: '',
      });
    } catch (error) {
      console.error("Error submitting enquiry",);
      alert("Failed to submit enquiry. Please try again.");
    }
  };

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="w-full min-h-screen flex items-center justify-center py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-2xl w-full px-4">
        <motion.div className="text-center mb-8" variants={contentVariants}>
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800">Secondary Enquiry Form</h2>
        </motion.div>

        <motion.div className="bg-[#FEF4EA] p-8 md:p-12 rounded-lg" variants={contentVariants}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="EnquiryLastName"
                value={formData.EnquiryLastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-2.5 bg-transparent border border-black rounded-md text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black"
              />
              <input
                type="text"
                name="EnquiryFirstName"
                value={formData.EnquiryFirstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-2.5 bg-transparent border border-black rounded-md text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black"
              />
            </div>
            
            <input
              type="email"
              name="EnquiryEmail"
              value={formData.EnquiryEmail}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2.5 bg-transparent border border-black rounded-md text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black"
            />
            
            <input
              type="tel"
              name="EnquiryPhoneNumber"
              value={formData.EnquiryPhoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2.5 bg-transparent border border-black rounded-md text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black"
            />
            
            <textarea
              name="EnquiryMessage"
              value={formData.EnquiryMessage}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full p-2.5 bg-transparent border border-black rounded-md text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black resize-none"
            />
            
            <button
              type="submit"
              className="w-full p-2.5 bg-[#18413F] border border-black rounded-md text-white text-sm hover:bg-gray-800 transition-colors"
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
