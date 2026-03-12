export default function About() {
  return (
    <section id="about" className="bg-[#0a192f] text-[#8892b0] py-24 px-4 ">

      <div className="max-w-6xl mx-auto mt-10">

        {/* Title */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda] font-mono mr-2">01.</span> About Me
          </h2>

          <div className="ml-6 h-[1px] w-72 bg-[#233554]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Text */}
          <div className="space-y-6 leading-relaxed">
            <p>
              Software Developer with 2+ years of experience working remotely with <span className="text-[#64ffda]">a European technology
              company</span>. Experienced in building <span className="text-[#64ffda]">scalable</span> web applications, collaborating with distributed teams
              across Europe, and delivering reliable software solutions in Agile development environments. Currently
              unemployed and actively seeking new opportunities with European or international engineering teams.
            </p>
            <p>
              My main focus these days is building accessible, inclusive products
              and digital experiences.
            </p>

            {/* Tech list */}
            <div className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
              <span>▹ JavaScript (ES6+)</span>
              <span>▹ TypeScript</span>
              <span>▹ Java</span>
              <span>▹ Python</span>
              <span>▹ Node.js</span>
              <span>▹ WordPress</span>
              <span>▹ React (ES6+)</span>
              <span>▹ Svelte</span>
              <span>▹ GraphQL</span>
              <span>▹ PostgreSQL</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group w-92 mx-auto">

            <div className="absolute inset-0 border-2 border-[#64ffda] translate-x-4 translate-y-4"></div>

            <img
              src="/my-image/avatar.png"
              alt="profile"
              className="relative z-10 grayscale hover:grayscale-0 transition"
            />

            <div className="absolute inset-0 bg-[#64ffda] opacity-30 group-hover:opacity-0 transition"></div>

          </div>

        </div>

      </div>

    </section>
  );
}