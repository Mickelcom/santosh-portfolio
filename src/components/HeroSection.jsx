import useTypewriter from "../hooks/useTypewriter";
import { useState } from "react";

export default function HeroSection() {
  const titles = ["Full Stack Developer", "Java Developer"];
  const typeWriterText = useTypewriter(titles);

  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const projects = [
    {
      title: "Book Management System",
      tech: "Java, Spring Boot, MySQL, Spring security",
      desc: "CRUD-based backend system with REST APIs and database integration."
    },
    {
      title: "Chat Application",
      tech: "Spring Boot, WebSocket, JWT",
      desc: "Real-time chat app with authentication and role-based access."
    },
    {
      title: "Gym Management Website",
      tech: "React, Tailwind CSS",
      desc: "Responsive frontend with modern UI and reusable components."
    },
    {
      title: "Finance Management Website",
      tech: "Node.js, Express, MongoDB, React",
      desc: "Full-stack finance platform with secure authentication, transaction handling, and REST APIs for managing financial data."
    },
    {
      title: "Student Management System",
      tech: "React.js, Java, Spring Boot, MySQL",
      desc: "Backend-driven system to manage students, courses, and records with role-based access and CRUD APIs."
    },
    {
      title: "Virtual WhatsApp Number Service",
      tech: "React.js, Node.js, Express, REST APIs",
      desc: "Service for generating and managing virtual WhatsApp numbers with API integration and scalable backend architecture."
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <header className="relative bg-[#0a003a] min-h-[70vh] flex items-center justify-center px-4">
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-xl bg-[#0a003a]/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

            {/* LOGO */}
            <span className="text-lg md:text-xl font-semibold tracking-wide text-purple-400">
              Santosh Kumar Maurya
            </span>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-purple-400 text-2xl focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
            </button>

            {/* NAV LINKS */}
            <ul
              className={`
                    fixed md:static top-[72px] right-6 md:top-auto md:right-auto
                    bg-[#0a003a]/90 md:bg-transparent
                    backdrop-blur-xl
                    border border-white/10 md:border-none
                    rounded-xl md:rounded-none
                    px-6 py-6 md:p-0
                    flex flex-col md:flex-row
                    gap-5 md:gap-8
                    transition-all duration-300
                    ${open
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}
                  `}
            >
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-sm tracking-wide text-purple-300 hover:text-white transition
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                       after:bg-purple-400 after:transition-all after:duration-300
                       hover:after:w-full"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>


        {/* HERO CONTENT */}
        <div className="relative z-10 text-center space-y-4 mt-16">
          <h1 className="text-3xl md:text-5xl font-mono text-white">
            Hey, I am <span className="text-purple-400">{typeWriterText}</span>
            <span className="text-blue-400 animate-blink">|</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-mono text-white">
            Building your dream <span className="text-purple-400">pixel</span> by{" "}
            <span className="text-blue-400">pixel</span>!
          </h2>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 px-5 py-2 rounded bg-purple-600 text-white hover:bg-purple-500 transition"
          >
            {showDetails ? "Hide Details" : "Read More"}
          </button>
        </div>
      </header>

      {/* ABOUT + PROJECTS */}
      {showDetails && (
        <section
          id="about"
          className="bg-[#0a003a] text-white px-6 py-4 space-y-5"
        >
          {/* ABOUT */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-semibold text-purple-400">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a Java Developer with experience in building scalable backend
              systems using Spring Boot, Spring Security, REST APIs, and MySQL.
              I enjoy solving real-world problems and writing clean,
              maintainable code.
            </p>
          </div>

          {/* PROJECTS */}
          <div id="projects" className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold text-center text-purple-400 mb-8">
              Projects
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#12005a] p-6 rounded-lg shadow-md hover:scale-105 transition"
                >
                  <h4 className="text-xl font-semibold text-purple-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-blue-400 mt-1">
                    {project.tech}
                  </p>
                  <p className="text-gray-300 mt-3 text-sm">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
