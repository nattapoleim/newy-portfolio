"use client";

import { useState } from "react";
import { IoMail, IoMailOutline } from "react-icons/io5";
import Links from "./Links";

const EMAIL = "nattapol.eim@gmail.com";
const LINKS = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <nav className="flex h-16 items-center justify-between text-sm">
      <div
        className="group flex cursor-pointer items-center gap-4"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? <IoMail /> : <IoMailOutline />}
        <span className="relative">
          {EMAIL}
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-dark duration-300 group-hover:w-full"></span>
        </span>
      </div>
      <div className="text-md flex items-center gap-6">
        {LINKS.map((link) => (
          <Links key={link.title} link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
