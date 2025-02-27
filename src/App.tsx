import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, Download, ChevronRight, User, Briefcase, Code, Award, GraduationCap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      name: "Task Management Application",
      tech: ["React", "Redux", "Tailwind"],
      description:
        "A task management app with drag-and-drop functionality, local storage persistence, and a responsive UI.",
    },
    {
      name: "HTML to Figma Plugin",
      tech: ["JavaScript", "Figma API"],
      description:
        "A plugin that converts pasted HTML code into Figma designs for easy prototyping.",
    },
    {
      name: "Slot Booking Application",
      tech: ["React", "Tailwind", "LocalStorage"],
      description:
        "A booking system allowing users to select and manage available slots with time zone support.",
    },
    {
      name: "Micro-Frontend POC",
      tech: ["React", "Module Federation", "Webpack"],
      description:
        "A proof-of-concept demonstrating a scalable micro-frontend architecture.",
    },
    {
      name: "Dashboard Optimization at Zomato",
      tech: ["React", "TypeScript", "AWS"],
      description:
        "Enhanced dashboard performance, improved UI/UX, and reduced load time for better agent efficiency.",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">Your Portfolio</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 shadow-md' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-2">
            {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className={`block py-3 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-20"
      >
        <div className={`container mx-auto px-4 py-16 flex flex-col md:flex-row items-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 leading-tight">
              Hi, I'm <span className="text-blue-600">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Engineer
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              I build exceptional digital experiences with a focus on performance and user experience.
              With experience in full-stack development, I help companies deliver high-quality software solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
              >
                Contact Me <ChevronRight size={18} className="ml-1" />
              </a>
              <a 
                href="/resume.pdf" 
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center"
              >
                Download CV <Download size={18} className="ml-1" />
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <GitHub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
            <p className="text-gray-600 text-center max-w-3xl">
              Get to know more about me, my background, and what I do.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <User size={24} className="mr-2 text-blue-600" />
                Who am I?
              </h3>
              <p className="text-gray-600 mb-4">
                I'm a Software Engineer with a passion for creating efficient, scalable, and user-friendly applications. 
                I've worked on a variety of projects ranging from small business websites to large enterprise applications.
              </p>
              <p className="text-gray-600 mb-4">
                My approach to development is centered around solving real-world problems with clean, maintainable code. 
                I believe in continuous learning and staying updated with the latest technologies and best practices.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, reading tech blogs, or experimenting with new programming languages and frameworks.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-gray-600">Your Name</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-gray-600">Your Location</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-gray-600">Full-time</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Code size={24} className="mr-2 text-blue-600" />
                  My Skills
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript/TypeScript</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React/Next.js</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Node.js/Express</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">SQL/NoSQL Databases</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">DevOps/CI/CD</span>
                      <span>70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
            <p className="text-gray-600 text-center max-w-3xl">
              My professional journey and the companies I've worked with.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Experience Items */}
              <div className="space-y-12">
                {/* Experience 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex justify-start w-full md:w-1/2 md:pr-8 md:text-right">
                    <div className="md:ml-auto">
                      <h3 className="text-xl font-bold text-blue-600">Software Engineer</h3>
                      <p className="text-lg font-medium">Company Name</p>
                      <p className="text-gray-600 mb-2">Jan 2022 - Present</p>
                      <p className="text-gray-600">
                        Led the development of web applications, improving system performance and user experience.
                        Collaborated with cross-functional teams to deliver high-quality software solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-blue-200 bg-white z-10">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>
                  
                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md md:ml-8">
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Developed and maintained web applications using React and Node.js</li>
                        <li>Implemented responsive front-end interfaces with modern JavaScript frameworks</li>
                        <li>Optimized database queries and API endpoints for better performance</li>
                        <li>Collaborated with product managers to define and prioritize features</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Experience 2 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex justify-start w-full md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                    <div className="md:ml-auto">
                      <h3 className="text-xl font-bold text-blue-600">Junior Developer</h3>
                      <p className="text-lg font-medium">Previous Company</p>
                      <p className="text-gray-600 mb-2">Jun 2020 - Dec 2021</p>
                      <p className="text-gray-600">
                        Developed and maintained web applications for clients across various industries.
                        Worked closely with senior developers to implement new features and fix bugs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-blue-200 bg-white z-10">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>
                  
                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0 order-2 md:order-2">
                    <div className="bg-white p-4 rounded-lg shadow-md md:ml-8">
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Built RESTful APIs using Express.js and MongoDB</li>
                        <li>Implemented authentication and authorization systems</li>
                        <li>Created responsive UI components with React and CSS frameworks</li>
                        <li>Participated in code reviews and agile development processes</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Experience 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex justify-start w-full md:w-1/2 md:pr-8 md:text-right">
                    <div className="md:ml-auto">
                      <h3 className="text-xl font-bold text-blue-600">Intern</h3>
                      <p className="text-lg font-medium">First Company</p>
                      <p className="text-gray-600 mb-2">Jan 2020 - May 2020</p>
                      <p className="text-gray-600">
                        Started as an intern and gained valuable experience in web development.
                        Worked on front-end development for various client websites.
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-blue-200 bg-white z-10">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>
                  
                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md md:ml-8">
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Developed responsive websites using HTML, CSS, and JavaScript</li>
                        <li>Implemented UI designs from Figma and Adobe XD</li>
                        <li>Assisted in troubleshooting and debugging issues</li>
                        <li>Learned and applied best practices for web development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/*project*/}

       <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
          <p className="text-gray-600 text-center max-w-3xl">
            Some of the projects I have worked on, demonstrating my skills in frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() =>
                setSelectedProject(selectedProject === index ? null : index)
              }
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {project.name}
              </h3>
              <div className="space-y-3">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
              {selectedProject === index && (
                <div className="mt-4 p-3 bg-blue-100 rounded-md">
                  <p className="text-sm text-gray-700">
                    <strong>Description:</strong> {project.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
            <p className="text-gray-600 text-center max-w-3xl">
              The technologies and tools I work with on a daily basis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Frontend */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Frontend Development</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>React.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Next.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Redux</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>HTML5 & CSS3</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
            
            {/* Backend */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Backend Development</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Express.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>RESTful APIs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>GraphQL</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
            
            {/* Other Skills */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Other Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Git & GitHub</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Docker</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>CI/CD Pipelines</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>AWS Services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Testing (Jest, React Testing Library)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Agile Methodologies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>UI/UX Design Principles</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <Award size={24} className="mr-2 text-blue-600" />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Web Development Certification</h4>
                <p className="text-gray-600 mb-2">Certification Provider</p>
                <p className="text-gray-600">Issued: January 2022</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">JavaScript Advanced Concepts</h4>
                <p className="text-gray-600 mb-2">Certification Provider</p>
                <p className="text-gray-600">Issued: March 2021</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">React Developer Certification</h4>
                <p className="text-gray-600 mb-2">Certification Provider</p>
                <p className="text-gray-600">Issued: September 2020</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Database Management</h4>
                <p className="text-gray-600 mb-2">Certification Provider</p>
                <p className="text-gray-600">Issued: May 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Education</h2>
            <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
            <p className="text-gray-600 text-center max-w-3xl">
              My academic background and continuous learning journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <GraduationCap size={24} className="mr-2 text-blue-600" />
                      <h3 className="text-xl font-bold">Bachelor's Degree in Computer Science</h3>
                    </div>
                    <p className="text-lg text-gray-800 mb-1">University Name</p>
                    <p className="text-gray-600">2016 - 2020</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">GPA: 3.8/4.0</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    Studied Computer Science with a focus on software development and web technologies.
                    Participated in various coding competitions and hackathons.
                  </p>
                  <div className="mt-3">
                    <p className="font-medium">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Data Structures & Algorithms</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Web Development</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Database Systems</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Software Engineering</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Computer Networks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Continuous Learning */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Continuous Learning</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">Advanced React Patterns</h4>
                  <p className="text-gray-600 mb-2">Online Learning Platform</p>
                  <p className="text-gray-600">Completed: December 2022</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">Microservices Architecture</h4>
                  <p className="text-gray-600 mb-2">Online Learning Platform</p>
                  <p className="text-gray-600">Completed: August 2022</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">Cloud Computing Fundamentals</h4>
                  <p className="text-gray-600 mb-2">Online Learning Platform</p>
                  <p className="text-gray-600">Completed: May 2022</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">TypeScript Deep Dive</h4>
                  <p className="text-gray-600 mb-2">Online Learning Platform</p>
                  <p className="text-gray-600">Completed: February 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
            <p className="text-gray-600 text-center max-w-3xl">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Email</p>
                      <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Linkedin size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        linkedin.com/in/yourprofile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <GitHub size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">GitHub</p>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Availability</h4>
                  <p className="text-gray-600 mb-2">
                    I'm currently available for freelance work and full-time opportunities.
                  </p>
                  <p className="text-gray-600">
                    Response time: <span className="font-medium">Within 24 hours</span>
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Let's connect</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                      <GitHub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:your.email@example.com" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Your Name</h3>
              <p className="text-gray-400">Software Engineer</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GitHub size={20} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;