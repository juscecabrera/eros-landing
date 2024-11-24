import React from 'react';
import Image from "next/image";
import erosLogo from '../app/assets/erosLogo.svg'
import erosText from '../app/assets/erosText.svg'

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <Image 
            src={erosLogo} 
            alt="erosLogo"
            width={405}
            height={280}
        />
        <Image 
            src={erosText}
            alt='erosText'
            width={343}
            height={100}
        />
        <h1 className='text-white font-jetbrains text-6xl'>00D : 00H : 04M : 24S </h1>
    </div>
  )
}

export default Hero