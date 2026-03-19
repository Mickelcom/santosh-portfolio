import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0a003a] text-white py-20 px-4 flex justify-center"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

      <div className="relative w-full max-w-6xl backdrop-blur-xl bg-[#151130]/80 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">

        {/* IMAGE */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 blur opacity-30 group-hover:opacity-60 transition" />
          <div className="relative w-44 h-56 md:w-56 md:h-72 rounded-xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src="/mypic.png"
              alt="Santosh Kumar Maurya"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why hire me for your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              next project?
            </span>
          </h2>

          <p className="text-sm md:text-base font-mono leading-relaxed text-gray-300">
            I am a <span className="text-white">full-stack developer</span> with
            hands-on experience in <span className="text-purple-400">React</span>,{" "}
            <span className="text-blue-400">Node.js</span>,{" "}
            <span className="text-purple-400">Express</span>, and{" "}
            <span className="text-blue-400">Java (Spring Boot)</span>.  
            I build scalable APIs, production-ready UIs, and maintainable backend
            systems with a strong focus on performance and clean architecture.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 pt-2">
            <div>
              <div className="text-2xl font-bold text-purple-400">1.5+ Years</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">
                Experience
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-blue-400">7+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">
                Projects
              </div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/Java Resume Santosh.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                         bg-gradient-to-r from-purple-600 to-blue-600
                         hover:opacity-90 transition text-sm font-mono shadow-lg"
            >
              <i className="fa-solid fa-download" />
              Download CV
            </a>

            <a
              href="https://github.com/Mickelcom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                         border border-white/15 hover:bg-white/10
                         transition text-sm font-mono"
            >
              <i className="fa-brands fa-github" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
