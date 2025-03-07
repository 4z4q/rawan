// This line tells Next.js that this component uses client-side features
"use client";

// Import necessary components and libraries
import Image from "next/image";
import { motion } from "framer-motion";
// import udemy from "../../public/udemy.png";
import mui from "../../public/pngwing.com.png";
import tailwindcss from "../../public/pngwing.com (1).png";
import logitech from "../../public/logitech.png";
// import oracle from "../../public/oracle.png";
// Define an array of image objects, currently empty
const images = [
  // { src: udemy, alt: "figma" },
  { src: mui, alt: "mui" },
  { src: tailwindcss, alt: "tailwindcss" },
  { src: logitech, alt: "logitech" },
  // { src: oracle, alt: "oracle" },
  // { src: udemy, alt: "figma" },
  { src: mui, alt: "mui" },
  { src: tailwindcss, alt: "tailwindcss" },
  { src: logitech, alt: "logitech" },
  // { src: oracle, alt: "oracle" },
  // { src: udemy, alt: "figma" },
  { src: mui, alt: "mui" },
  { src: tailwindcss, alt: "tailwindcss" },
  { src: logitech, alt: "logitech" },
  // { src: oracle, alt: "oracle" },
  // { src: udemy, alt: "figma" },
  { src: mui, alt: "mui" },
  { src: tailwindcss, alt: "tailwindcss" },
  { src: logitech, alt: "logitech" },
  // { src: oracle, alt: "oracle" },
];

export default function LogoAnimation() {
  return (
    <div className="bg-purple-200/10 py-8 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to-right,transparent,_black_25%,_black_75%,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image
                className="object-cover grayscale"
                key={index}
                src={image.src}
                alt={image.alt}
                height={30}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
