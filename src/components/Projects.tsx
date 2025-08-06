import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import project images
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import blogImg from '@/assets/project-blog.jpg';
import restaurantImg from '@/assets/project-restaurant.jpg';
import dashboardImg from '@/assets/project-dashboard.jpg';
import realestateImg from '@/assets/project-realestate.jpg';
import learningImg from '@/assets/project-learning.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce website with shopping cart, product catalog, and secure checkout. Built with React.js and modern CSS.',
      image: ecommerceImg,
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Blog Website',
      description: 'A clean and modern blog platform with article management, search functionality, and responsive design for optimal reading experience.',
      image: blogImg,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      description: 'An elegant restaurant website featuring menu display, online reservations, and gallery showcase with smooth animations.',
      image: restaurantImg,
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'A comprehensive admin dashboard with data visualization, charts, and real-time analytics for business insights.',
      image: dashboardImg,
      technologies: ['React.js', 'Chart.js', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'A modern real estate website with property listings, advanced search filters, and interactive map integration.',
      image: realestateImg,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'An educational platform with course management, video streaming, and student progress tracking capabilities.',
      image: learningImg,
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development 
            and design. Each project demonstrates different aspects of modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-shadow smooth-transition hover:scale-105 hover:shadow-lg border-0 bg-background group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover smooth-transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 text-foreground hover:bg-background"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 text-foreground hover:bg-background"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <button
            onClick={() => window.open('#', '_blank')}
            className="portfolio-button-outline"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;