import React from "react";
import { motion } from "framer-motion";

export default function SpinningRing({ children, className } : { children: React.ReactNode, className?: string}) {
  return (
    <motion.div
      animate={{
        rotate: [220, 40],
        transition: {
          duration: 150,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
