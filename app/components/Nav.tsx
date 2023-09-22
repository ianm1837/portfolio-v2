"use client";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Nav() {
  return (
    <div className="w-6/10 navbar sticky top-0 z-30 m-auto flex justify-center bg-base-100">
      <div className="w-11/12 sm:w-9/12">
        <div className="flex-1 ">
          <Link className="btn btn-ghost text-xl normal-case" href="/">
            Ian Meyer
          </Link>
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
          <a href="/Ian-Meyer-Resume-2023.pdf" target="_blank" className="btn btn-secondary btn-sm mx-4">resume</a>
        </motion.div>
      </div>
    </div>
  );
}
