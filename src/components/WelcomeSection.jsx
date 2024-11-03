// WelcomeSection.jsx
'use client';
import React from 'react';

export default function WelcomeSection() {
  const images = {
    bright: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/yvwivhjaorybeq0pwimf.png',
    visionary: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/q5jpwzdw09nrcbddw1wi.png',
    leaders: 'https://res.cloudinary.com/diowslfww/image/upload/v1730608504/rj9hm6m0vyxgysziwv6w.png'
  };

  return (
    <div className="w-full bg-[#FEF4EA] py-12">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-5xl font-bold text-[#1E2A5E] mb-2">
          Welcome to Our School
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore the Endless Possibilities of Learning
        </p>

        {/* New Section Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nurturing Bright Futures Card */}
          <div className="bg-[#FEF4EA] rounded-lg  p-6 flex flex-col items-center text-center">
            <img
              src={images.bright}
              alt="Nurturing Bright Futures"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Nurturing Bright Futures</h3>
            <p className="text-sm text-gray-700">
            At our school, we believe in fostering a nurturing environment where students can thrive academically, socially, and personally
            </p>
          </div>

          {/* Visionary Leaders Card */}
          <div className="bg-[#FEF4EA] rounded-lg  p-6 flex flex-col items-center text-center">
            <img
              src={images.visionary}
              alt="Visionary Leaders"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Visionary Leaders</h3>
            <p className="text-sm text-gray-700">
            Our school's curriculum is designed to challenge and engage students, encouraging them to develop critical thinking skills, problem-solving abilities, and a love for lifelong learning
            </p>
          </div>

          {/* Community and Collaboration Card */}
          <div className="bg-[#FEF4EA] rounded-lg p-6 flex flex-col items-center text-center">
            <img
              src={images.leaders}
              alt="Community and Collaboration"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-[#656262] mb-2">Community and Collaboration</h3>
            <p className="text-sm text-gray-700">
            At the heart of our school lies a community of passionate individuals, from our experienced educators to our ambitious students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
