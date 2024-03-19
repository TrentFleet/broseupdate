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
      className="w-full bg-custom-pink text-color text-md mb-10 p-4 mt-10"
      style={{ scale }}
    >
      <div className="flex justify-evenly space-x-2 w-3/4 text-xs mx-auto ">
        <button className="hover:bg-gray-600 rounded-lg hover:bg-opacity-10"><Video /></button>
        <button className="hover:bg-gray-600 rounded-lg hover:bg-opacity-10"><Instagram /></button>
        <button className="hover:bg-gray-600 rounded-lg hover:bg-opacity-10"><FacebookIcon /></button>
        <button className="hover:bg-gray-600 rounded-lg hover:bg-opacity-10"><WineIcon /></button>
      </div>
      <div className="flex justify-center mt-10 text-xs">
        <p>&copy; {new Date().getFullYear()} Brose. All rights reserved.</p>
        </div>
    </motion.footer>
  );
}
 
export default Footer;