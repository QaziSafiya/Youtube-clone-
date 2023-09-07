import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import Livechat from "./Livechat";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
// import { YOUTUBE_VEDIOS_API } from "../utils/constants";
import { addlikes, removelikes } from "../utils/Likes";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  const likes = () => {
    dispatch(addlikes());
  };

  const dislikes = () => {
    dispatch(addlikes());
  };

  const likethumb = useSelector((store) => store.like.likes);
  const [showlivechat, setShowlivechat] = useState(false);
  const livebutton = () => {
    setShowlivechat(!showlivechat);
  };

  return (
    <div className="max-w-[1240px] col-span-6">
      <div className="grid md:grid-cols-2 grid-cols-1  ">
        <div className="">
          <iframe
            className="md:ml-[200px]  md:mt-9 md:w-[960px] md:h-[515px] ml-2  w-[340px] h-[250px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="grid grid-cols-2 shadow-md md:w-[1540px] ">
            <div className="flex md:ml-[900px] mx-4">
              <h1
                className="cursor-pointer  text-[12px] mt-3 p-4"
                onClick={likes}
              >
                <AiFillLike size={20} />
                likes{likethumb.length}
              </h1>
              <h1
                className="cursor-pointer  text-[12px] mt-3 p-4"
                onClick={dislikes}
              >
                <AiFillDislike size={20} />
                dislikes{likethumb.length - 1}
              </h1>
              <h1 className="cursor-pointer  text-[12px] mt-3 p-4">
                <IoIosShareAlt size={20} />
                Share
              </h1>
              <h1 className="cursor-pointer  text-[12px] mt-7">
                <AiOutlineDownload size={20} /> Download
              </h1>
            </div>
            <button
              className="bg-red-500 md:ml-[-570px]  md:w-[100px] w-[50px] rounded-md text-white md:h-[40px] flex justify-center items-center ml-[120px] md:mt-5 mt-8 group hover:scale-75 ease-in-out duration-500 h-[20px] p-5 mx-4"
              onClick={livebutton}
            >
              LIVE
            </button>
          </div>
        </div>
        {showlivechat && (
          <div className="md:ml-[540px] ">
            <Livechat />
          </div>
        )}
      </div>

      <Comment />
    </div>
  );
};

export default Watchpage;
