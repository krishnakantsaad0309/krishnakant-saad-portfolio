import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications serving 100K+ users. Architect cloud infrastructure and mentor junior developers.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      company: "Innovation Labs",
      position: "Full Stack Developer",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["Vue.js", "Python", "Docker", "MongoDB", "GraphQL"],
      achievements: [
        "Built 8+ successful client projects from concept to deployment",
        "Improved code quality by implementing automated testing",
        "Reduced bug reports by 50% through better QA processes"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      location: "Remote",
      period: "2019 - 2020",
      description: "Focused on creating responsive, user-friendly interfaces for a growing SaaS platform. Worked closely with UX designers and backend developers.",
      technologies: ["React", "JavaScript", "SCSS", "REST APIs"],
      achievements: [
        "Increased user engagement by 35% through UI improvements",
        "Delivered features 25% faster using agile methodologies",
        "Contributed to 200% user base growth during tenure"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at each organization
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient shadow-soft hover:shadow-hover transition-smooth">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Company & Position */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">{exp.position}</h4>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description & Achievements */}
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <h5 className="font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;