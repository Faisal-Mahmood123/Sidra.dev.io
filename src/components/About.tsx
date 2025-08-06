import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Modern Design',
      description: 'Creating beautiful, user-friendly interfaces with attention to detail.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive',
      description: 'Building websites that work perfectly on all devices and screen sizes.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Performance',
      description: 'Optimizing for speed and performance to deliver exceptional user experiences.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Passionate Web Developer with a Creative Mind
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With several years of experience in web development, I specialize in creating 
              dynamic, responsive websites and applications. My journey started with curiosity 
              about how websites work, and it has evolved into a passion for crafting digital 
              experiences that make a difference.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, beautiful design, and seamless functionality. 
              Whether it's a simple landing page or a complex web application, I approach each 
              project with dedication and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                <p className="text-muted-foreground">HTML, CSS, JavaScript, React.js, Bootstrap</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                <p className="text-muted-foreground">VS Code, Git, Figma, Adobe Creative Suite</p>
              </div>
            </div>
          </div>

          {/* Right content - Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-shadow smooth-transition hover:scale-105 hover:shadow-lg border-0 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;