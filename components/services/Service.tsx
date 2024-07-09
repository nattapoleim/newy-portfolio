import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";

const Service = () => {
  return (
    <section
      id="services"
      className="mx-auto mt-20 flex max-w-[1024px] flex-col gap-20 md:flex-row"
    >
      <Skills />
      <Experience />
    </section>
  );
};

export default Service;
