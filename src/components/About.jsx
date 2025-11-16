import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0a003a] text-white py-16 px-4 flex justify-center"
    >
      <div className="w-full max-w-5xl bg-[#151130] bg-opacity-80 shadow-xl p-8 md:p-12 rounded-xl border border-[#23234c] flex flex-col md:flex-row items-center gap-10">
        
        {/* IMAGE */}
        <div className="w-40 h-48 md:w-52 md:h-64 rounded-lg overflow-hidden bg-gray-900 flex-shrink-0 shadow-lg">
          <img
            src="/mypic.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400 leading-snug">
            Why hire me for your{" "}
            <span className="text-blue-400">next project?</span>
          </h2>

          <p className="text-sm md:text-base font-mono leading-relaxed text-gray-200 mb-6">
            I am a full-stack web developer with hands-on experience in React,
            Node.js, Express, and Java (Spring Boot). I build scalable APIs,
            production-ready UI, and maintainable backend systems. I solve
            problems fast, debug efficiently, and deliver clean, reliable
            code—no unnecessary complexity.
          </p>

          {/* STATS + BUTTONS */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <div>
              <span className="block text-xl font-bold text-purple-400">
                1+ years
              </span>
              <span className="block text-sm font-mono text-gray-400">
                Experience
              </span>
            </div>

            <div>
              <span className="block text-xl font-bold text-blue-400">
                5+
              </span>
              <span className="block text-sm font-mono text-gray-400">
                Projects
              </span>
            </div>

            <a
              href="/Santosh Java resume.pdf"
              download
              className="px-4 py-2 font-mono rounded bg-gray-800 hover:bg-purple-500 text-white transition text-sm"
            ><i className="fa-solid fa-download text-gray-300 mr-2"></i>
              Download CV
            </a>

            <a
              href="https://github.com/Mickelcom"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-mono rounded bg-gray-800 hover:bg-blue-500 text-white transition text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
