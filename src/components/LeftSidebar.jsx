import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";

export default function LeftSidebar() {
  return (
    <>
      {/* Logo */}
      <div className="fixed top-8 left-8 ">
        <div className="w-12 h-12 border-2 border-[#64ffda] text-[#64ffda] flex items-center justify-center font-bold text-lg rounded-md">
          B
        </div>
      </div>

      {/* Social Icons */}
      <div className="fixed bottom-0 left-8 flex flex-col items-center gap-6 text-[#8892b0]  z-[1000] ml-[2%]">

        <a href="https://github.com/elsatobin">
          <FaGithub className="hover:text-[#64ffda] hover:-translate-y-1 transition" size={20}/>
        </a>

        <a href="#">
          <FaInstagram className="hover:text-[#64ffda] hover:-translate-y-1 transition" size={20}/>
        </a>

        {/* <a href="#">
          <FaTwitter className="hover:text-[#64ffda] hover:-translate-y-1 transition" size={20}/>
        </a> */}

        <a href="#">
          <FaLinkedin className="hover:text-[#64ffda] hover:-translate-y-1 transition" size={20}/>
        </a>

        {/* <a href="#">
          <FiCodepen className="hover:text-[#64ffda] hover:-translate-y-1 transition" size={20}/>
        </a> */}

        {/* vertical line */}
        <div className="w-[1px] h-28 bg-[#8892b0] mt-4"></div>

      </div>
    </>
  );
}