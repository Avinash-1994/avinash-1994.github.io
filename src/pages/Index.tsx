import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Domains from "@/components/Domains";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground scroll-smooth relative">
      <InteractiveBackground />
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <OpenSource />
      <Domains />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 P Avinash. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
