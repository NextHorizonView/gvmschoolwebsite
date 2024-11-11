'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import WelcomeSection from '@/components/HomePages/WelcomeSection';
import FoundingFathersSection from '@/components/Staff/FoundingFathers';
import FirstPrincipalSection from '@/components/Staff/FirstPrincipalSection';
import StaffSection from '@/components/Staff/StaffSection1';
import StaffSection2 from '@/components/Staff/StaffSection2';
import NonTeachingStaff from '@/components/Staff/NonTeachingStaff';
import Possibilities from '@/components/Staff/MeetThePossibilites';
import CommunitySection from '@/components/HomePages/Community';

const Page = () => {
  const principalRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToPrincipal = () => {
    if (principalRef.current) {
      principalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/diowslfww/image/upload/v1730548984/mbfasiufmgutamgbixxv.png')",
            filter: "brightness(0.9)"
          }}
        />
     
        {/* Main Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto min-h-[calc(100vh-80px)] flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 md:px-12 lg:px-24 py-8 lg:py-0">
          {/* Left Side - Heading */}
          <div className="w-full lg:w-[45%] pl-4 lg:pl-12 mb-12 lg:mb-0 text-center lg:text-left mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 lg:mb-6 text-lg lg:text-xl text-gray-700 tracking-wide"
            >
              THE MINDS THAT SHAPE GVMH
            </motion.div>
  
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A364C] leading-[1.2]"
            >
              MEET THE<br /> STAFF
            </motion.h1>
          </div>
  
          {/* Right Side - Section Buttons */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:mt-12 lg:items-end space-y-6 px-4 lg:pr-12 mb-8 lg:mb-0">
            <motion.button
              onClick={scrollToPrincipal}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-[#18413F] text-white px-8 lg:px-10 py-4 rounded-md w-full max-w-[320px] flex justify-center text-lg font-medium hover:bg-teal-700 transition-all relative"
            >
              <span className="absolute inset-[2px] rounded-md border border-white/60 group-hover:border-white/40 transition-colors"></span>
              <span className="relative">MEET OUR PRINCIPAL</span>
            </motion.button>
  
            <motion.button
              onClick={scrollToTeam}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group bg-[#18413F] text-white px-8 lg:px-10 py-4 rounded-md w-full max-w-[320px] flex justify-center text-lg font-medium hover:bg-teal-700 transition-all relative"
            >
              <span className="absolute inset-[2px] rounded-md border border-white/60 group-hover:border-white/40 transition-colors"></span>
              <span className="relative">MEET OUR TEAM</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div>
        <WelcomeSection />
        <FoundingFathersSection />
        
        {/* Wrap FirstPrincipalSection with forwardRef and assign ref */}
        <FirstPrincipalSection ref={principalRef} />

        {/* Wrap StaffSection with forwardRef and assign ref */}
        <StaffSection ref={teamRef} />
        
        <StaffSection2 />
        <NonTeachingStaff />

        {/* Full-Width Image with Animation */}
        <motion.img
          src="https://res.cloudinary.com/diowslfww/image/upload/v1730810929/g2mlisaaldaw56bpu3te.png"
          alt="Group Photo"
          className="w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      <Possibilities />
      <CommunitySection />
    </>
  );
};

export default Page;
