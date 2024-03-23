"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `I am a statement a
lifestyle, and a
delicious rebellion
all bundled up in one sip. Brose those who dared to break free.
`;


const Hero = () => {
  return (
    <div>
  <TextGenerateEffect words={words} />
  <motion.div
  className="mt-4 text-gray-700 text-xl"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y:10, },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1
      }
    }
  }}
>
  <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam minus quo, 
  </motion.p>
  <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
    Dolorum quibusdam soluta exercitationem? Nobis quaerat culpa qui repudiandae? Dicta incidunt eius voluptates expedita saepe eaque voluptatem facilis maxime ab minus dolorem?
  </motion.p>
</motion.div>

    </div>
  );
};

export default Hero;
