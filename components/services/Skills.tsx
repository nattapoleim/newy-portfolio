import React from "react";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { PiMonitorArrowUp } from "react-icons/pi";

const SKILLS = [
  {
    title: "UX/UI Design",
    desc: "Design a website or app with Figma",
    icon: <PiMonitorArrowUp />,
  },
  {
    title: "Front-End Develop",
    desc: "Coding front-end with Tailwind CSS, React JS",
    icon: <HiOutlineCodeBracketSquare />,
  },
  {
    title: "Back-End Develop",
    desc: "Coding back-end with Node JS",
    icon: <HiOutlineCodeBracketSquare />,
  },
];

const Skills = () => {
  return (
    <div className="flex w-full flex-col gap-8 md:py-10">
      {SKILLS.map((skill) => (
        <div
          key={skill.title}
          className="mx-auto flex w-[90%] items-center gap-6 sm:w-[60%] md:mx-0 md:w-full"
        >
          <div className="w-fit rounded-full bg-dark p-3 text-xl text-white">
            {skill.icon}
          </div>
          <div className="flex flex-col justify-center">
            <h3>{skill.title}</h3>
            <p className="text-sm text-second">{skill.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
