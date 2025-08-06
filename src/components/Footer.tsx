import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-max">
        <div className="text-center">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full smooth-transition hover:scale-110 hover:shadow-lg mb-8"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          {/* Logo/Name */}
          <h3 className="text-2xl font-bold mb-4">Sidra Bakhtawar</h3>
          
          {/* Tagline */}
          <p className="text-lg text-background/80 mb-6 max-w-md mx-auto">
            Creating beautiful web experiences that make a difference
          </p>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const section = document.getElementById(item.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-background/80 hover:text-background smooth-transition hover:scale-105"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-background/20 mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-background/60">
            <p>© {currentYear} Sidra Bakhtawar. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;