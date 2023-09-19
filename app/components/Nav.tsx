"use client";
import React from "react";
import { motion } from "framer-motion";
import brandIcon from "../images/brand.svg";
import Image from "next/image";

const hoverVariant = {};

export default function Nav() {
  return (
    <div className="w-6/10 navbar sticky top-0 z-30 m-auto bg-base-100 flex justify-center">
      <div className="w-11/12 sm:w-9/12">
        <div className="flex-1 ">
          <a className="btn btn-ghost text-xl normal-case">Ian Meyer</a>
          {/* <a className="btn btn-ghost normal-case text-xl">
          <Image src={brandIcon} height={33}></Image>
        </a> */}
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          animate={{
            transition: {
              duration: 0.3,
              delay: 1,
              repeat: 2,
              repeatDelay: 3,
            },
            rotate: [0, -5, 5, 0],
          }}
          className="flex-none"
        >
          <button className="btn btn-secondary btn-sm mx-4">resume</button>
        </motion.div>
      </div>
    </div>
  );
}
