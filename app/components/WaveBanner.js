import React from 'react';
import { motion } from 'framer-motion';
import lineWave from '../images/line-wave.svg';
import Image from 'next/image';

export default function WaveBanner() {
  return (
    <motion.div
      className="h-20 w-100vw flex mt-20"
      animate={{
        x: [0, -800],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        },
      }}
    >
      <Image
        src={lineWave}
        width={'800px'}
        height={'10px'}
        alt=""
        className="w-[800px]"
      />
      <Image
        src={lineWave}
        width={'800px'}
        height={'10px'}
        alt=""
        className="w-[800px]"
      />
      <Image
        src={lineWave}
        width={'800px'}
        height={'10px'}
        alt=""
        className="w-[800px]"
      />
      <Image
        src={lineWave}
        width={'800px'}
        height={'10px'}
        alt=""
        className="w-[800px]"
      />
      <Image
        src={lineWave}
        width={'800px'}
        height={'10px'}
        alt=""
        className="w-[800px]"
      />
    </motion.div>
  );
}
