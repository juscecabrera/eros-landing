// import Image from "next/image"
// import igLogo from '../app/assets/igLogo.svg'
// import tiktokLogo from '../app/assets/tiktokLogo.svg'
import Hero from "./Hero"

const Socials = () => {
  return (
    <div className="font-jetbrains text-white flex flex-row gap-14 w-screen justify-center pt-10">
      <Hero />
      <a href="https://www.instagram.com/eros.fitx" target="blank" className="flex justify-center items-center">
        {/* <Image src={igLogo} alt="iglogo" className="w-10 h-10" /> */}
        CONTACT
      </a>  
       
      <a href="https://www.youtube.com/watch?v=oD5f55ohsc4" target="blank" className="flex justify-center items-center">
        {/* <Image src={tiktokLogo} alt="tiktoklogo" className="w-10 h-10"/> */}
        WATCH VIDEO
      </a>  
    </div>
  )
}

export default Socials