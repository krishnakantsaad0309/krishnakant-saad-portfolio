import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments and cross-functional projects"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to continuous learning and professional growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a difference. My journey began with a Computer Science 
              degree, but my real education came from building real-world applications and 
              solving complex problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in modern web technologies including React, Node.js, TypeScript, 
              and cloud platforms. I believe in writing clean, maintainable code and creating 
              user experiences that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, 
              mentoring junior developers, or exploring the latest trends in web development. 
              I'm always excited to take on new challenges and learn from every project.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-gradient shadow-soft hover:shadow-hover transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
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