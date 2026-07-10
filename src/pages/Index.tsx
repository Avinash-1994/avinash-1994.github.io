import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Domains from "@/components/Domains";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .project-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="sheet-frame">
        <div className="corner-tl"></div><div className="corner-tr"></div>
        <div className="corner-bl"></div><div className="corner-br"></div>
      </div>
      <div className="title-block">
        DWG&nbsp;<span>AVINASH&#8209;PORTFOLIO</span><br />
        SCALE&nbsp;<span>NTS</span> &nbsp; REV&nbsp;<span id="rev-date">2026.07</span><br />
        SHEET&nbsp;<span>1 OF 1</span>
      </div>

      <Navigation />
      
      <main className="px-[var(--frame)]">
        <Hero />
        <About />
        <Skills />
        <Domains />
        <Projects />
        <OpenSource />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-[var(--line)] py-8 px-6 text-center font-mono text-[11px] text-[var(--ink-faint)] tracking-widest">
        &copy; {new Date().getFullYear()} P Avinash — Built with React, TypeScript, and custom CSS.
      </footer>
    </>
  );
};

export default Index;
