import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto py-8 px-4 sm:px-6 mt-12">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
