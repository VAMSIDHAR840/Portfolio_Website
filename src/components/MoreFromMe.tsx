import { Award, BookOpen, Mic, Trophy } from "lucide-react";

const MoreFromMe = () => {
  const items = [
    {
      icon: Award,
      title: "Certifications",
      description: "Professional certifications and courses completed",
      status: "Coming Soon",
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Awards, hackathons, and notable accomplishments",
      status: "Coming Soon",
    },
    {
      icon: BookOpen,
      title: "Blog Posts",
      description: "Technical articles and tutorials",
      status: "Coming Soon",
    },
    {
      icon: Mic,
      title: "Talks & Workshops",
      description: "Conference talks and workshop sessions",
      status: "Coming Soon",
    },
  ];

  return (
    <section id="more" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            More from <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stay tuned for updates on my certifications, achievements, blog posts, and speaking engagements.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={item.title}
                className="group relative card-glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFromMe;