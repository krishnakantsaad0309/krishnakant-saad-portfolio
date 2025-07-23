import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  // const experiences = [
  //   {
  //     company: "Zehntech Technology PVT LTD",
  //     position: "Software Engineer",
  //     location: "Indore, India",
  //     period: "June 2022 – Present",
  //     description:
  //       "Worked in a dynamic software development team to build scalable and reliable web applications. Contributed to plugin and theme development for RedmineFlux, handled client communication, and participated in Agile ceremonies.",
  //     technologies: ["ReactJS", "Ruby on Rails", "Bubble.io", "JavaScript", "Git", "CI/CD"],
  //     achievements: [
  //       "Developed multiple Redmine plugins enhancing task management and notification systems",
  //       "Integrated Figma designs and improved UI/UX using Bubble.io responsive engine",
  //       "Conducted thorough code reviews and improved CI/CD pipelines",
  //       "Collaborated in a 10–15 member team delivering multiple high-quality client projects",
  //       "Enhanced existing applications with clean, maintainable, and tested code"
  //     ]
  //   },
  //   {
  //     company: "Zehntech Technology PVT LTD",
  //     position: "Intern Software Engineer",
  //     location: "Indore, India",
  //     period: "Nov 2021 – June 2022",
  //     description:
  //       "Assisted in integrating new features into existing projects, adhering to Agile workflows and ensuring cross-platform consistency.",
  //     technologies: ["HTML", "CSS", "JavaScript", "Ruby on Rails", "Bubble.io"],
  //     achievements: [
  //       "Integrated features across multiple client projects",
  //       "Collaborated with cross-functional teams in agile sprints",
  //       "Learned and applied core frontend and backend practices under senior mentorship"
  //     ]
  //   },
  //   {
  //     company: "ReactJS Project – Compliancegate",
  //     position: "Frontend Developer",
  //     location: "Remote",
  //     period: "2023",
  //     description:
  //       "Rebuilt and optimized the client site using Bubble.io with WordPress integration and AI-powered compliance tools.",
  //     technologies: ["Bubble.io", "WordPress", "JavaScript", "Figma"],
  //     achievements: [
  //       "Built AI Q&A tools for compliance queries, certifications, and product generation",
  //       "Ensured smooth integration of WordPress user data",
  //       "Enhanced user experience by replicating existing pages responsively"
  //     ]
  //   },
  //   {
  //     company: "ReactJS Project – Wift (Automotive Startup)",
  //     position: "Frontend Developer",
  //     location: "Remote",
  //     period: "2022",
  //     description:
  //       "Improved user experience for a Chile-based automotive leasing startup by revamping key pages using Bubble.io.",
  //     technologies: ["Bubble.io", "JavaScript", "Figma"],
  //     achievements: [
  //       "Recreated homepage and integrated new pages using responsive engine",
  //       "Improved site usability based on client feedback",
  //       "Continuously updated frontend as per evolving product roadmap"
  //     ]
  //   },
  //   {
  //     company: "Angular Mini Project – Portfolio SPA",
  //     position: "Frontend Developer (Personal)",
  //     location: "Remote",
  //     period: "2021",
  //     description:
  //       "Built a basic personal portfolio single-page application using Angular to demonstrate routing, data binding, and component architecture.",
  //     technologies: ["Angular", "TypeScript", "SCSS"],
  //     achievements: [
  //       "Used Angular CLI to scaffold project and configure routes",
  //       "Implemented reusable components and responsive layout",
  //       "Deployed portfolio as a proof-of-concept project"
  //     ]
  //   }
  // ];

  const experiences = [
    {
      company: "Zehntech Technology PVT LTD",
      position: "Software Engineer",
      location: "Indore, India",
      period: "June 2022 – Present",
      description:
        "Worked with the development team to deliver scalable web applications, plugins, and themes for RedmineFlux. Managed client requirements and contributed across the full development lifecycle.",
      technologies: ["ReactJS", "Ruby on Rails", "JavaScript", "Git", "CI/CD", "Bubble.io"],
      achievements: [
        "Developed Redmine plugins for task management and user notifications",
        "Improved UI/UX using Bubble.io's responsive engine",
        "Contributed to Redmine theme customization and plugin compatibility",
        "Collaborated in a 6+ member agile team with daily scrum participation"
      ]
    },
    {
      company: "Zehntech Technology PVT LTD",
      position: "Intern Software Engineer",
      location: "Indore, India",
      period: "Nov 2021 – June 2022",
      description:
        "Worked as an intern assisting on multiple projects, learning full-stack practices, and building features under guidance of senior developers.",
      technologies: ["HTML", "CSS", "JavaScript", "Bubble.io"],
      achievements: [
        "Integrated new features into active projects with cross-team coordination",
        "Practiced Agile methodology and collaborated in sprint cycles",
        "Built foundational frontend skills and backend integration knowledge"
      ]
    },
    {
      company: "Resume Portfolio",
      position: "React Developer",
      location: "Remote",
      period: "2023",
      description:
        "Designed and developed a personal portfolio using React and Tailwind CSS to showcase professional background and technical projects.",
      technologies: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons"],
      achievements: [
        "Created fully responsive and animated personal portfolio",
        "Integrated PDF resume download with preview functionality",
        "Used modern UI practices and scroll animations without external libraries"
      ]
    },
    {
      company: "Eikshana - Garbage Detection System",
      position: "Frontend Developer",
      location: "Remote",
      period: "2023",
      description:
        "Built a React-based UI for a real-time garbage detection platform integrated with Flask backend and location APIs.",
      technologies: ["React.js", "Axios", "Map API", "Flask", "JWT"],
      achievements: [
        "Built dashboard with ticket tracking, timeline, and status updates",
        "Integrated map view, image upload, and authentication flows",
        "Implemented secure APIs and modular UI structure"
      ]
    },
    {
      company: "Wift (Automotive Startup)",
      position: "Bubble.io Developer",
      location: "Remote",
      period: "2022",
      description:
        "Enhanced homepage and core site pages using Bubble.io’s responsive engine for a car leasing startup based in Chile.",
      technologies: ["Bubble.io", "JavaScript", "Figma"],
      achievements: [
        "Recreated landing page and multiple screens for responsiveness",
        "Integrated new Figma-based designs seamlessly",
        "Maintained visual consistency and client satisfaction"
      ]
    },
    {
      company: "Compliancegate",
      position: "Bubble.io Developer",
      location: "Remote",
      period: "2023",
      description:
        "Revamped the client’s compliance service platform using Bubble.io and integrated WordPress with an AI-powered Q&A tool.",
      technologies: ["Bubble.io", "WordPress", "JavaScript", "AI API"],
      achievements: [
        "Built an AI Q&A system to guide users through compliance processes",
        "Integrated WordPress authentication with Bubble",
        "Improved product list and certificate generation workflow"
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
            My professional journey and the impact I've made at organization
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
