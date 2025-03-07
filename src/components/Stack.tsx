import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import React from "react";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 3, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
];

export default function Stack() {
  return (
    <div className="py-16 glass " id="stak">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-200 mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-5">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  size: 50,
                  color: item.color,
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
