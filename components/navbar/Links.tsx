import Link from "next/link";
import React, { FC } from "react";

interface TLinks {
  title: string;
  path: string;
}

const Links: FC<{ link: TLinks }> = ({ link }) => {
  return <Link href={link.path}>{link.title}</Link>;
};

export default Links;
