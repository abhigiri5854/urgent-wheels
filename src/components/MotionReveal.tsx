"use client";

import { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MotionReveal({
  children,
  className,
  delayMs = 0,
}: PropsWithChildren<{
  className?: string;
  delayMs?: number;
}>) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      // Keep opacity solid so text is always readable (no faded/grey look).
      initial={{ opacity: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.38, ease: "easeOut", delay: delayMs / 1000 }}
    >
      {children}
    </motion.div>
  );
}

