import { Globe, Smartphone, Code, Palette, Search, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'Cross-browser Compatibility', 'Performance Optimization']
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile-First Design',
      description: 'Mobile-optimized websites that provide excellent user experience across all devices.',
      features: ['Touch-friendly Interfaces', 'Fast Loading', 'App-like Experience']
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Frontend Development',
      description: 'Interactive user interfaces using React.js, JavaScript, and modern CSS frameworks.',
      features: ['React.js Applications', 'Interactive Components', 'State Management']
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
      features: ['User-Centered Design', 'Wireframing', 'Prototyping']
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO Optimization',
      description: 'Search engine optimization to improve your website\'s visibility and ranking.',
      features: ['On-page SEO', 'Performance Metrics', 'Meta Optimization']
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Website Maintenance',
      description: 'Ongoing support and maintenance to keep your website running smoothly.',
      features: ['Regular Updates', 'Security Monitoring', 'Bug Fixes']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life 
            and grow your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-shadow smooth-transition hover:scale-105 hover:shadow-lg border-0 bg-background group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 smooth-transition">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your project?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="portfolio-button"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;