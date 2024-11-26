import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import EmailForm from "@/components/EmailForm";
import BackgroundVideo from "@/components/BGVideo";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-transparent">
      <Hero />
      <EmailForm />
      <Socials />
      <BackgroundVideo />
    </div>
  );
}
