import React from "react";
import { RiLoader4Line } from "react-icons/ri";

const Loading = () => {
  return (
    <div className="animate-spin text-black/30 h-[500px] flex justify-center items-center">
      <RiLoader4Line size={150} />
    </div>
  );
};

export default Loading;
