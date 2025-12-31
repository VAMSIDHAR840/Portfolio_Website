import { MapPin, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate Software Engineer with hands-on experience in building modern,
                scalable web applications using{" "}
                <span className="text-primary font-semibold">Angular</span>,{" "}
                <span className="text-primary font-semibold">React</span>,{" "}
                <span className="text-primary font-semibold">TypeScript</span>,{" "}
                <span className="text-primary font-semibold">RxJS</span>,{" "}
                <span className="text-primary font-semibold">NgRx</span>, and{" "}
                <span className="text-primary font-semibold">Angular Signals</span>.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                I enjoy crafting efficient, high-performance, and user-focused frontend solutions
                by applying clean architecture principles, reusable component design, and effective
                state management. My goal is to continuously learn emerging technologies and
                contribute to impactful digital experiences.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10">
                    <Briefcase className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">2+ Years in Web Development</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Passion</p>
                    <p className="font-medium">
                      Frontend Engineering • Angular Architecture • Performance Optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-6 blur-2xl opacity-20 animate-pulse" />

                <div className="relative card-glass rounded-2xl p-10 w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1 animate-float">
                      <img
                        src="/Vamsidhar.png"
                        alt="Vamsidhar Reddy G"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    <p className="text-xl font-semibold">Vamsidhar Reddy G</p>
                    <p className="text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
