import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 bg-background bg-grid-pattern">
      {/* Subtle overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
            P Avinash
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Senior Frontend Developer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Senior Frontend Developer with <strong className="text-foreground font-semibold">6 years of experience</strong>, specializing in building high-performance React and Angular applications. Pioneering modern, AI-assisted development workflows to accelerate delivery, design scalable architectures, and ship clean, robust code.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover:opacity-95 text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all duration-300"
            asChild
          >
            <a href="mailto:pavinash469@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-border hover:bg-muted text-foreground transition-all duration-300"
            asChild
          >
            <a href="#experience">View Experience</a>
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a href="tel:+919301201064" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-5 w-5" />
            <span>+91 9301201064</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Bilaspur, Chhattisgarh</span>
          </div>
          <a href="https://www.linkedin.com/in/p-avinash-kumar-0437481b3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Avinash-1994" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
