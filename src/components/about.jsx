'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from './navbar';

export default function About() {
  const backgroundImageUrl = 'https://res.cloudinary.com/diowslfww/image/upload/v1730351465/xn7wfirab3w7mhm8c3fv.png';

  return (
    <div className="relative min-h-screen w-full text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="School environment"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIioyPC8wMi4xJCUoPTo6Pj8yMkZJSj1HRVG8uMr/2wBDARUXFx4aHh4mHh4mxCMeIsTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      <NavBar />

      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-end px-4 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-16 lg:pb-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            About
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            Gyanodaya Vidya Mandir High School provides a dynamic learning environment for every student.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
