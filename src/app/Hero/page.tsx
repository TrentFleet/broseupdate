"use client"
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const sentence1 = "Brose";
  const sentence2 = "Once upon a time in the wild terrain of libations, a group of buddies found themselves embroiled in a quest that mirrored the search for lost keys after a wild night out."; 
  const sentence3 = "Their mission: to unearth the quintessential wine brand that resonated with the elusive male millennials – a pursuit as daunting as chasing shadows.";
  const sentences = [sentence1, sentence2, sentence3];
  const delays = [0.2, 0.01, 0.01]; // delay for each sentence

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
                transition={{ delay: i * delays[j] + (j > 0 ? sentences.slice(0, j).reduce((acc, s, idx) => acc + s.length * delays[idx], 0) : 0) }}
                className={
                  j === 0 ? "text-gray text-9xl mt-10 font-Badger" :
                  j === 1 ? "text-gray text-xl" :
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
    </div>
  );
};

export default Hero;