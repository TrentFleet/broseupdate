"use client"
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const wine = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 2]);

  return (
    <div className="flex justify-center mt-20 items-center bg-gray-700 p-4 rounded-xl bg-opacity-15">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [15, -5, 0 ]}}
        transition={{ duration: 2 }}
        className="relative p-2 border-4 border-white rounded-xl bg-gray-50"
        style={{ scale }}
      >
        <Image src="/images/wine.png" alt="wine" width={400} height={850} />
        <div className="absolute bottom-0 left-0">
          <button className="font-Badger">Buy Now</button>
        </div>
      </motion.div>
    </div>
  );
};

export default wine;