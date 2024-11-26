import React from 'react';
import Image from "next/image";
import erosLogo from '../app/assets/erosLogo.svg'
import erosText from '../app/assets/erosText.svg'
import Countdown from './Countdown';
import BackgroundVideo from './BGVideo';

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col pt-10 gap-5'>
        <Image 
            src={erosLogo} 
            alt="erosLogo"
            className='w-[200px] md:w-[280px] md:h-[280px]'
        />
        <Image 
            src={erosText}
            alt='erosText'
            className='w-[150px] md:w-[250px] md:h-[100px]'
        />
        <Countdown targetDate='2024-12-15T23:59:59'/>
    </div>
  )
}

export default Hero