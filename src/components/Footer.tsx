import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> by Vamsidhar Reddy G
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vamsidhar Reddy G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
