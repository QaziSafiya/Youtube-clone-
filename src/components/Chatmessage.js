import React from "react";
import { CgProfile } from "react-icons/cg";
const Chatmessage = (props) => {
  const { name, message } = props;
  return (
    <div className="mb-[10px]">
      <div className="flex ">
        <CgProfile size={30} className="md:mt-2" />
        <p className="mx-1 mt-2 text-[14px] font-bold ">{name}</p>
        <p className="mt-2 mx-1 text-[14px] ">Hello{message}</p>
      </div>
    </div>
  );
};

export default Chatmessage;
