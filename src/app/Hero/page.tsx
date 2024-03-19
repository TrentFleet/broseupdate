"use client"
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const sentence1 = "Brose";
  const sentence2 = "Once upon a time in the wild terrain of libations, a group of buddies found themselves embroiled in a quest that mirrored the search for lost keys after a wild night out. Their mission: to unearth the quintessential wine brand that resonated with the elusive male millennials – a pursuit as daunting as chasing shadows.";
  const sentences = [sentence1];
  const delays = [0.3]; // delay for each sentence

  return (
    <div className="leading-8 mt-10 text-center flex flex-col">
      <h1 className="mb-2">
        {sentences.map((sentence, j) => (
          <React.Fragment key={j}>
            {[...sentence.split('')].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * delays[j] }}
                className={
                  j === 0 ? "text-gray text-8xl mt-10 font-Badger" :
                  "text-xl"
                }
              >
                {letter}
              </motion.span>
            ))}
            <br />
          </React.Fragment>
        ))}
      </h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 3 }}
        className="text-xl text-center mb-10 px-4"
      >
        {sentence2}
      </motion.p>
    </div>
  );
};

export default Hero;