import { Image } from "@nextui-org/react";
import React from "react";

const Section = ({ children, title, className, icon }) => {
  return (
    <section className="h-auto w-full">
      <div className={icon ? "flex items-center justify-center" : null}>
        <h2 className={`font-semibold text-3xl my-5 ${className}`}>{title}</h2>
        {icon ? <Image src={icon} alt="image" className="w-[60px] mt-1" /> : null}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
