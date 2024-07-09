import React from "react";

const Experience = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 text-center md:items-start md:text-start">
      <h3>Services</h3>
      <h4 className="text-3xl">My Awesome Service</h4>
      <p className="text-sm text-second">
        Bring your digital vision to life through a seamless fusion of
        creativity <br />
        and functionality. As a dedicated UI designer and web developer,
      </p>
      <p className="text-sm text-second">
        I offer a range of services that elevate your online presence.
      </p>

      <div className="mt-3 flex gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-3xl">15+</span>
          <span className="text-sm">Project complete</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-3xl">1+</span>
          <span className="text-sm">Year experience</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
