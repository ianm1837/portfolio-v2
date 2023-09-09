import React from 'react'
import Image from 'next/image';
import profile from '../images/Group 1.png'
import { IBM_Plex_Mono as Mono } from 'next/font/google';

const mono = Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="w-10/12 m-auto mt-20">
      <div className="flex justify-center p-5 m-auto">
        <div className="w-6/12 p-5">
          <Image
            src={profile}
            alt="Picture of the author"
            className=" w-4/10"
          ></Image>
        </div>
        <div className="my-auto w-6/12 p-5">
          <h1 className='text-5xl font-bold'>Ian Meyer</h1>
          <h3 className={`my-2 ${mono.className} `}>Full Stack Web Developer</h3>
          <br></br>
          I'm a full-stack engineer with an insatiable drive to learn, create,
          and solve challenges using technology.
        </div>
      </div>
    </div>
  );
}
