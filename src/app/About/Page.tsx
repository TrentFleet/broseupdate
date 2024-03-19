"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  const images = ["/images/image4.jpg", "/images/image3.jpg", "/images/image2.jpg", "/images/image1.jpg"]; // replace with your images

  return (
    <div className="flex flex-col items-center mt-40">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}
        className="text-5xl font-bold font-Badger mb-4"
      >
        Who We Are
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, delay: 4 }}
        className="text-xl text-center mb-10 px-4"
      >
        a group of friends who emerged as the champions of change in the world of Rosé. Trapped within the confines of a ladies-only stereotype, we yearned for emancipation and decided to take matters into our own hands.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-80 h-full" // Increase max-width
      >
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay showStatus={false} showArrows={false} swipeable>
          {images.map((src, i) => (
            <div key={i} className="relative h-96 rounded-lg overflow-hidden"> {/* Increase height, add rounded corners, and hide overflow */}
              <Image src={src} layout="fill" objectFit="cover" alt="Brose wine" />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default AboutUs;