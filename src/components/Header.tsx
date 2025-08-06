import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
      isScrolled ? 'bg-background/95 backdrop-blur-md card-shadow' : 'bg-transparent'
    }`}>
      <div className="container-max">
        <nav className="flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Sidra Bakhtawar
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-foreground hover:text-primary smooth-transition capitalize font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary smooth-transition group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary smooth-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border smooth-transition ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <ul className="py-4 px-4 space-y-2">
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-lg smooth-transition capitalize font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;