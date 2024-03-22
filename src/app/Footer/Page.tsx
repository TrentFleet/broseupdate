"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FacebookIcon, Instagram, Video, WineIcon } from "lucide-react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Link from "next/link";

const Footer = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  return (
    <>
    
    
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-1/2 mx-auto text-color text-xs mb-10 mt-40"
        style={{ scale }}
      >
        <div className="flex xl:w-60 mt-10 justify-between space-x-2 text-xs mx-auto ">
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

        <AuroraBackground className="h-1/2 mx-auto w-full p-2 mt-10 rounded-md">
          <div className="flex justify-center text-xs">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Brose. All rights reserved.
            </p>
          </div>
        </AuroraBackground>
      </motion.footer>
    </>
  );
};

export default Footer;
