import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
 const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bubble.io", level: 85 },
      { name: "Basic Angular", level: 60 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Ruby on Rails", level: 70 },
      { name: "Node.js", level: 70 },
      { name: "Make.com Integration", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 70 },
      { name: "WordPress", level: 65 },
      { name: "CI/CD", level: 60 },
    ],
  }
];


  // const technologies = [
  //   "React", "HTML", "CSS", "Basic Ruby on Rails", "JavaScript", "Basic EC2 AWS Service",
  //   "PostgreSQL", "Basic MongoDB", "REST APIs", "Git", "Tailwind CSS",
  //   "Basic Next.js", "Bubble.io", "Make.com", "Basic Figma"
  // ];

  const technologies = [
  "React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "PostgreSQL" , "Git & Version Control", "Github" , "REST APIs", "Basic EC2 AWS Service", "Bubble.io",
  "Ruby on Rails", "Make.com", "Figma", "Basic WordPress", "Basic Angular"
];


  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient shadow-soft hover:shadow-hover transition-smooth">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium shadow-soft hover:shadow-hover transition-smooth hover:scale-105"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;