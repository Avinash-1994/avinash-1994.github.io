const About = () => {
  return (
    <section id="about" className="max-w-[1080px] mx-auto py-[120px] px-[24px]">
      <div className="eyebrow reveal">01 — About</div>
      <div className="about-grid">
        <div className="about-text reveal">
          <h2>Frontend engineering, built like it has to hold up.</h2>
          <p>I'm a <strong>Senior Frontend Developer</strong> currently working as a <strong>Sr. Software Developer (UI)</strong> at The Swipewire Technologies in Chennai. Most of my day-to-day lives in Angular and Next.js, wiring up interfaces that stay predictable as state and API surface area grow.</p>
          <p>Outside of client work, I build my own products end to end — frontend, backend, and the decisions in between. I'd rather ship a feature that's actually verified than one that just looks finished. If a number isn't measured, I don't put it on a slide — or a resume.</p>
          <p>Right now that shows up in three places: a professional networking platform, a QR tracking SaaS, and a Rust/Node build tool I've been hardening through strict phase sign-offs.</p>
        </div>
        <div className="spec-sheet reveal reveal-delay-1">
          <div className="spec-row"><span className="k">Location</span><span className="v">Bilaspur, CG, India</span></div>
          <div className="spec-row"><span className="k">Working from</span><span className="v">Chennai (Swipewire)</span></div>
          <div className="spec-row"><span className="k">Role</span><span className="v">Sr. Software Developer (UI)</span></div>
          <div className="spec-row"><span className="k">Focus</span><span className="v">Angular · Next.js · TS</span></div>
          <div className="spec-row"><span className="k">Also building</span><span className="v">Vurk · TrackQR · Sparx</span></div>
          <div className="spec-row"><span className="k">Working style</span><span className="v">Measured, not marketed</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;
