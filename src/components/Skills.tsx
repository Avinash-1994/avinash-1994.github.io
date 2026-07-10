const Skills = () => {
  return (
    <section id="skills" className="max-w-[1080px] mx-auto py-[120px] px-[24px]">
      <div className="eyebrow reveal">02 — Stack</div>
      <h2 className="reveal">What I actually build with</h2>
      <p className="section-sub reveal">No padding — this is the stack I use in production, not a list of everything I've ever tried once.</p>
      
      <div className="stack-grid">
        <div className="stack-cat reveal">
          <h3>Frontend</h3>
          <div className="tag-row">
            <span className="tag">Angular</span>
            <span className="tag">Next.js 14</span>
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">HTML5/CSS3</span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">Bootstrap</span>
            <span className="tag">GSAP</span>
          </div>
        </div>
        <div className="stack-cat reveal reveal-delay-1">
          <h3>State &amp; Data</h3>
          <div className="tag-row">
            <span className="tag">NgRx</span>
            <span className="tag">RxJS</span>
            <span className="tag">Redux</span>
            <span className="tag">REST APIs</span>
            <span className="tag">Ajax</span>
          </div>
        </div>
        <div className="stack-cat reveal reveal-delay-2">
          <h3>Tools &amp; Workflow</h3>
          <div className="tag-row">
            <span className="tag">Git / GitHub</span>
            <span className="tag">Bitbucket</span>
            <span className="tag">Jira</span>
            <span className="tag">Agile Methodologies</span>
          </div>
        </div>
        <div className="stack-cat reveal reveal-delay-3">
          <h3>Design</h3>
          <div className="tag-row">
            <span className="tag">Figma</span>
            <span className="tag">Adobe XD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
