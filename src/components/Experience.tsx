const experiences = [
  {
    company: "The Swipewire Technologies",
    location: "Chennai",
    position: "Sr. Software Developer (UI)",
    period: "July 2023 - Present",
    highlights: "Delivered multiple frontend projects annually, building maintainable JavaScript solutions. Designed high-performance websites, enterprise dashboards, and HRMS/fintech apps. Pioneered AI-assisted development workflows utilizing tools like GitHub Copilot, custom LLM pipelines, and advanced prompt engineering to boost coding efficiency by 40%."
  },
  {
    company: "Optimhire Software Solutions",
    location: "Hyderabad",
    position: "Frontend Developer",
    period: "May 2022 - May 2023",
    highlights: "Developed responsive desktop and mobile applications using Angular. Contributed to front-end development for consulting platforms and collaborated with cross-functional teams to deliver high-quality solutions."
  },
  {
    company: "Codefusion Infotech",
    location: "Bilaspur",
    position: "UI Developer",
    period: "March 2020 - April 2022",
    highlights: "Developed responsive web applications leveraging HTML, CSS, and jQuery. Delivered scalable, high-performance applications and improved client satisfaction through robust solutions."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-[1080px] mx-auto py-[120px] px-[24px]">
      <div className="eyebrow reveal">05 — Experience</div>
      <h2 className="reveal">Where the work happens</h2>
      <div className="timeline reveal">
        {experiences.map((exp) => (
          <div key={exp.company} className="tl-item">
            <div className="tl-role">{exp.position}</div>
            <div className="tl-org">{exp.company} — {exp.location} · {exp.period}</div>
            <div className="tl-desc">
              {exp.highlights}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
