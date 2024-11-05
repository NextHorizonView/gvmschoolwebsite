import React from 'react';

const Possibilities = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[600px]">
      {/* Left Content Section */}
      <div className="bg-[#18413F] text-white p-8 lg:p-12 flex flex-col justify-center space-y-6">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-serif mb-6">
            Embracing a World of Possibilities
          </h1>
          <p className="text-lg opacity-90 mb-8">
            At our school, we believe that the future belongs to those who are willing
            to step out of their comfort zones, embrace new challenges, and forge
            their own paths.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              className="bg-[#FDB813] hover:bg-[#fdc443] text-black font-medium px-8 py-3 rounded-full transition-all duration-300 text-sm"
            >
              Discover More
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative bg-gray-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <img
          src="https://res.cloudinary.com/diowslfww/image/upload/v1730811325/bressac50tdzhwqui4u4.png"
          alt="Teacher explaining concepts to students"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Possibilities;