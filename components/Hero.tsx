import React from 'react';
import Image from "next/image";
import erosLogo from '../app/assets/erosLogo.svg'
// import erosText from '../app/assets/erosText.svg'

const Hero = () => {
  return (
    <div>
      <Image src={erosLogo} alt="erosLogo" className='w-[50px] h-10' />
    </div>
  )
}

export default Hero