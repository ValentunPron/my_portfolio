import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";

const FooterSection = dynamic(() => import("./components/FooterSection"), {
  ssr: false,
  loading: () => <footer className="h-20 bg-[#121212]" />
});


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] md:text-sm">
      <Navbar />
      <div className="container mx-auto py-8 px-4 sm:px-6 mt-12">
        <HeroSection />
        <AboutSection />
        <EmailSection />
        <FooterSection />
      </div>
    </main>
  );
}