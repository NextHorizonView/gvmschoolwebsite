'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const EducationSection = () => {
  const controls = useAnimation();

  // Function to handle scroll animations
  const handleScroll = () => {
    const triggerPoint = window.innerHeight; // Trigger on entering the viewport

    if (window.scrollY > triggerPoint) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial call to set the animation on load
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Primary Education Section */}
      <div className="relative h-[100vh] md:h-[100vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/diowslfww/image/upload/v1730611515/lxhilihugq6gezsik2di.png')",
            filter: "brightness(1.0)"
          }}
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Primary Education
              </h1>
              <p className="text-lg md:text-xl text-black italic mb-6">
                Collaborative, challenging and enjoyable learning experiences.
              </p>
              <p className="text-base md:text-lg text-black mb-8 leading-relaxed">
                Our Primary Education program is designed to build foundational skills in young learners. Through engaging, hands-on activities, we foster curiosity and a love for learning in subjects such as literacy, numeracy, and creativity.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-teal-800 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-teal-700 transition-all"
              >
                Enquiry Form
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Primary Education Image Grid Section */}
      <div className="w-full py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div className="overflow-hidden rounded-lg h-full animated">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706832/mvekzzwzkoqpfabet6ic.png" 
                alt="Students in computer lab" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full animated">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706803/n6ghlzbw5wcw19wvdre5.png" 
                alt="Students in classroom" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full animated">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730706800/lgk4qy00uobjv6hdmmlp.png" 
                alt="Students in laboratory" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Secondary Education Section */}
      <div className="relative h-[100vh] md:h-[100vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/diowslfww/image/upload/v1730611515/lxhilihugq6gezsik2di.png')",
            filter: "brightness(1.0)"
          }}
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Secondary Education
              </h1>
              <p className="text-lg md:text-xl text-black italic mb-6">
                Collaborative, challenging and enjoyable learning experiences.
              </p>
              <p className="text-base md:text-lg text-black mb-8 leading-relaxed">
                Our Secondary Education program is designed to guide students through the next stage of their educational journey, where they deepen their knowledge, expand their skill sets, and prepare for future challenges. Our curriculum introduces advanced concepts in sciences, humanities, arts, and technology.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-teal-800 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-teal-700 transition-all"
              >
                Enquiry Form
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Secondary Education Image Grid Section */}
      <div className="w-full py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div className="overflow-hidden rounded-lg h-full animated">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730707586/ikgtrqgbb5afdflhmknc.png" 
                alt="Secondary Education Activities" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full animated">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730707596/ktdvldiu4n0zkrb6nfcw.png" 
                alt="Science Experiment" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg h-full animated">
              <img 
                src="https://res.cloudinary.com/diowslfww/image/upload/v1730707586/bxgidrtjyy8sfzdu56qe.png" 
                alt="Group Study Session" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
