// UnlockingTheFuture.jsx
'use client';
import React from 'react';

export default function UnlockingTheFuture() {
  return (
    <div className="w-full bg-[#fef4ea] py-12 flex flex-col items-center text-center px-6">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-[#1E2A5E] mb-4">
        Unlocking the Future
      </h2>
      
      {/* Description */}
      <p className="text-md text-gray-700 max-w-3xl mb-8">
        Welcome to our school, a place where the pursuit of knowledge is elevated to an art form. 
        Here, we believe that education is the key to unlocking the boundless potential within each 
        and every student. Our world-class faculty, state-of-the-art facilities, and innovative 
        curriculum work in perfect harmony to create an environment that fosters academic excellence, 
        personal growth, and the development of essential skills for the 21st century.
      </p>
      
      {/* Button */}
      <button className="bg-[#1E2A5E] text-white py-2 px-8 rounded-md text-lg font-semibold shadow-lg hover:bg-[#172448]">
        KNOW MORE
      </button>
    </div>
  );
}
