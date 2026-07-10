import { Briefcase, DollarSign, ShoppingBag, BarChart3, Globe, Layers, Heart, Package } from "lucide-react";

const domains = [
  { title: "HRMS & Timesheet", icon: Briefcase, description: "Enterprise HR management and time tracking solutions" },
  { title: "Healthcare & Wellness", icon: Heart, description: "Healthcare applications and wellness platforms" },
  { title: "Fintech & KYC", icon: DollarSign, description: "Secure financial verification and payment processing" },
  { title: "E-commerce", icon: ShoppingBag, description: "Full-featured online shopping experiences" },
  { title: "Product Solutions", icon: Package, description: "Supply chain, anti-counterfeiting, and product management" },
  { title: "Enterprise Analytics", icon: BarChart3, description: "Data visualization and business intelligence tools" },
  { title: "Marketing & Brands", icon: Globe, description: "High-converting marketing websites" },
  { title: "Interactive Apps", icon: Layers, description: "Dynamic and engaging user experiences" }
];

const Domains = () => {
  return (
    <section id="domains" className="max-w-[1080px] mx-auto py-[120px] px-[24px]">
      <div className="eyebrow reveal">03 — Domains</div>
      <h2 className="reveal">Domain Expertise</h2>
      <p className="section-sub reveal">Industries and applications I've worked with across my career.</p>
      
      <div className="stack-grid">
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <div 
              key={domain.title} 
              className={`stack-cat reveal reveal-delay-${(index % 4) + 1 > 3 ? 3 : (index % 4) + 1}`}
            >
              <h3 className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" />
                {domain.title}
              </h3>
              <p className="text-[var(--ink-dim)] text-[13px] pr-[16px]">
                {domain.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Domains;
