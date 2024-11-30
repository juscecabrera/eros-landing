import React from 'react';
import Image from "next/image";
import erosLogo from '../app/assets/erosLogo.svg'
// import erosText from '../app/assets/erosText.svg'

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col pt-10'>
      <Image src={erosLogo} alt="erosLogo" className='w-[50px] md:w-[80px]' />
    </div>
  )
}

export default Hero