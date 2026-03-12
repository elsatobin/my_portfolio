import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 bg-[#0a192f] px-8 md:pr-24 md:pr-96 justify-center">

      <div className="max-w-6xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#64ffda] font-mono mb-6"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-[#ccd6f6]"
        >
          Elsa Tobin.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-[#8892b0] mt-3"
        >
          <TypeAnimation
            sequence={[
              "I design scalable APIs.",
              2000,
              "I architect high-load services.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-[#8892b0] max-w-xl leading-relaxed"
        >
          A senior full-stack developer focused on modern web architecture, scalable APIs, and high-performance applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="px-7 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 hover:-translate-y-1 transition-all duration-300"
          >
            Check out my work
          </a>
        </motion.div>

      </div>

    </section>
  );
}