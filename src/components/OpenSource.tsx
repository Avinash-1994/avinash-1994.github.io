const OpenSource = () => {
  return (
    <section id="open-source" className="max-w-[1080px] mx-auto pb-[120px] px-[24px]">
      <div className="project-card reveal reveal-delay-2" style={{ marginTop: '0' }}>
        <svg className="project-svg-border" preserveAspectRatio="none">
          <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="4"/>
        </svg>
        <div className="project-head">
          <div className="project-title flex items-center gap-3">
            nuxc
            <a 
              href="https://github.com/Avinash-1994/nuxc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--teal)] opacity-70 hover:opacity-100 transition-opacity"
              aria-label="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
          <div className="project-status">Alpha: nuclie · In development</div>
        </div>
        <div className="project-desc">
          Modern JS/TS build tool powered by SWC + LightningCSS. A fast Webpack and Vite alternative that blends extreme performance with enterprise-grade features out of the box.
        </div>
        
        <div className="stamp-row">
          <span className="stamp">Sub-100ms HMR</span>
          <span className="stamp">Module Federation Native</span>
          <span className="stamp">Security Pipeline Built-in</span>
        </div>
        
        <div className="project-tags">
          <span className="tag">Rust</span>
          <span className="tag">SWC</span>
          <span className="tag">LightningCSS</span>
          <span className="tag">Node.js</span>
          <span className="tag">CLI</span>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--line)]">
          <h4 className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--teal)] mb-4">Supported Ecosystems (19+ Frameworks)</h4>
          <p className="text-[14px] text-[var(--ink-dim)] mb-4">Compiles and serves almost all popular frontend libraries with optimized out-of-the-box configurations.</p>
          <div className="flex flex-wrap gap-2">
            {["React", "Angular", "Vue", "Svelte", "SolidJS", "Next.js", "Nuxt", "Astro", "Remix"].map(fw => (
              <span key={fw} className="text-[11px] px-[10px] py-[4px] border border-[var(--line-strong)] rounded text-[var(--ink-dim)]">{fw}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
