import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frontendSkills = [
  { name: "HTML5", value: 95, color: "from-purple-500 to-purple-400" },
  { name: "CSS3", value: 95, color: "from-purple-600 to-purple-500" },
  { name: "JavaScript", value: 85, color: "from-yellow-500 to-yellow-400" },
  { name: "React", value: 80, color: "from-blue-500 to-blue-400" },
  { name: "Nextjs", value: 90, color: "from-cyan-500 to-blue-400" },
  { name: "Tailwind CSS", value: 80, color: "from-cyan-500 to-cyan-400" },
  { name: "Bootstrap", value: 70, color: "from-pink-500 to-pink-400" },
];

const backendSkills = [
  { name: "Node.js", value: 60, color: "from-green-500 to-green-400" },
  { name: "Express.js", value: 50, color: "from-green-600 to-green-500" },
  { name: "Java", value: 90, color: "from-red-500 to-red-400" },
  { name: "Spring Boot", value: 80, color: "from-lime-500 to-lime-400" },
  { name: "Spring Security", value: 75, color: "from-emerald-500 to-emerald-400" },
  { name: "Hibernate", value: 85, color: "from-blue-600 to-blue-500" },
  { name: "MySQL", value: 80, color: "from-blue-500 to-blue-400" },
  { name: "PostgreSQL", value: 60, color: "from-indigo-500 to-indigo-400" },
];

const tools = [
  { icon: "fa-code", name: "VS Code" },
  { icon: "fa-brands fa-git-alt", name: "Git" },
  { icon: "fa-brands fa-github", name: "GitHub" },
  { icon: "fa-brands fa-figma", name: "Figma" },
];

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const skills = active === "frontend" ? frontendSkills : backendSkills;

  return (
    <section
      id="skills"
      className="relative bg-[#0a003a] text-white py-24 px-4"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Tools & Skills
          </span>
        </h2>

        {/* SEGMENTED TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#151130]/80 backdrop-blur-md border border-white/10 rounded-full p-1">
            {["frontend", "backend"].map((type) => (
              <button
                key={type}
                onClick={() => setActive(type)}
                className={`px-6 py-2 text-sm font-mono rounded-full transition
                  ${
                    active === type
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {type === "frontend" ? "Front-end" : "Back-end"}
              </button>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#151130]/70 backdrop-blur-md border border-white/10 rounded-xl
                         py-4 flex flex-col items-center justify-center
                         hover:scale-105 transition"
            >
              <i className={`fa-solid ${tool.icon} text-xl text-gray-300`} />
              <span className="mt-2 text-xs font-mono text-gray-400">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold">{skill.name}</span>
                  <span className="text-xs text-gray-400">
                    {skill.value}%
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-[#1a1255] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
