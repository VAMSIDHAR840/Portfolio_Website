import { Code2, Database, Server, Wrench } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: [,
      "Angular",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "RxJS",
      "NgRx",
      "Angular Signals",
      "HTML5",
      "CSS3 / SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
      "Angular Material",
      "Responsive Design",

    ],
    color: "primary",
  },

  {
    category: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "API Integration",
      "Authentication (JWT)"
    ],
    color: "secondary",
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "SQL"],
    color: "accent",
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "VS Code",
      "NPM",
      "Chrome DevTools",
      "Jira"

    ],
    color: "primary",
  }

];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={skillGroup.category}
                  className="card-glass rounded-xl p-6 hover:scale-105 transition-all duration-300 group hover:glow-effect"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-${skillGroup.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-6 w-6 text-${skillGroup.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-${skillGroup.color}`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              "Angular",
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "HTML5",
              "CSS3",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
