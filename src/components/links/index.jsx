import Link from "next/link";
import React from "react";

const Links = ({ linkTo, className, content }) => {
  return (
    <li>
      <Link href={linkTo} className={className}>
        {content}
      </Link>
    </li>
  );
};

export default Links;
