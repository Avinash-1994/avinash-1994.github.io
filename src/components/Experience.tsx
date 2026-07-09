import { Building, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "THE SWIPEWIRE TECHNOLOGIES",
    location: "CHENNAI",
    position: "SOFTWARE ENGINEER",
    period: "July 2023 - Present",
    highlights: [
      "Delivered multiple frontend projects annually, building maintainable JavaScript solutions",
      "Designed and developed high-performance websites, enterprise dashboards, and HRMS/fintech apps",
      "Built clean, scalable, and responsive front-end architectures with modern CSS/Tailwind",
      "Pioneered AI-assisted development workflows utilizing tools like GitHub Copilot, custom LLM pipelines, and advanced prompt engineering to boost coding efficiency by 40% and optimize performance metrics"
    ]
  },
  {
    company: "OPTIMHIRE SOFTWARE SOLUTIONS",
    location: "HYDERABAD",
    position: "FRONTEND DEVELOPER",
    period: "May 2022 - May 2023",
    highlights: [
      "Developed responsive desktop and mobile applications using Angular",
      "Contributed to front-end development for consulting platforms",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ]
  },
  {
    company: "CODEFUSION INFOTECH",
    location: "BILASPUR",
    position: "UI DEVELOPER",
    period: "March 2020 - April 2022",
    highlights: [
      "Developed responsive web applications leveraging HTML, CSS, and jQuery",
      "Delivered scalable, high-performance applications",
      "Improved client satisfaction through robust solutions"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          6 years of building exceptional web experiences
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {exp.company}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {exp.position} • {exp.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
