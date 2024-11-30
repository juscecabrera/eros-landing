import Image from "next/image"
import igLogo from '../app/assets/igLogo.svg'
import tiktokLogo from '../app/assets/tiktokLogo.svg'

const Socials = () => {
  return (
    <div className="flex flex-row gap-14 w-screen justify-center pt-10">
      <a href="https://www.instagram.com/eros.fitx" target="blank">
        <Image 
          src={igLogo} 
          alt="iglogo" 
          className="w-10 h-10"
        />
      </a>  
       
      <a href="https://www.instagram.com/eros.fitx" target="blank">
        <Image 
          src={tiktokLogo} 
          alt="tiktoklogo" 
          className="w-10 h-10"
        />
      </a>  
    </div>
  )
}

export default Socials