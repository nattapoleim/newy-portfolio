"use client";

import { useState } from "react";

// icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline, IoMail, IoMailOutline } from "react-icons/io5";

// components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex h-16 items-center justify-between text-sm">
      <div
        className="group flex cursor-pointer items-center gap-2 md:gap-4"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? <IoMail /> : <IoMailOutline />}
        <span className="relative">
          {EMAIL}
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-dark duration-300 group-hover:w-full"></span>
        </span>
      </div>
      <div className="text-md hidden items-center gap-6 md:flex">
        {LINKS.map((link) => (
          <Links key={link.title} link={link} />
        ))}
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <BiMenuAltRight className="text-xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu .</SheetTitle>
            </SheetHeader>
            <div className="mt-10 flex flex-col items-center gap-6">
              {LINKS.map((link) => (
                <Links key={link.title} link={link} onOpenChange={setIsOpen} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
