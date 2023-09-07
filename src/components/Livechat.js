import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Chatslice";
import { Randommessage, randomemoji, randomname } from "../utils/helper";
import { CiLocationArrow1 } from "react-icons/ci";
const Livechat = () => {
  const [livechat, setLivechat] = useState("");
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: randomname(),
          message: Randommessage(13) + randomemoji(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="col-span-3 border-2 shadow-md bg-gray-100 h-[470px] w-[350px] mt-[35px] mx-2 overflow-y-scroll flex flex-col-reverse ">
      {chatmessage.map((c) => (
        <Chatmessage name={c.name} message={c.message} />
      ))}
      <div className="absolute flex ">
        <form
          action=""
          className="absolute flex shadow-md  "
          onSubmit={(e) => {
            e.preventDefault();
            console.log("live messages", livechat);
            dispatch(
              addMessage({
                name: "Safiya Qazi",
                message: livechat,
              })
            );
            setLivechat("");
          }}
        >
          <input
            type="text"
            placeholder=" Chat Messages"
            className="w-[350px] h-[50px] p-4"
            value={livechat}
            onChange={(e) => setLivechat(e.target.value)}
          />
          <CiLocationArrow1
            size={30}
            className="md:ml-[-50px] ml-[-80px] mt-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Livechat;
