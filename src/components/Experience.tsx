import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Slider from "react-slick";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Experience = () => {
 
  const experiences = [
    {
      company: "Zehntech Technology PVT LTD",
      position: "Software Engineer",
      location: "Indore, India",
      period: "June 2022 – Present",
      description:
        "Worked with the development team to deliver scalable web applications, plugins, and themes for RedmineFlux. Managed client requirements and contributed across the full development lifecycle.",
      technologies: [
        "ReactJS",
        "Ruby on Rails",
        "JavaScript",
        "Git",
        "CI/CD",
        "Bubble.io",
      ],
      achievements: [
        "Developed Redmine plugins for task management and user notifications",
        "Improved UI/UX using Bubble.io's responsive engine",
        "Contributed to Redmine theme customization and plugin compatibility",
        "Collaborated in a 6+ member agile team with daily scrum participation",
      ],
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
        "Built foundational frontend skills and backend integration knowledge",
      ],
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
        "Used modern UI practices and scroll animations without external libraries",
      ],
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
        "Implemented secure APIs and modular UI structure",
      ],
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
        "Maintained visual consistency and client satisfaction",
      ],
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
        "Improved product list and certificate generation workflow",
      ],
    },
  ];

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // lg
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768, // md
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480, // sm
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  //   appendDots: (
  //     dots:
  //       | string
  //       | number
  //       | boolean
  //       | ReactElement<any, string | JSXElementConstructor<any>>
  //       | Iterable<ReactNode>
  //       | ReactPortal
  //   ) => (
  //     <div>
  //       <ul className="flex justify-center mt-6 space-x-2">{dots}</ul>
  //     </div>
  //   ),
  //   customPaging: (_i: any) => (
  //     <div className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"></div>
  //   ),
  // };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    pauseOnHover: false,
    cssEase: "linear",
    adaptiveHeight: true,
  };

  return (
    <section id="experience" className="w-full min-h-screen py-24 bg-background">
      <div className="max-w-4xl mx-auto pt-2 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at each
            organization
          </p>
        </div>

        <Slider {...sliderSettings} className="w-full !overflow-visible">
          {experiences.map((exp, index) => (
            <div key={index} className="w-full flex justify-center px-4 py-6">
              <Card className="max-w-5xl w-full card-gradient shadow-soft hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="grid  gap-6">
                    {/* Company & Position */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-2">
                        <Building className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-lg font-semibold">{exp.company}</h3>
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-3">
                        {exp.position}
                      </h4>

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

                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
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
                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
