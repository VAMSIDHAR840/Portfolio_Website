import { Award } from "lucide-react";

const MoreFromMe = () => {
  const items = [
    {
      icon: Award,
      title: "Certifications",
      description: "Professional training and certifications completed",
      details: [
        "MERN Stack Development (Training) – JSpiders",
        "Angular & Web Development – Udemy",
      ],
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
            Certifications and professional training that strengthened my frontend development skills.
          </p>

          <div className="flex justify-center">
            {items.map((item) => (
              <div
                key={item.title}
                className="group relative card-glass rounded-xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-2 text-sm font-medium">
                    {item.details.map((cert) => (
                      <li
                        key={cert}
                        className="px-3 py-1 rounded-md bg-primary/10 text-primary"
                      >
                        {cert}
                      </li>
                    ))}
                  </ul>
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