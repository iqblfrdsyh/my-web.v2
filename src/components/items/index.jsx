import { Image } from "@nextui-org/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";

const Items = {
  ServiceItem: ({ itemName, imageSrc, desc, linkto }) => {
    return (
      <div className="max-w-sm p-6 bg-[#1a1a1a] border border-gray-100 rounded-lg shadow hover:">
        <Image
          src={imageSrc}
          alt={itemName}
          width={40}
          height={40}
          radius="none"
        />
        <h5 className="mb-2 mt-1 text-2xl font-semibold tracking-tight text-white">
          {itemName}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{desc}</p>
        <a
          href={linkto}
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Learn More <MdKeyboardDoubleArrowRight size={25} />
        </a>
      </div>
    );
  },
  SkillItem: ({ imageSrc, altName }) => {
    return (
      <div>
        <Image src={imageSrc} alt={altName} width={65} height={65} />
      </div>
    );
  },
};

export default Items;
