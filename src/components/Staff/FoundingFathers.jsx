import React from 'react';
import { motion } from 'framer-motion';

const FoundingFathersSection = () => {

    const currentPrincipalsImages = [
        "https://res.cloudinary.com/diowslfww/image/upload/v1730805569/iefl95nt9szfhd4lybau.png",
        "https://res.cloudinary.com/diowslfww/image/upload/v1730805569/hai2x6ypbuisbwcsgbe4.png",
        "https://res.cloudinary.com/diowslfww/image/upload/v1730805569/ygf8igfexhatozi6zn1c.png"
      ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
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
    <div className="w-full bg-white py-12">
      <motion.div 
        className="max-w-7xl mx-auto w-full text-center px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={headerVariants}>
          <h2 className="text-4xl font-bold text-[#1a237e] mb-8">
            Meet Our Founding Fathers
          </h2>
        </motion.div>

        {/* Founding Fathers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[1, 2].map((index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              variants={cardVariants}
            >
              <motion.div
                className="relative w-[347.43px] h-[468.52px] mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
  src={
    index === 1
      ? "https://res.cloudinary.com/diowslfww/image/upload/v1730805569/beuj83t924q6cz1300td.png"
      : "https://res.cloudinary.com/diowslfww/image/upload/v1730805569/rczyd1r16iawr5xno3pg.png"
  }
  alt={`Foundation Principal ${index}`}
  className="rounded-lg object-cover w-full h-full"
/>
                <div className="absolute inset-0 border-4  rounded-lg transform"></div>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-700">Foundation Principal</h3>
            </motion.div>
          ))}
        </div>

        <motion.div variants={headerVariants} className="mb-8">
          <blockquote className="text-xl italic text-gray-600">
            "Looking to tomorrow's expectations to inform today's learning."
          </blockquote>
        </motion.div>

        {/* Current Principals Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[1, 2, 3].map((index) => (
    <motion.div 
      key={index}
      className="flex flex-col items-center"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-[276.62px] h-[446.7px] mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={currentPrincipalsImages[index - 1]} // Access each URL by index
          alt={`Foundation Principal ${index}`}
          className="rounded-lg object-cover w-full h-full border-4"
        />
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-700">Foundation Principal</h3>
    </motion.div>
  ))}
</div>
      </motion.div>
    </div>
  );
};

export default FoundingFathersSection;