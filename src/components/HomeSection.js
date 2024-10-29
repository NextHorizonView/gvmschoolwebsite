'use client';
import React from "react";
import { motion } from "framer-motion";

const HomeAndEducationalSection = () => {
  // Animation Variants
  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      {/* Home Section with Image-to-Color Gradient Background */}
      <motion.div
        className="relative bg-gradient-to-br from-transparent via-[#cce9d5] to-transparent py-24 md:py-32 lg:py-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <motion.div className="space-y-8 lg:space-y-10" variants={revealVariant}>
              <p className="text-emerald-600 uppercase text-sm font-medium tracking-wider">
                A Dynamic Learning Environment
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Making today's learning count in tomorrow's workplace
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                The infinite opportunities of the future will be the proving grounds of nimble young minds. So as parents and educators, we owe it to our young people to equip them today with the knowledge, skills, and attributes they will need to thrive tomorrow.
              </p>
              <button className="mt-6 px-10 py-4 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors">
                Learn More
              </button>
            </motion.div>

            {/* Image Section */}
            <motion.div className="w-full" variants={revealVariant}>
              <img
                src="https://abhs.sa.edu.au/wp-content/uploads/2024/03/PXL_20240223_015514826.PORTRAIT-scaled-e1710211942641.jpg"
                alt="Students learning outdoors"
                className="rounded-lg shadow-md w-full h-[450px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Educational Section with Gradient Background */}
      <motion.div
        className="relative bg-gradient-to-br from-[#cce9d5] via-[#d9f5e3] to-[#ffffff] py-20 lg:py-24 -mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left Image with Greener Gradient Overlay Underneath */}
            <motion.div className="relative lg:col-span-1" variants={revealVariant}>
              <img
                src="https://abhs.sa.edu.au/wp-content/uploads/2021/02/ABHS_S2_School_Building_Students_Walking.jpg"
                alt="Modern educational facility"
                className="rounded-lg shadow-md w-full h-[500px] object-cover"
              />
            </motion.div>

            {/* Center/Right Content */}
            <motion.div className="lg:col-span-2 space-y-16" variants={revealVariant}>
              {/* About Us Tag */}
              <div className="text-center">
                <p className="text-emerald-600 uppercase text-sm font-medium tracking-wider">About Us</p>
              </div>

              {/* Quick Links Section */}
              <div className="flex justify-end">
                <div className="space-y-6 w-full lg:w-[80%]">
                  <h3 className="text-emerald-600 font-medium text-lg">Quicklinks</h3>
                  <div className="w-full h-0.5 bg-gray-300"></div>
                  <ul className="space-y-4">
                    {["Enrolling at ABHS", "Engagement & Wellbeing", "Our Facilities"].map((link, index) => (
                      <li key={index} className="space-y-4">
                        <a
                          href="#"
                          className="text-gray-800 hover:text-emerald-600 font-medium text-lg transition-colors block"
                        >
                          {link} &gt;
                        </a>
                        <div className="w-full h-0.5 bg-gray-300"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Educational Vision */}
              <div className="space-y-8">
                <div>
                  <p className="text-emerald-600 uppercase text-sm font-medium tracking-wider">
                    High-Quality Secondary Learning
                  </p>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3">
                    Educational Vision
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                  Adelaide Botanic High School students engage in learning tasks which are about connecting, creating, communicating, co-ordinating, and collaborating.
                </p>
                <button className="px-10 py-4 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors">
                  Learning at ABHS
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Meet the Principal Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[#cce9d5] via-[#d9f5e3] to-transparent py-24 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 lg:space-y-10">
              <p className="text-emerald-600 uppercase text-sm font-medium tracking-wider">
                Meet the Principal
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Alistair Brown - Foundation Principal
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                "Looking to tomorrow's expectations to inform today's learning."
              </p>
              <div className="space-y-4">
                <h3 className="text-gray-900 font-medium text-lg">Meet Our Principal</h3>
                <div className="w-full h-0.5 bg-gray-300"></div> {/* Horizontal Line */}
                <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                  Learn More &gt;
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-gray-900 font-medium text-lg">Meet Our Team</h3>
                <div className="w-full h-0.5 bg-gray-300"></div> {/* Horizontal Line */}
                <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                  Learn More &gt;
                </a>
              </div>
            </div>

            {/* Image Section */}
            <motion.div className="w-full" variants={revealVariant}>
              <img
                src="https://abhs.sa.edu.au/wp-content/uploads/2024/03/PXL_20240223_015514826.PORTRAIT-scaled-e1710211942641.jpg"
                alt="Alistair Brown - Foundation Principal"
                className="rounded-lg shadow-md w-full h-[450px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default HomeAndEducationalSection;
