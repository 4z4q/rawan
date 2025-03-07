"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

const COLOR_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function Hero() {
  const color = useMotionValue(COLOR_TOP[0]);

  useEffect(() => {
    animate(color, COLOR_TOP, {
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #0a0a0a 50%, ${color} )`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0 4px 24px  ${color}`;
  return (
    <motion.section
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 text-gray-200 pt-25"
      style={{
        background: backgroundImage,
      }}
    >
      <div className="flex flex-col z-10 items-center justify-center text-center">
        <span className="mb-4 inline-block relative rounded-full bg-gray-600/50 px-3 py-1.5  text-sm">
          Open for work
        </span>
        <h1 className="text-white/40 text-5xl font-black">Hi,I am</h1>
        <h1 className="max-w-3xl text-3xl md:text-5xl leading-tight text-transparent  font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text">
          Mohammed Jameel
        </h1>

        <Image
          src={"/profilepic.png"}
          alt="not found"
          width={250}
          height={250}
        />
        <div className="flex items-center justify-center gap-4 mt-8 bg-white/10 p-3 rounded-3xl space-x-2 mb-4 ms:none">
          <Image
            src={"/obj1.png"}
            alt="object"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={"/obj1.png"}
            alt="object"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={"/obj1.png"}
            alt="object"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <p>Let&#39;s work together</p>
        </div>

      <motion.p
        className="my-6  text-center"
        style={{
          textShadow: boxShadow,
          WebkitTextStroke: border,
        }}
      >
        Full Stack Developer based in Yemen
      </motion.p>

      <motion.button
        style={{ boxShadow, border }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="block m-auto mb-12 w-fit items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase text-white transition-colors hover:bg-white/20"
      >
        Contact me
      </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>

    </motion.section>
  );
}
