import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonLoad = () => {
  return (
    <div>
      <Skeleton className="h-[65px] w-[65px]">
        <div className="bg-slate-300"></div>
      </Skeleton>
    </div>
  );
};

export default SkeletonLoad;
