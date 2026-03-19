import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="work" className="bg-[#0a192f] py-32 px-6 text-[#8892b0]">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="flex items-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda] font-mono mr-2">03.</span>
            Some Things I've Built
          </h2>
          <div className="ml-6 h-[1px] w-72 bg-[#233554]"></div>
        </div>

        <Project
          image="/my-image/project-1.png"
          title="SEF Academy"
          description="Contributed to the development of an SEF Academy Website as part of both the Frontend and Backend teams. Developed user interfaces using React and built APIs for Articles, Certificates, Exams, and Applications using Node.js and Express. Managed databases using MongoDB."
          stack={["React", "Node.js", "Express","JavaScript"]}
          reverse={false}
          githerf={"https://github.com/elsatobin/SEF-Academy"}
          realherf={"https://project-01-seff-website-2023-09-2-my-part.vercel.app/"}
        />

        <Project
          image="/my-image/project-2.png"
          title="Blancpain Villeret"
          description="Online store for selling wristwatches, Developed using Next js 13 app dirctory, static & dynamic metadata, shopping cart, favorite list, With notifications toast."
          stack={["Next", "PostgreSQL", "TypeScript"]}
          reverse={true}
          githerf={"https://github.com/elsatobin/watch-shop"}
          realherf={"https://devita-watchs.vercel.app/"}
        />
        <Project
          image="/my-image/project-3.png"
          title="Achitectual Design"
          description="Architectur Design template WordPress & JavaScript & GraphQL only."
          stack={["WordPress", "GraphQL", "JavaScript"]}
          reverse={false}
          githerf={"https://github.com/elsatobin/Architectural-Design"}
          realherf={"https://e-mustafa.github.io/Tamplate-101/"}
        />

        <Project
          image="/my-image/project-4.png"
          title="Coffee King"
          description="Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list."
          stack={["React", "TypeScript", "GraphQL"]}
          reverse={true}
          githerf={"https://github.com/elsatobin/Coffee-shop.git"}
          realherf={"https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap/"}
        />
        <Project
          image="/my-image/project-5.png"
          title="RealWorld"
          description="RealWorld is a reference full‑stack application specification that implements a Medium.com–like blogging platform with full CRUD (articles, comments), user authentication, profiles, and feed features."
          stack={["Django", "Python", "Angular","Node.js"]}
          reverse={true}
          githerf={"https://github.com/elsatobin/myrealworld"}
          realherf={"https://docs.realworld.show/"}
        />
        <Project
          image="/my-image/project-6.png"
          title="Host, run, and code Python in the cloud!"
          description="A full‑stack boilerplate application integrating Django (backend) with React (frontend) and styled using Tailwind CSS. The project includes modern frontend workflows and backend APIs with session/cookie handling, making it suitable as a real scenario reference for user authentication, routing, and design integration between Django and React."
          stack={["Django", "React", "TailwindCSS","Django REST Framework"]}
          reverse={true}
          githerf={"https://github.com/elsatobin/myDjango-React-Tailwindcss-Boilerplate.git"}
          realherf={"https://www.pythonanywhere.com/"}
        />
      </div>

    </section>
  );
}
function Project({ image, title, description, stack, reverse,githerf,realherf }) {
  return (
    <motion.div
      className={`grid md:grid-cols-12 gap-8 items-center mb-32 `}
    >
      {/* IMAGE */}
      <div className={`md:col-span-7 `}>
        <img
          src={image}
          alt={title}
          className="rounded-lg opacity-80 hover:opacity-100 transition"
        />
      </div>

      {/* TEXT PANEL */}
      <div
        className={`md:col-span-5 ${reverse ? "" : "md:col-start-8"
          }`}
      >
        <p className="text-[#64ffda] font-mono text-sm mb-2">
          Featured Project
        </p>

        <h3 className="text-xl text-[#ccd6f6] font-bold mb-4">{title}</h3>

        <div className="bg-[#112240] p-6 rounded shadow-lg mb-4">
          {description}
        </div>

        <ul className="flex flex-wrap gap-4 text-sm font-mono">
          {stack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <div className="project-links flex justify-left">
          <a href={githerf} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="mr-5 mt-5">
            <FaGithub className="hover:text-[#64ffda]" size={25} />
          </a>
          <a
            href={realherf}
            aria-label="External Link"
            className="external mr-5 mt-5"
            target="_blank"
            rel="noreferrer">
            <FaExternalLinkSquareAlt className="hover:text-[#64ffda]" size={25} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}