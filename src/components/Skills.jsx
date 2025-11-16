import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frontendSkills = [
  { name: "HTML5", value: 95, color: "bg-purple-500" },
  { name: "React", value: 90, color: "bg-blue-500" },
  { name: "CSS", value: 95, color: "bg-purple-600" },
  { name: "Javascript", value: 85, color: "bg-yellow-500" },
  { name: "TailWind CSS", value: 80, color: "bg-cyan-400" },
  { name: "Bootstrap", value: 70, color: "bg-pink-500" },
];

const backendSkills = [
  { name: "Node.js", value: 85, color: "bg-green-500" },
  { name: "Express.js", value: 80, color: "bg-green-600" },
  { name: "MySQL", value: 75, color: "bg-blue-400" },
  { name: "Java", value: 70, color: "bg-red-500" },
  { name: "Spring Boot", value: 65, color: "bg-lime-500" },
  { name: "Hibernate", value: 75, color: "bg-blue-600" },
];

export default function Skills() {
  const [active, setActive] = useState("frontend");

  const skills = active === "frontend" ? frontendSkills : backendSkills;

  return (
    <section
      id="skills"
      className="py-16 bg-[#0a003a] text-white flex flex-col items-center px-4"
    >
      <div className="max-w-3xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center font-mono">
          Tools and Skills
        </h2>

        {/* FILTER BUTTONS */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setActive("frontend")}
            className={`px-4 py-2 rounded-full text-sm font-mono transition ${
              active === "frontend"
                ? "bg-purple-900 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            Front-end
          </button>

          <button
            onClick={() => setActive("backend")}
            className={`px-4 py-2 rounded-full text-sm font-mono transition ${
              active === "backend"
                ? "bg-purple-900 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            Back-end
          </button>
        </div>

        {/* TOOLS */}
        <div className="mb-10 flex flex-wrap gap-8 justify-center text-center">
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-code text-gray-300 text-xl"></i>
            <span className="font-mono text-xs text-gray-400 mt-1">VS Code</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-brands fa-git-alt text-gray-300 text-xl"></i>
            <span className="font-mono text-xs text-gray-400 mt-1">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-brands fa-github text-gray-300 text-xl"></i>
            <span className="font-mono text-xs text-gray-400 mt-1">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-brands fa-figma text-gray-300 text-xl"></i>
            <span className="font-mono text-xs text-gray-400 mt-1">Figma</span>
          </div>
        </div>

        {/* SKILL BARS WITH SLIDE ANIMATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-5"
          >
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold">{skill.name}</span>
                  <span className="text-xs text-gray-400">{skill.value}%</span>
                </div>
                <div className="w-full bg-[#1a1255] rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 0.6 }}
                    className={`${skill.color} h-3 rounded-full`}
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
