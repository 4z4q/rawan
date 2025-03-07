"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavLink = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stak", path: "#stak" },
  { title: "Contact", path: "#contact" },
];
export default function Navbar() {
  const [nav, setNab] = useState(false);

  const toggleNav = () => {
    setNab(!nav);
  };

  const closeNav = () => {
    setNab(false);
  };

  return (
    <div className="z-50 flex justify-center text-white fixed w-full f-bold my-0 ">
      <div className="border border-white/20 hidden mt-8 backdrop-blur-3xl rounded-3xl md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {NavLink.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-white/50 transition-all duration-300 ease-in-out font-bold  "
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden absolute right-14 top-10 border rounded z-50 text-white/70 border-white/70 p-2 cursor-pointer"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/70   transform transition-transform duration-300 ${
          nav ? "translate-y-0" : "-translate-y-full"
        } duration-300 ease-in-out`}
      >

        <ul className="flex flex-col items-center justify-center h-full gap-2.5">
          {NavLink.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-white/50 transition-all duration-300 ease-in-out font-bold text-2xl "
            >
              <Link href={item.path} onClick={closeNav}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>



      </div>
    </div>
  );
}
