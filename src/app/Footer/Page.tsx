"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FacebookIcon, Instagram, Video, WineIcon } from "lucide-react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Link from "next/link";

const Footer = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <><div className="relative flex justify-center mt-60 items-center p-4">
      <motion.div
        className="absolute opacity-90 mx-auto w-full h-full z-20"
        style={{
          backgroundImage: `url('/images/better.svg')`,
          backgroundSize: '300% 300%',
          backgroundPosition: 'center'
        }} />
      <motion.div
        className="text-gray-700 text-xl relative z-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 0, },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 1,
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="z-1 relative">
Brose Winery, nestled in Auckland, New Zealand, meticulously crafts unique blends reflecting the region's terroir, offering a taste of tradition and innovation in every bottle.</motion.p>
<button className="px-8 py-2  bg-gray-600 text-white text-sm rounded-lg mt-4  hover:bg-gray-800/[0.8] hover:shadow-lg">
  Learn More
  </button>
      </motion.div>
    </div><motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-1/2 mx-auto text-color text-xs mt-20"
      style={{ scale }}
    >
        <div className="flex xl:w-60 justify-between space-x-2 text-xs mx-auto ">
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
      </motion.footer></>
    
  );
};

export default Footer;
