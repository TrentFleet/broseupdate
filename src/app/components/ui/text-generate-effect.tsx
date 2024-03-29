"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import cn from "classnames";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={
                word === "Brose" || word === "statement"
                  ? "text-white text-7xl font-Badger opacity-0"
                  : "dark:text-white text-color opacity-0"
              }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold", className)}>
      
        <div className=" dark:text-gray-700 opacity-100 text-color text-6xl mt-2 leading-14">
          {renderWords()}
        </div>
      </div>
    
  );
};
