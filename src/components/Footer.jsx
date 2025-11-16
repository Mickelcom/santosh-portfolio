import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a003a] text-white py-10 px-6 border-t border-[#23234c]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT SECTION */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-mono font-semibold text-purple-400">
            Santosh Kumar Maurya
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Full Stack Developer • React • Node.js • Java
          </p>
        </div>

        {/* CENTER NAV LINKS */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-mono">
          <li>
            <a href="#home" className="text-gray-300 hover:text-purple-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-300 hover:text-purple-400 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-300 hover:text-[#0A66C2] transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="mailto:your-email@example.com"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="text-center mt-8 text-xs font-mono text-gray-500">
        © {new Date().getFullYear()} Santosh Kumar Maurya — All Rights Reserved.
      </div>
    </footer>
  );
}
