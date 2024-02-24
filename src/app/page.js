import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-4">
        <Navbar />
      </div>
      <div className="container mx-auto py-8 px-4 sm:px-6 mt-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <FooterSection />
      </div>
    </main>
  );
}
