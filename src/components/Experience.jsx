import React from "react";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Hyperscripts.io",
    period: "Sep 2024 – Jan 2025",
    link: "https://hyperscripts.io/",
    summary:
      "Developed responsive UI components, converted Figma designs into React code, integrated APIs, fixed UI bugs, improved user experience, and collaborated with senior developers using Git, React, HTML, CSS, Tailwind & Bootstrap.",
  },
  {
    title: "Full Stack Developer",
    company: "OriginCore Tech LLP",
    period: "Sep 2025 – Present",
    link: "https://origincoretech.com/",
    summary:
      "Building full-stack features using React, Node.js, Express and MySQL, while also contributing to Java backend modules. Implementing APIs, improving performance, fixing production issues, and collaborating across teams for scalable feature delivery.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 bg-[#0a003a] text-white flex flex-col items-center px-4"
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-12 text-center font-mono">
          Professional Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#151130] rounded-xl shadow-lg border border-[#23234c] p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <span className="block text-lg md:text-xl font-bold text-blue-400 mb-2">
                {exp.title}
              </span>

              <a
                href={exp.link}
                target="_blank"
                className="block text-sm font-mono text-gray-300 hover:text-purple-300 transition mb-1"
              >
                {exp.company}
              </a>

              <span className="block text-xs md:text-sm font-mono text-gray-500 mb-3">
                {exp.period}
              </span>

              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
