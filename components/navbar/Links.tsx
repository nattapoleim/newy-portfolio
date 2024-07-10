import Link from "next/link";
import React, { FC } from "react";

interface TLinks {
  title: string;
  path: string;
}

interface LinksProps {
  link: TLinks;
  onOpenChange?: (isOpen: boolean) => void;
}

const Links: FC<LinksProps> = ({ link, onOpenChange }) => {
  return (
    <Link
      className="group relative rounded-full duration-300"
      href={link.path}
      onClick={() => onOpenChange && onOpenChange(false)}
    >
      {link.title}
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-dark duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default Links;
