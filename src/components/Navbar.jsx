import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 md:px-16 pb-6 pt-12 bg-[#0a192f]/80 backdrop-blur z-50 mb-10">

      {/* Logo */}
      <div className="flex items-center">
        <div className="w-10 h-10 border-2 border-[#64ffda] text-[#64ffda] flex items-center justify-center font-bold">
          E
        </div>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-[#ccd6f6] font-mono">

        <li>
          <a href="#about" className="hover:text-[#64ffda] transition">
            <span className="text-[#64ffda]">01.</span> About
          </a>
        </li>

        <li>
          <a href="#experience" className="hover:text-[#64ffda] transition">
            <span className="text-[#64ffda]">02.</span> Experience
          </a>
        </li>

        <li>
          <a href="#work" className="hover:text-[#64ffda] transition">
            <span className="text-[#64ffda]">03.</span> Work
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-[#64ffda] transition">
            <span className="text-[#64ffda]">04.</span> Contact
          </a>
        </li>

        <li>
          <a
            href="#resume"
            className="ml-4 px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition"
          >
            Resume
          </a>
        </li>

      </ul>

    </nav>
  );
}