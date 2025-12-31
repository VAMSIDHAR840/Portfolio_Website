import { Moon, Sun, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-xl font-bold text-gradient"
          >
            VRG
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="text-foreground/80 hover:text-primary transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1bDgzDZq1nNMg8R7pKRel_SvexsREDSZ5/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:glow-effect transition-all"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:glow-effect transition-all"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
