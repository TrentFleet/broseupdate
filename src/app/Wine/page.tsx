"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const wine = () => {
  return (
    <div className="flex mt-10 justify-center items-center bg-gray-700 p-4 rounded-xl bg-opacity-15">
      <motion.div
        initial={{ rotate: 5 }}
        animate={{ rotate: -5 }}
        whileHover={{ rotate: 0, scale: 1.2 }}
        transition={{ duration: 2 }}
        className="relative p-2 border-4 border-white rounded-xl bg-gray-50"
      >
        <Image src="/images/wine.png" alt="wine" width={400} height={650} />
        <div className="absolute bottom-0 left-0 p-4">
          <button>Buy Now</button>
        </div>
      </motion.div>
    </div>
  );
};

export default wine;