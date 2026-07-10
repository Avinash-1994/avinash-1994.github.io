import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-[var(--frame)] left-[var(--frame)] right-[var(--frame)] flex items-center justify-between px-[26px] py-[18px] z-20 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-[rgba(10,22,38,0.86)] backdrop-blur-[10px] border-[var(--line)]"
          : "bg-[rgba(10,22,38,0)]"
      }`}
    >
      <div className="w-[38px] h-[38px] border border-[var(--teal-dim)] rounded-full flex items-center justify-center font-mono text-[13px] font-semibold text-[var(--teal)] shrink-0">
        PA
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-[32px] list-none items-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="font-mono text-[12px] tracking-[0.08em] uppercase text-[var(--ink-dim)] no-underline relative py-[4px] transition-colors duration-200 hover:text-[var(--ink)] group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--teal)] transition-all duration-250 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile Menu Button & Theme Toggle */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          className="text-[var(--ink)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--navy-1)] border border-[var(--line)] p-4 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="font-mono text-[12px] tracking-[0.08em] uppercase text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
