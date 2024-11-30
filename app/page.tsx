import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import EmailForm from "@/components/EmailForm";
import BackgroundVideo from "@/components/BGVideo";
import Countdown from "@/components/Countdown";


export default function Home() {
  return (
    <div className="w-screen h-dvh bg-transparent grid grid-cols-1 grid-rows-[2fr_1fr_2fr]">
      <div className="row-start-1 row-end-1 flex justify-center items-end">
        <Countdown targetDate='2024-12-15T23:59:59'/>
      </div>

      <div className="row-start-2 row-end-2">
      <BackgroundVideo />

      </div>

      <div className="row-start-3 row-end-3">
        <EmailForm />
        <Socials />
        {/* <Hero /> */}
      </div>
  
    </div>
  );
}
