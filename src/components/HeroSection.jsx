import useTypewriter from "../hooks/useTypewriter";
import { useState } from "react";

export default function HeroSection() {
  const titles = ["Web Developer", "Java Developer"];
  const typeWriterText = useTypewriter(titles);

  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-[#0a003a] min-h-[70vh] flex items-center justify-center px-4">
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-sm z-20 bg-[#0a003a]/40 backdrop-blur-md">
        {/* LOGO */}
        <span className="text-xl text-purple-400 font-semibold tracking-wider">
          Santosh Kumar Maurya
        </span>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-purple-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* NAV LINKS */}
        <ul
          className={`
            fixed md:static top-16 right-4 md:right-0
            bg-[#0a003a] md:bg-transparent
            shadow-md md:shadow-none
            p-5 md:p-0 rounded-lg
            flex flex-col md:flex-row
            space-y-4 md:space-y-0 md:space-x-6
            transition-all duration-300
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"}
          `}
        >
          <li>
            <a href="#home" className="flex items-center text-purple-400 hover:text-purple-300 transition">
              <i className="fa-solid fa-house mr-2"></i> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center text-purple-400 hover:text-purple-300 transition">
              <i className="fa-solid fa-address-card mr-2"></i> About
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center text-purple-400 hover:text-purple-300 transition">
              <i className="fa-solid fa-diagram-project mr-2"></i> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center text-purple-400 hover:text-purple-300 transition">
              <i className="fa-solid fa-address-book mr-2"></i> Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center space-y-4 mt-16 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-mono font-semibold text-white">
          Hey, I am <span className="text-purple-400">{typeWriterText}</span>
          <span className="text-blue-400 animate-blink">|</span>
        </h1>

        <h2 className="text-xl md:text-3xl font-mono text-white">
          Building your dream <span className="text-purple-400">pixel</span> by{" "}
          <span className="text-blue-400">pixel</span>!
        </h2>

        <button className="mt-4 px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-500 transition">
          Read More
        </button>
      </div>
    </header>
  );
}
