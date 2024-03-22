"use client"

import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const wine = () => {
  const { scrollYProgress } = useViewportScroll();
  const bottleScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.8]);

  return (
    <div className="relative flex justify-center mt-10 items-center p-4">
      <motion.div 
        className="absolute mx-auto w-full h-full z-10" 
        style={{ 
          backgroundImage: `url(/images/finalshape.svg)`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative p-2 z-20"
      >
        <motion.div
          animate={{ y: ["-5px", "-0px", "-5px"], rotate: -15 }}
          style={{ scale: bottleScale }}
        >
          <img src="/images/wine.png" className="xl:max-w-60 " alt="wine" />
        </motion.div>
        <div className="absolute bottom-0 left-0">
        <button className="px-8 py-2  bg-gray-600 text-white text-sm rounded-md  hover:bg-gray-800/[0.8] hover:shadow-lg">
  Buy Now
</button>
        </div>
      </motion.div>
    </div>
  );
};

export default wine;