import React, { useState, useEffect } from 'react';
//import profileImage from "Images\profile.jpeg";
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
      name: "Stock Price Prediction (ML Project)",
      tech: ["ML", "Python", "DL"],
      description:
        `Developed a robust Stock Price Prediction system using Machine Learning (ML), Artificial Intelligence (AI), and DeepNeural Network (DNN) models 
        Analyzed historical stock data and applied advanced algorithms to build a predictive model capable of forecasting stock market trends and providing insights for informed investment decisions`,
    },
    {
      name: "Slot Booking Application",
      tech: ["React", "Tailwind", "LocalStorage, Typescript, Jvascript"],
      description:
        "A booking system in wich user allowing users to create their own slots, edit their own slots, delete their own slots, book other user slots based on their avaibility, users can select and manage available slots with time zone support, users can filter slots based on many parameters and many other  features",
      liveLink: "https://slot-booking-application-u54j.vercel.app/",
    },

    {
      name: "Task Management Application",
      tech: ["React", "Redux", "Tailwind ,Javascript"],
      description:
        `Create, update, and delete tasks.
      Mark tasks as complete or incomplete.
      Filter tasks by status (All, Completed, Incomplete).
      Sort tasks by creation date or priority.
      Add drag-and-drop functionality for reordering tasks.
      Persist tasks in local storage or with a mock API.
      Implement animations for task transitions.`,
      liveLink: "https://slot-booking.vercel.app",
    },

    {
      name: "Micro-Frontend POC",
      tech: ["React", "Module Federation", "Webpack"],
      description:
        ` created a Main Application (Host Application)
      Serves as the wrapper for all micro-applications.
      Responsible for managing the design system and shared components.
      Chat Application (Micro-Frontend)
      A standalone application responsible for chat-related functionality.
      Email Application (Micro-Frontend)
      A standalone application responsible for email-related functionality.`
    },

  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/movjgakk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">My Portfolio</a>

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
                className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
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
          className={`md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 shadow-md' : 'max-h-0 opacity-0 overflow-hidden'
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
                className={`block py-3 text-sm font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
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
              Hi, I'm <span className="text-blue-600">Rishu Rai</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Engineer
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              I build exceptional digital experiences with a focus on performance and user experience.
              With experience in Frontend development currently learning Backend, I help companies deliver high-quality software solutions.
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
                href="https://drive.google.com/file/d/1YW7zYl-C_IE04rjhnOFvq6E6Pu7mBdq8/view?usp=drivesdk"
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center"
              >
                Download CV <Download size={18} className="ml-1" />
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/rishu123456" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <GitHub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rishu-rai-171124184/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rishu25112001@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://res.cloudinary.com/dhqxvmvla/image/upload/v1740666655/dixpz9jkvtgla59mpg74.jpg"
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
                I'm Rishu Rai, a Software Engineer passionate about building scalable, high-performance, and user-friendly applications. With experience at <b>Zomato</b> , <b>LetsGrowMore</b> and <b>TCS</b>, I have worked on frontend development, UI/UX enhancements, and system optimizations that improved efficiency and user engagement.
              </p>
              <p className="text-gray-600 mb-4">
                My expertise spans <b>ReactJs</b>, <b>Redux</b>,<b>TypeScript</b>, <b>JavaScript</b>, <b>NextJs</b>, <b>Java</b>, <b>C++</b>, <b>DSA</b>, and <b>Tailwind CSS</b>, along with backend exposure in <b>Node.js</b> and <b>MySQL</b>. I thrive on solving real-world problems with clean, maintainable code and have contributed to projects that boosted dashboard efficiency, optimized workflows, and improved system performance.
              </p>
              <p className="text-gray-600">
                Beyond coding, I enjoy exploring new technologies, competitive programming, and engaging with the developer community. Whether it's solving LeetCode challenges (400+ problems solved), working on AI/ML-driven projects, or mentoring peers, I’m always pushing the boundaries of my knowledge.

                🔹 Technical Enthusiast | Frontend Specialist | Problem Solver
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-gray-600">Rishu Rai</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-600">rishu25112001@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-gray-600">Gurugram</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-gray-600">Full-time/Remote/Freelaning</p>
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
                      <span>50%</span>
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
                      <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 ml-2 ">Software Development Engineer Intern</h3>
                      <p className="text-lg font-medium mb-3 ml-2">Zomato</p>
                      <p className="text-gray-600 mb-4 ml-2">July 2024 - jan 2025</p>

                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-blue-200 bg-white z-10">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>

                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0 ml-3">
                    <div className="bg-white p-4 rounded-lg shadow-md md:ml-8">
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Built many features and functionalities for the OneSupport Dashboard that improved data access efficiency by 35%
                          and introduced tools for real-time page updates, reducing refresh time by 40%.</li>
                        <li>Designed and delivered usability improvements that boosted agent productivity by 25% and increased task completion
                          rates by 30% through optimized workflows.</li>
                        <li> Enhanced the Lifeline Dashboard by</li>
                        <li>Collaborated with product managers to define and prioritize features</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex justify-start w-full md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                    <div className="md:ml-auto">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 ml-2">Software Development Engineer</h3>
                      <p className="text-lg font-medium mb-4 ml-2">LetsGrowMore</p>
                      <p className="text-gray-600 mb-4 ml-2">May 2023 - Aug 2023</p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-blue-200 bg-white z-10">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>

                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0 order-2 md:order-2 ml-3">
                    <div className="bg-white p-4 rounded-lg shadow-md md:ml-8">
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Built a responsive Web Application using create-react-app, featuring a user card grid layout and a navigation bar with
                          a dynamic action button to fetch and display data via API integration. UI for the application.
                        </li>
                        <li>Designed a user-friendly interface with custom styling using CSS, SASS, and Styled-Components, optimizing performance and ensuring seamless state management with React.
                        </li>

                        <li>Participated in code reviews and agile development processes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex justify-start w-full md:w-1/2 md:pr-8 md:text-right">
                    <div className="md:ml-auto">
                      <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 ml-2">Software Development Engineer Intern</h3>
                      <p className="text-lg font-medium mb-4 ml-2">TCS-ion Digital</p>
                      <p className="text-gray-600 mb-4 ml-2">March 2023 - May 2023</p>

                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-blue-200 bg-white z-10">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>

                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0 ml-3">
                    <div className="bg-white p-4 rounded-lg shadow-md md:ml-8">
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Led a 45-day project to improve a product web page’s design and performance, aligning user feedback with business
                          goals</li>
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
                {/* {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      View Live
                    </a>
                  )} */}
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
                {/* <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>GraphQL</span>
                </div> */}
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>MongoDB</span>
                </div>
                {/* <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>PostgreSQL</span>
                </div> */}
                {/* <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Firebase</span>
                </div> */}
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
                  <span>Kafka</span>
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
                  <span>DSA</span>
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
                    <p className="text-lg text-gray-800 mb-1">Sinhgad College of Engineering, Pune</p>
                    <p className="text-gray-600">2020 - 2024</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">GPA: 8.37/10.0</span>
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
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Machine Learning</span>

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
                  <p className="text-gray-600">Completed: Aug 2024</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">Microservices Architecture</h4>
                  <p className="text-gray-600 mb-2">Online Learning Platform</p>
                  <p className="text-gray-600">Completed: Dec 2024</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">Cloud Computing Fundamentals</h4>
                  <p className="text-gray-600 mb-2">Online Learning Platform</p>
                  <p className="text-gray-600">Completed: Dec 2024</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">TypeScript Deep Dive</h4>
                  <p className="text-gray-600 mb-2">Online Learning Platform</p>
                  <p className="text-gray-600">Completed: February 2025</p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
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

            {status && <p className="text-center text-sm text-gray-700 mt-2">{status}</p>}
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
                        rishu25112001@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Linkedin size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/rishu-rai-171124184/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
                      >
                        View My Profile
                      </a>
                    </div>

                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <GitHub size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">GitHub</p>
                      <a
                        href="https://www.linkedin.com/in/rishu-rai-171124184/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
                      >
                        View My Profile
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
                    Response time: <span className="font-medium">Within 6 hours</span>
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Let's connect</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/rishu123456" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                      <GitHub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/rishu-rai-171124184/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:rishu25112001@gmail.com" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
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
              <h3 className="text-2xl font-bold">Rishu Rai</h3>
              <p className="text-gray-400">Software Engineer</p>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/rishu123456" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rishu-rai-171124184/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rishu25112001@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rishu Rai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;