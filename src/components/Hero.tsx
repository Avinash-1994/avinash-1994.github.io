import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [typedText, setTypedText] = useState("");
  const phrases = ['based in Bilaspur, Chhattisgarh', 'building Vurk, TrackQR & Sparx', 'shipping Angular & Next.js'];

  useEffect(() => {
    if (reduceMotion) {
      setTypedText(" — based in Bilaspur, Chhattisgarh");
      return;
    }

    let pi = 0;
    let ci = 0;
    let deleting = false;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const phrase = phrases[pi];
      if (!deleting) {
        ci++;
        setTypedText(' — ' + phrase.slice(0, ci));
        if (ci === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1800);
          return;
        }
      } else {
        ci--;
        setTypedText(ci > 0 ? ' — ' + phrase.slice(0, ci) : '');
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 28 : 45);
    };

    timeoutId = setTimeout(tick, 1400);
    return () => clearTimeout(timeoutId);
  }, [reduceMotion]);

  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-[140px]"
      style={{
        backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        backgroundPosition: 'center',
        maskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 55%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 40%, black 55%, transparent 100%)'
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6 w-full relative z-10">
        <div className="font-mono text-[13px] text-[var(--teal)] tracking-[0.1em] uppercase mb-[22px] opacity-0 animate-[fadeUp_0.6s_ease_0.1s_forwards]">
          // Portfolio — Revision 2026.07
        </div>
        
        <h1 className="text-[clamp(44px,8vw,88px)] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--ink)] opacity-0 animate-[fadeUp_0.7s_ease_0.25s_forwards]">
          P Avinash
        </h1>
        
        <p className="text-[clamp(18px,2.6vw,26px)] text-[var(--ink-dim)] mt-[18px] font-normal opacity-0 animate-[fadeUp_0.7s_ease_0.45s_forwards]">
          Senior Frontend Developer <span>{typedText}</span><span className="border-r-2 border-[var(--teal)] animate-[blink_0.9s_step-end_infinite]">&nbsp;</span>
        </p>

        <div className="flex flex-wrap gap-[28px] mt-[40px] font-mono text-[12px] text-[var(--ink-faint)] opacity-0 animate-[fadeUp_0.7s_ease_0.65s_forwards]">
          <div>
            <span className="text-[var(--ink-dim)] block text-[10px] tracking-[0.08em] uppercase mb-[4px]">Base</span>
            Bilaspur, Chhattisgarh
          </div>
          <div>
            <span className="text-[var(--ink-dim)] block text-[10px] tracking-[0.08em] uppercase mb-[4px]">Working out of</span>
            Chennai
          </div>
          <div>
            <span className="text-[var(--ink-dim)] block text-[10px] tracking-[0.08em] uppercase mb-[4px]">Core stack</span>
            Angular · Next.js · TypeScript
          </div>
        </div>

        <div className="mt-[48px] flex gap-[16px] flex-wrap opacity-0 animate-[fadeUp_0.7s_ease_0.85s_forwards]">
          <a href="#work" className="btn btn-primary">
            View the work &nbsp;→
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
