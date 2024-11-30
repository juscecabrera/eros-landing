import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import EmailForm from "@/components/EmailForm";
import BackgroundVideo from "@/components/BGVideo";
import Countdown from "@/components/Countdown";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-transparent">
      <Countdown targetDate='2024-12-15T23:59:59'/>
      <EmailForm />
      <Socials />
      <Hero />
      <BackgroundVideo />
    </div>
  );
}
