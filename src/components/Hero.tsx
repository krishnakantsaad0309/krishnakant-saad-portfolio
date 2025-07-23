import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-gradient pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-elevated border-4 border-primary/20 animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-primary-glow/5"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Krishnakant Saad</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up [animation-delay:0.2s]">
            Frontend Developer
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:0.4s]">
            Forward-thinking Software Engineer with a background working productively in dynamic environments. Fluent in React, Javascript, and Ruby on Rails programming languages used to develop software within the IT industry. Proud team player focused on achieving project objectives with speed and accuracy.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up [animation-delay:0.6s]">
            {/* <Button
              size="lg"
              className="hero-gradient shadow-soft hover:shadow-hover transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button> */}

            <a
              href="/Krishnakant_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-white bg-primary rounded-lg shadow-soft hover:shadow-hover transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-white bg-gray-300 rounded-lg shadow-soft hover:shadow-hover transition-smooth"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up [animation-delay:0.8s]">
            <a
              href="https://github.com"
              target="_blank"
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-hover transition-smooth hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-hover transition-smooth hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:krishnakant.saad03@gmail.com"
              target="_blank"
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-hover transition-smooth hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-subtle [animation-delay:1s]">
            <a
              href="#about"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-smooth"
            >
              <ArrowDown className="h-10 w-10 rounded-full shadow-elevated border-2 border-primary/20 animate-float" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
