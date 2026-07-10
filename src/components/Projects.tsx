const projects = [
  {
    title: "Zlaata",
    description: "Trendy women's fashion e-commerce platform with extensive clothing collections, smart product recommendations, and seamless shopping experience.",
    url: "https://www.zlaata.com/",
    category: "E-commerce",
    status: "Production",
    tags: ["React", "Next.js", "TailwindCSS"],
    stamps: ["Seamless Shopping", "Smart Recommendations"]
  },
  {
    title: "DigiTathya",
    description: "Anti-counterfeiting and supply chain verification platform using QR technology for product authentication, warranty management, and brand protection.",
    url: "https://digitathya.com/",
    category: "Product Security",
    status: "Production",
    tags: ["Angular", "RxJS", "SCSS"],
    stamps: ["QR Verification", "Supply Chain Tracking"]
  },
  {
    title: "Zrika",
    description: "Risk engine management tool for merchant payment transactions, providing fraud detection, transaction monitoring, and risk assessment for secure payment processing.",
    url: "https://www.zrika.com/",
    category: "Payment Security",
    status: "Production",
    tags: ["Angular", "TypeScript", "REST APIs"],
    stamps: ["Fraud Detection", "Risk Engine"]
  },
  {
    title: "GoshHR",
    description: "Cloud-based HR software with MyTimesheet for workflow tracking, MyNest for amenities management, and TimeLyze for productivity analytics.",
    url: "https://goshhr.com/",
    category: "HRMS",
    status: "Production",
    tags: ["React", "Redux", "Material UI"],
    stamps: ["Workflow Tracking", "Productivity Analytics"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-[1080px] mx-auto py-[120px] px-[24px]">
      <div className="eyebrow reveal">04 — Selected work</div>
      <h2 className="reveal">Products I've built and contributed to</h2>
      <p className="section-sub reveal">Real-world applications delivered for modern businesses and consumers.</p>
      
      <div>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card reveal reveal-delay-${(index % 3) + 1 > 3 ? 3 : (index % 3) + 1}`}
          >
            <svg className="project-svg-border" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="4"/>
            </svg>
            <div className="project-head">
              <div className="project-title flex items-center gap-3">
                {project.title}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--teal)] opacity-70 hover:opacity-100 transition-opacity"
                  aria-label={`Visit ${project.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
              <div className="project-status">{project.category} · {project.status}</div>
            </div>
            <div className="project-desc">
              {project.description}
            </div>
            <div className="stamp-row">
              {project.stamps.map(stamp => (
                <span key={stamp} className="stamp">{stamp}</span>
              ))}
            </div>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
