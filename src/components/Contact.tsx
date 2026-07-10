const Contact = () => {
  return (
    <section id="contact" className="max-w-[1080px] mx-auto py-[120px] px-[24px]">
      <div className="contact-wrap reveal">
        <div className="eyebrow">07 — Contact</div>
        <h2>Let's build something that holds up.</h2>
        <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
          Interested in collaboration? Open to frontend roles and collaborations. Reach out directly.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href="mailto:pavinash469@gmail.com">Email me &nbsp;→</a>
          <a className="btn btn-ghost" href="tel:+919301201064">+91 9301201064</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/p-avinash-kumar-0437481b3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href="https://github.com/Avinash-1994" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
