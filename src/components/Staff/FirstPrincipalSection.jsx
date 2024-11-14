import React, { forwardRef } from 'react';

import { motion } from 'framer-motion';

const FirstPrincipalSection = forwardRef((props, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="first-principal-section min-h-screen">
           <div className="w-full bg-[#FEF4EA]">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8"
          variants={contentVariants}
        >
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col space-y-6">
            <h2 className="text-6xl font-serif font-bold">
              Meet The 1st <br/> 
              Principal
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
            With a journey spanning over three decades in education and leadership—and a lifetime commitment as a parent—I know that selecting the right school for your child is a deeply impactful choice. Our goal here is to foster a nurturing environment where each student develops into a well-rounded, resilient individual, ready for the challenges and opportunities beyond the classroom. We aim to empower students, encouraging their growth into adaptable, capable young adults who will contribute meaningfully to the world around them.
            </p>
          </div>

          {/* Image Section */}
          <motion.div 
            className="md:w-1/2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-[
604.01px] h-[800px]">
              <img
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730806461/zmmybq1wdljhptucg0nm.png"
                alt="First Principal"
                className="rounded-lg object-cover w-[604.01px] h-[800px]"
              />
              <div className="absolute inset-0 border-4 rounded-lg"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    </section>
   
  );
});

export default FirstPrincipalSection;