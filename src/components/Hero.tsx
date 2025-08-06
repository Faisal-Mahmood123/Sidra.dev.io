import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Hi, I'm{' '}
              <span className="text-primary animate-float inline-block">
                Sidra Bakhtawar
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mb-8">
              Web Developer 
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in delay-300">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, responsive websites and web applications using modern technologies. 
              Passionate about creating seamless user experiences and bringing ideas to life through code.
            </p>
          </div>

          {/* Skills badges */}
          <div className="animate-slide-in-left delay-500 mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap 5', 'jQuery', 'Typesript'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-background/80 backdrop-blur-sm text-primary border border-primary/20 rounded-full text-sm font-medium smooth-transition hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="animate-slide-in-right delay-700 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection('projects')}
              className="portfolio-button group"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="portfolio-button-outline group"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in delay-1000">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary smooth-transition group"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium mb-2">Scroll to explore</span>
                <ArrowDown className="w-6 h-6 group-hover:animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;