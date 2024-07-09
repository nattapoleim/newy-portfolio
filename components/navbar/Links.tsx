import Link from "next/link";
import React, { FC } from "react";
import { Button } from "../ui/button";

interface TLinks {
  title: string;
  path: string;
}

const Links: FC<{ link: TLinks }> = ({ link }) => {
  return (
    <Link className="group relative rounded-full duration-300" href={link.path}>
      {link.title}
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-dark duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default Links;
