import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Todo List App",
    description:
      "A feature-rich task management app with add, edit, delete, and filter functionality using React and LocalStorage for data persistence.",
    tech: ["React", "JavaScript", "LocalStorage", "CSS"],
    github: "https://github.com/vamsidhar840",
    demo: "#",
    color: "primary",
  },
  {
    title: "E-commerce Store",
    description:
      "Modern e-commerce platform with product search, filtering, and shopping cart features using React Context API for state management.",
    tech: ["React", "Context API", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/vamsidhar840",
    demo: "#",
    color: "secondary",
  },
  {
    title: "CRUD Application",
    description:
      "Full-stack MERN application with complete Create, Read, Update, Delete operations, RESTful API, and MongoDB integration.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/vamsidhar840",
    demo: "#",
    color: "accent",
  },
  {
    title: "Data Pipeline Dashboard",
    description:
      "Real-time data visualization dashboard built with Angular and RxJS, featuring dynamic charts and seamless API integration.",
    tech: ["Angular", "RxJS", "TypeScript", "REST API"],
    github: "https://github.com/vamsidhar840",
    demo: "#",
    color: "primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card-glass rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 hover:glow-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-48 bg-gradient-to-br from-${project.color}/20 to-${project.color}/5 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent animate-gradient" />
                  </div>
                  <div className="text-6xl font-bold text-gradient z-10">
                    {project.title.charAt(0)}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-xs rounded-full border border-${project.color}/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
