import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import video from "../../videos/video3.mp4";
const TextRevealOnScroll = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const words = text.split(" ");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const wordVariants = {
    hidden: { opacity: 0.2, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full  h-[100px] md:h-[260px] relative flex items-center justify-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, ease: "easeInOut" }, // Adjust the staggerChildren and ease properties
          },
        }}>
        {" "}
        <video
          autoPlay
          muted
          loop
          className="video absolute w-full h-full object-cover left-0 top-0"
          src={video}
        />
        <h1 className="font-bold text-lg md:text-2xl lg:text-4xl line   absolute w-full h-full left-0 top-0">
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants}>
              {word}{" "}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </div>
  );
};

export default TextRevealOnScroll;
