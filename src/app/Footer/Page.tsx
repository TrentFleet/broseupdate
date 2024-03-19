"use client"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FacebookIcon, Instagram, Video, WineIcon } from "lucide-react";

const Footer = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-full text-color text-xs mb-10 mt-10"
      style={{ scale }}
    >
      <div className="flex justify-evenly space-x-2 text-xs mx-auto ">
        <motion.button 
          animate={{ y: ["0%", "10%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          className="hover:text-white rounded-lg ease-in hover:bg-opacity-10"
        >
          <Video />
        </motion.button>
        <motion.button 
          animate={{ y: ["0%", "10%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          className="hover:text-white rounded-lg ease-in hover:bg-opacity-10"
        >
          <Instagram />
        </motion.button>
        <motion.button 
          animate={{ y: ["0%", "10%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          className="hover:text-white rounded-lg ease-in hover:bg-opacity-10"
        >
          <FacebookIcon />
        </motion.button>
        <motion.button 
          animate={{ y: ["0%", "10%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          className="hover:text-white rounded-lg ease-in hover:bg-opacity-10"
        >
          <WineIcon />
        </motion.button>
      </div>
      <div className="flex justify-center mt-10 text-xs">
        <p className="text-xs">&copy; {new Date().getFullYear()} Brose. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
 
export default Footer;