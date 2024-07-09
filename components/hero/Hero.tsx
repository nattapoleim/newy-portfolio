import Me from "@/public/me.jpeg";
import Image from "next/image";
import { RxDownload } from "react-icons/rx";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center gap-5 text-center">
      <Image
        src={Me}
        width={100}
        height={100}
        alt="me"
        className="rounded-full"
      />
      <div className="text-xl">Hi! I&apos;m Vaan 👋🏻</div>
      <div className="text-4xl leading-tight">
        Website design, app, <br /> and developer.
      </div>
      <p className="text-second">
        a junior <span className="underline underline-offset-2">UI</span> and{" "}
        <span className="underline underline-offset-2">Web Designer.</span> I
        specialize in UI <br />
        design, responsive web design and visual <br />
        development.
      </p>
      <div className="mt-5 flex items-center justify-center gap-5">
        <Button>Hire Me</Button>
        <Button variant={"ghost"}>
          Download CV <RxDownload className="text-md ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
