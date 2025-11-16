import React from "react";

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    school: "Maharshi Dayanand University",
    period: "2024 – Present",
    summary:
      "Currently pursuing MCA with a strong focus on Data Structures, Java development, DBMS, operating systems, and full-stack engineering fundamentals.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Maharshi Dayanand University",
    period: "2021 – 2024",
    summary:
      "Completed BCA with hands-on experience in Java, C++, DBMS, and web development. Built multiple academic and personal projects during the program.",
  },
  {
    degree: "12th",
    school: "CBSE Board",
    period: "2019 – 2020",
    summary:
      "Studied Physics, Chemistry, and Math, developing strong logical reasoning and analytical foundations.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 bg-[#0a003a] text-white flex flex-col items-center px-4"
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-12 text-center font-mono">
          Education
        </h2>

        <div className="flex flex-col gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#151130] rounded-xl shadow-lg border border-[#23234c] p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <span className="block text-lg md:text-xl font-bold text-blue-400 mb-2">
                {edu.degree}
              </span>

              <span className="block text-sm font-mono text-gray-300 mb-1">
                {edu.school}
              </span>

              <span className="block text-xs md:text-sm font-mono text-gray-500 mb-3">
                {edu.period}
              </span>

              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {edu.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
