"use client";

import Image from "next/image";
import project1 from "../../public/proj5.png";
import project2 from "../../public/proj6.png";
import project3 from "../../public/proj7.png";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

const projects = [
  {
    id: 1,
    year: "2024",
    title: "E-Shop - E-commerce with Product Tracking",
    image: project1,
    description:
      "E-Shop is an advanced e-commerce platform that allows users to track their products easily, providing a seamless shopping experience with transparent order tracking.",
    // link: "https://github.com/username/project1"
  },
  {
    id: 2,
    year: "2024",
    title: "SweetStore - Sweets & Chocolate Shop",
    image: project2,
    description:
      "SweetStore is an online shop dedicated to sweets and chocolates lovers, offering a smooth shopping experience with a wide variety of delicious products.",
    // link: "https://github.com/username/project2"
  },
  {
    id: 3,
    year: "2024",
    title: "SpiceMarket - Coffee, Spices & Nuts Store",
    image: project3,
    description:
      "SpiceMarket is an online store specializing in high-quality coffee, spices, and nuts, catering to those who appreciate authentic flavors.",
    // link: "https://github.com/username/project3"
  },
];


const COLOR_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

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

  return (
    <motion.section
      id="portfolio"
      className="text-white py-32"
      style={{ backgroundImage }}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-bold mb-10">
            Selected <span className="text-gray-400 ">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              className="cursor-pointer mb-8 group"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-2xl font-semibold group-hover:text-gray-400 transition-colors duration-300 ${
                  selectedProject.id === project.id ? "text-gray-400" : ""
                }`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <motion.div
                  className="border-b-2 border-gray-400 my-4"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              )}

              {selectedProject.id === project.id && (
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>

        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            width={800}
            height={450}
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
