import React, { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Java Developer",
    company: "Athenura",
    period: "Jan 2026 – Present",
    link: "https://www.athenura.in/",
    summary:
      "Contributed to Java backend development using Spring Boot, Spring Security, REST APIs, and MySQL. Implemented secure APIs, optimized performance, and resolved production issues while collaborating with cross-functional teams for scalable feature delivery.",
  },
  {
    title: "Full Stack Developer",
    company: "OriginCore Tech LLP",
    period: "Sep 2025 – Dec 2025",
    link: "https://origincoretech.com/",
    summary:
      "Built full-stack features using React, Node.js, Express, and MySQL, while also contributing to Java backend modules. Implemented APIs, improved performance, fixed production issues, and collaborated across teams.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Hyperscripts.io",
    period: "Sep 2024 – Jan 2025",
    link: "https://hyperscripts.io/",
    summary:
      "Developed responsive UI components, converted Figma designs into React code, integrated APIs, fixed UI bugs, improved UX, and collaborated with senior developers using Git, React, Tailwind, and Bootstrap.",
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="experience"
      className="relative bg-[#0a003a] text-white py-24 px-4"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-white/20 pl-8 space-y-14">
          {experiences.map((exp, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* DOT */}
                <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" />

                {/* CARD */}
                <div className="bg-[#151130]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition">
                  
                  {/* HEADER */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                      {exp.title}
                    </h3>
                    <span className="text-xs md:text-sm font-mono text-gray-400">
                      {exp.period}
                    </span>
                  </div>

                  {/* COMPANY */}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-mono text-purple-400 hover:underline mb-3"
                  >
                    {exp.company}
                  </a>

                  {/* SUMMARY */}
                  <p
                    className={`text-sm md:text-base text-gray-300 leading-relaxed transition-all ${
                      isOpen ? "line-clamp-none" : "line-clamp-2"
                    }`}
                  >
                    {exp.summary}
                  </p>

                  {/* ACTION */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : idx)
                    }
                    className="mt-4 text-sm font-mono text-blue-400 hover:text-blue-300 transition"
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
