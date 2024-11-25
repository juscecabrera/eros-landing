import Image from "next/image"
import igLogo from '../app/assets/igLogo.svg'
import tiktokLogo from '../app/assets/tiktokLogo.svg'

const Socials = () => {
  return (
    <div className="flex flex-row gap-14 w-screen justify-center">
      <a href="https://www.instagram.com/eros.fitx" target="blank">
        <Image 
          src={igLogo} 
          alt="iglogo" 
          className="md:w-[51px] md:h-[51px] w-10 h-10"
        />
      </a>  
       
      <a href="https://www.instagram.com/eros.fitx" target="blank">
        <Image 
          src={tiktokLogo} 
          alt="tiktoklogo" 
          className="md:w-[43px] md:h-[51px] w-10 h-10"
        />
      </a>  
    </div>
  )
}

export default Socials