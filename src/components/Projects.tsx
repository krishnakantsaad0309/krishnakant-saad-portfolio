// import { ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import Slider from "react-slick";
// import { ReactNode, ReactPortal,} from "react";
const Projects = () => {

  const projects = [
    {
      title: "Resume Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase skills, resume, experience, and projects with animations and PDF integration.",
      image: project1,
      technologies: ["React.js", "Tailwind CSS", "Lucide Icons", "Vite"],
      features: [
        "Responsive UI with scroll-based animations",
        "PDF resume preview and download",
        "Dark mode-ready and clean component structure",
        "Tech badges, experience cards, and project showcase",
      ],
      githubUrl: "https://github.com/krishnakant-saad/resume-portfolio",
      liveUrl: "https://your-portfolio-domain.com",
    },
    {
      title: "Eikshana – Garbage Detection System",
      description:
        "A full-stack waste management system with real-time tracking of garbage reports, map integration, user roles, timeline, comments, and dashboard insights.",
      image: project2,
      technologies: ["React.js", "Flask", "Axios", "JWT", "Leaflet"],
      features: [
        "Ticket creation with map, image & metadata",
        "Live updates with timelines and comments",
        "User authentication and role-based access",
        "Analytics dashboard with filters & Recharts",
      ],
      githubUrl:
        "https://github.com/krishnakant-saad/eikshana-garbage-detection",
      liveUrl: "https://eikshana.vercel.app",
    },
    {
      title: "Wift – Automotive Leasing Startup (Bubble.io)",
      description:
        "Revamped landing and core pages for a Chilean automotive startup using Bubble.io's responsive engine and Figma-based designs.",
      image: project3,
      technologies: ["Bubble.io", "Figma", "JavaScript"],
      features: [
        "Fully responsive page structure",
        "Integrated Figma design to production",
        "Optimized UX for mobile and desktop",
        "Continuous client feedback integration",
      ],
      githubUrl: "#", // Not open-source
      liveUrl: "https://wift.bubbleapps.io",
    },
    {
      title: "Compliancegate – Compliance Q&A Tool (Bubble.io + WordPress)",
      description:
        "Built a smart platform for product compliance across US/EU with WordPress integration and an AI Q&A system for instant guidance.",
      image: project3, // reuse or add new thumbnail
      technologies: ["Bubble.io", "WordPress", "JavaScript", "AI API"],
      features: [
        "AI-based Q&A engine for certifications and labels",
        "Product list & certificate generator",
        "WordPress login integration into Bubble app",
        "User-friendly interface for complex compliance tasks",
      ],
      githubUrl: "#", // Private project
      liveUrl: "https://compliancegate.bubbleapps.io",
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
    speed: 2000, // animation transition duration
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // no arrows needed
    autoplay: true,
    autoplaySpeed: 3000, // delay before sliding to next
    rtl: false, // Right to left
    pauseOnHover: false,
    cssEase: "linear", // smooth continuous scroll
    adaptiveHeight: true,
  };

  return (
    <section id="projects" className="min-h-screen pt-28 pb-4 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring
            ideas to life
          </p>
        </div>

        <Slider
          {...sliderSettings}
          className="!overflow-visible [&_.slick-prev:before]:text-[28px] ..."
        >
          {projects.map((project, index) => (
            <div key={index} className="px-2 py-6 flex justify-center">
              <Card className="card-gradient shadow-soft hover:shadow-hover transition-smooth overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* 
                      <div className="flex gap-4 pt-4">
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      </div> */}
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
