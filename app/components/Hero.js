import React from 'react';
import Image from 'next/image';
import profile from '../images/profile.png';
import profileSpinner from '../images/portrait-spinner.svg';
import { IBM_Plex_Mono as Mono } from 'next/font/google';
import { motion } from 'framer-motion';

const mono = Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="w-10/12 m-auto mt-20">
      <div className="flex justify-center p-5 m-auto">
        <div className="w-6/12  relative h-[414px]">
          <motion.div
            animate={{
              rotate: [220, 40],
              transition: {
                duration: 150,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
            className="h-[366px] w-[356px] left-[55px] absolute z-[2] inset-x-0 bottom-0"
          >
            <Image
              src={profileSpinner}
              alt=" "
              height={366}
              className=" bottom-[0px]"
            ></Image>
          </motion.div>
          <Image
            src={profile}
            alt="Picture of the author"
            className="absolute z-[3] h-[414px] w-[465px]"
          ></Image>
        </div>
        <div className="my-auto w-6/12 p-5">
          <h1 className="text-5xl font-bold">Ian Meyer</h1>
          <h3 className={`my-2 ${mono.className} `}>
            Full Stack Web Developer
          </h3>
          <br></br>
          I'm a full-stack engineer with an insatiable drive to learn, create,
          and solve challenges using technology.
        </div>
      </div>
    </div>
  );
}
