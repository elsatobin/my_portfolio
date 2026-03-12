import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a192f] py-40 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* SMALL TITLE */}
          <p className="text-[#64ffda] font-mono mb-4">
            04. What's Next?
          </p>

          {/* BIG TITLE */}
          <h2 className="text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-6">
            Get In Touch
          </h2>

          {/* TEXT */}
          <p className="text-[#8892b0] leading-relaxed mb-12">
            Although I’m not currently looking for any new opportunities,
            my inbox is always open. Whether you have a question or just
            want to say hi, I’ll try my best to get back to you!
          </p>

          {/* BUTTON */}
          <a
            href="mailto:elsa0010021@outlook.com"
            className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition duration-300"
          >
            Say Hello
          </a>

        </motion.div>

      </div>
    </section>
  );
}