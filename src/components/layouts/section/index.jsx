import React from "react";

const Section = ({ children, title, className }) => {
  return (
    <section className="h-auto w-full">
      <h2 className={`font-semibold text-3xl my-5 ${className}`}>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
