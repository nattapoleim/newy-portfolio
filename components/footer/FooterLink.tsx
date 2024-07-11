import Link from "next/link";
import { FC } from "react";

interface TFootLink {
  path: string;
  title: string;
}

const FooterLink: FC<{ link: TFootLink }> = ({ link }) => {
  return (
    <Link href={link.path} className="group relative w-fit">
      {link.title}
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default FooterLink;
