'use client';
import React from 'react';
import Image from 'next/image';
import erosLogo from '../app/assets/erosLogo.svg';
import erosText from '../app/assets/erosText.svg';
import Countdown from './Countdown';

const Hero2 = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/video.mp4' type="video/mp4" />
      </video>

      {/* Contenido */}
      <div className="relative flex flex-col items-center justify-center gap-5 text-center">
        <Image 
          src={erosLogo} 
          alt="erosLogo"
          className="w-[200px] md:w-[280px] md:h-[280px]"
        />
        <Image 
          src={erosText}
          alt="erosText"
          className="w-[150px] md:w-[250px] md:h-[100px]"
        />
        <Countdown targetDate="2024-12-15T23:59:59" />
      </div>
    </div>
  );
};

export default Hero2;
