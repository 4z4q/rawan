"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    id: 1,
    value: "2+",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 2,
    value: "10+",
    label: "Projects Completed",
    description: "From small applications to complex web platforms.",
  },
  {
    id: 3,
    value: "10+",
    label: "Technologies Mastered",
    description: "Proficient in various programming languages and frameworks.",
  },
  {
    id: 4,
    value: "99%",
    label: "Code Quality",
    description:
      "Committed to writing clean, efficient, and maintainable code.",
  },
  {
    id: 5,
    value: "10+",
    label: "Commits on GitHub",
    description: "Active contributor to open-source and personal projects.",
  },
];

export default function KeyMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className="text-white py-32 container mx-auto px-4 glass "
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Key Metrics
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {metrics.map((metric) => (
          <motion.div
            className="flex flex-col"
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 + metric.id * 0.1, delay: metric.id * 0.2 }}
          >
            <span className="text-6xl font-bold mb-4 text-purple-300">{metric.value}</span>
            <h3 className="text-2xl font-semibold mb-2">{metric.label}</h3>
            <p className="text-gray-400">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
