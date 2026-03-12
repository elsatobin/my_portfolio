export default function RightSidebar() {
  return (
    <div className="fixed right-10 bottom-0 flex flex-col items-center text-[#8892b0] z-[1000] mr-[-50px]">

      {/* Email */}
      <a
        href="mailto:elsa0010021@outlook.com"
        className="mb-24 text-sm tracking-widest rotate-90 hover:text-[#64ffda] hover:-translate-y-1 transition"
      >
        elsa0010021@outlook.com
      </a>

      {/* Vertical line */}
      <div className="w-[1px] h-28 bg-[#8892b0]"></div>

    </div>
  );
}