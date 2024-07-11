import Link from "next/link";
import React from "react";
import FooterLink from "./FooterLink";

const FOOTLINKS = [
  [
    {
      title: "LinkedIn",
      path: "",
    },
    {
      title: "Github",
      path: "",
    },
  ],
  [
    {
      title: "Instagram",
      path: "",
    },
    {
      title: "Pinterest",
      path: "",
    },
  ],
  [
    {
      title: "Dribbble",
      path: "",
    },
    {
      title: "Youtube",
      path: "",
    },
  ],
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <main className="container space-y-20 py-20">
        <div>
          <h4 className="text-4xl leading-tight">
            Have an idea? <br />
            <span className="border-b-2">Let&apos;s talk about it</span>
          </h4>
        </div>
        <div className="flex h-24 items-center justify-between">
          <article className="flex h-full flex-col justify-between">
            <div className="group relative w-fit cursor-pointer text-xl">
              nattapol.eim@gmail.com
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white duration-300 group-hover:w-full"></span>
            </div>
            <p className="text-sm text-second">
              Pattaya, 20150 <br />
              Chonburi. Thailand
            </p>
          </article>
          <article className="flex h-full flex-1 items-center justify-end gap-28">
            {FOOTLINKS.map((set, index) => (
              <div key={index} className="flex h-full flex-col justify-between">
                <FooterLink link={set[0]} />
                <FooterLink link={set[1]} />
              </div>
            ))}
          </article>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
