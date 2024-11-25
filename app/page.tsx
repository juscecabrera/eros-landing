import Hero from "@/components/Hero";
import Input from "@/components/Input";
import Socials from "@/components/Socials";
import EmailForm from "@/components/EmailForm";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <Hero />
      <EmailForm />
      <Socials />
    </div>
  );
}
