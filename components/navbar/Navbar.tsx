import { IoMailOutline } from "react-icons/io5";
import Links from "./Links";

const EMAIL = "nattapol.eim@gmail.com";
const LINKS = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Service",
    path: "#service",
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
  return (
    <nav className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-5">
        <IoMailOutline /> {EMAIL}
      </div>
      <div className="flex items-center gap-6">
        {LINKS.map((link) => (
          <Links key={link.title} link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
