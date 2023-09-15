import React from "react";
import { motion } from "framer-motion";
import lineWave from "../images/line-wave.svg";
import Image from "next/image";

export default function WaveBanner({ direction }) {

  const forward = [0, -800]
  const reverse = [-800, 0]

  return (
    <motion.div
      className="mt-20 flex h-20 w-screen"
      animate={{
        x: direction? reverse : forward,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        },
      }}
    >
      <Image
        src={lineWave}
        width={"800px"}
        height={"10px"}
        alt=""
        className="m-0 w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={"800px"}
        height={"10px"}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={"800px"}
        height={"10px"}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={"800px"}
        height={"10px"}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={"800px"}
        height={"10px"}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={"800px"}
        height={"10px"}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={"800px"}
        height={"10px"}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
    </motion.div>
  );
}
