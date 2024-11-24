import Image from "next/image"
import igLogo from '../app/assets/igLogo.svg'
import tiktokLogo from '../app/assets/tiktokLogo.svg'

const Socials = () => {
  return (
    <div className="flex flex-row gap-14 w-screen justify-center h-44">
        <Image src={igLogo} alt="iglogo" width={51} height={51}></Image>
        <Image src={tiktokLogo} alt="tiktoklogo" width={43} height={51}></Image>
    </div>
  )
}

export default Socials