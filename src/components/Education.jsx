import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    school: "Maharshi Dayanand University",
    period: "2024 – Present",
    summary:
      "Currently pursuing MCA with a strong focus on Data Structures, Java development, DBMS, Operating Systems, and full-stack engineering fundamentals.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Maharshi Dayanand University",
    period: "2021 – 2024",
    summary:
      "Completed BCA with hands-on experience in Java, C++, DBMS, and web development. Built multiple academic and personal projects. Scored 62%.",
  },
  {
    degree: "Senior Secondary (12th)",
    school: "CBSE Board",
    period: "2019 – 2020",
    summary: "Completed senior secondary education with 73% score.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-[#0a003a] text-white py-24 px-4"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-white/20 pl-8 space-y-14">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* DOT */}
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg" />

              {/* CARD */}
              <div className="bg-[#151130]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-300">
                    {edu.degree}
                  </h3>
                  <span className="text-xs md:text-sm font-mono text-gray-400">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm font-mono text-blue-400 mb-3">
                  {edu.school}
                </p>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {edu.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
