"use client";
import {  useState } from "react";
import { motion } from "framer-motion"
import { useMousePosition } from "../hooks/useMousePosition";


export default function Home() {

  const mousePosition = useMousePosition()
  const [mouseHover, setMouseHover] = useState(false)
  const size = mouseHover ? 400 : 30

  return (
    <main className="min-h-[100vh] w-full center relative bg-[red]">
      <div className="text-center">

        <motion.div
          animate={{
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`
          }}
          transition={{
            duration: .4,
            ease: "backOut"
          }}
          className="absolute left-0 mask inset-0 bg-[#000000] center">
          <h1
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            className="text-[18vw] uppercase font-bold text-white">
            Hello World!
          </h1>
        </motion.div>

        <div>
          <h1 className="text-[18vw] uppercase font-bold">Hello World!</h1>
        </div>

      </div>
    </main>
  );
}
