import { useState } from "react";

export default function Skills() {

  const jobs = [
    {
      company: "European Technology Company",
      role: "Software Developer",
      date: "Feb 2023 – Feb 2026",
      points: [
        " Developed and maintained full stack web applications used by international clients.",
        "Designed and implemented RESTful APIs supporting scalable backend services.",
        "Collaborated with distributed engineering teams across multiple European time zones.",
        "Participated in Agile sprint planning, stand ups, and code review processes.",
        "Improved system performance and resolved production issues to increase platform reliability",
        "Worked closely with product and design teams to deliver new application features."

      ]
    },
    {
      company: "Scout Studio",
      role: "internship",
      date: "Dec 2022 - Feb 2023",
      points: [
        "Worked on client web applications.",
        "Built modern responsive interfaces."
      ]
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="bg-[#0a192f] px-6 py-32 text-[#8892b0]">

      <div className="max-w-6xl mx-auto h-[300px]">

        {/* Header */}
        <div className="flex items-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda] font-mono mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="ml-6 h-[1px] w-72 bg-[#233554]"></div>
        </div>

        <div className="flex gap-12">

          {/* Company Tabs */}
          <div className="flex flex-col border-l border-[#233554]" >
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`px-6 py-3 text-left font-mono text-sm transition rounded-none hover:bg-[#112240] border-0 
                ${active === index 
                  ? "text-[#64ffda] border-l-2 border-l-[#64ffda] bg-[#112240] outline-none hover:border-[#64ffda] " 
                  : ""}`}
                style={{outline:'none'}}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Job Content */}
          <div>
            <h3 className="text-xl text-[#ccd6f6]">
              {jobs[active].role}
              <span className="text-[#64ffda]">
                {" "}@ {jobs[active].company}
              </span>
            </h3>

            <p className="text-sm mt-1 mb-6">
              {jobs[active].date}
            </p>

            <ul className="space-y-3">
              {jobs[active].points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#64ffda]">▹</span>
                  {point}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}