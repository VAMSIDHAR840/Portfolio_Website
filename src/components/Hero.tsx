import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wide uppercase">
              Software Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient glow-text">
                Vamsidhar Reddy G
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Crafting modern web experiences with Angular, React, and Node.js
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/vamsidhar840"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all hover:scale-110 hover:glow-effect p-2 rounded-full"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/vamsidhar840"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all hover:scale-110 hover:glow-effect p-2 rounded-full"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:vamsidhar840@gmail.com"
              className="text-foreground/60 hover:text-primary transition-all hover:scale-110 hover:glow-effect p-2 rounded-full"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
