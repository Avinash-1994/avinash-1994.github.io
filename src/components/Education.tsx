const education = [
  {
    degree: "Master of Science (I.T.)",
    institution: "Kalinga University, Raipur",
    year: "2020 - 2021"
  },
  {
    degree: "Postgraduate Degree Diploma",
    institution: "Dr. C. V. Raman University, Kota Bilaspur",
    year: "2016 - 2017"
  },
  {
    degree: "Bachelor of Arts",
    institution: "Bilaspur Vishwavidyalaya, Raipur",
    year: "2013 - 2016"
  }
];

const Education = () => {
  return (
    <section id="education" className="max-w-[1080px] mx-auto pb-[120px] px-[24px]">
      <div className="eyebrow reveal">06 — Education</div>
      <h2 className="reveal">Academic background</h2>
      <div className="timeline reveal">
        {education.map((edu) => (
          <div key={edu.degree} className="tl-item">
            <div className="tl-role">{edu.degree}</div>
            <div className="tl-org">{edu.institution} · {edu.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
