"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // !bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
  return (
    <motion.div
      className="topp fixed left-0 right-0 z-50 h-1 w-auto bg-brandpink/70"
      style={{ scaleX }}
    />
  );
}
