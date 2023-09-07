import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addlikes } from "../utils/Likes";
const Vediocards = ({ info }) => {
  const dispatch = useDispatch();
  const heartlike = useSelector((store) => store.like.likes);

  const Addlike = () => {
    dispatch(addlikes());
  };
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="md:w-[400px] w-[300px] h-[450px] md:ml-1 ml-[25px] shadow-md md:m-14 m-2 ">
      <img
        className="md:w-[400px] w-[300px] h-[250px] rounded-md"
        src={thumbnails.high.url}
        alt=""
      />
      <div className=" mt-3  ">
        <p className="font-bold text-[15px] overflow-x-hidden">{title}</p>
        <h4 className="font-semibold">{channelTitle}</h4>
      </div>
      <div className="flex m-auto mt-5 ">
        <p className="p-2 mt-4">{statistics.viewCount} views</p>
        <div className="flex ml-[100px]">
          <h1 className="cursor-pointer  text-[12px] mt-3 p-4">
            <AiFillLike size={20} onclick={Addlike} /> {heartlike}
          </h1>
          <h1 className="cursor-pointer  text-[12px] mt-3 p-4">
            <AiFillDislike size={20} onclick={Addlike} />
            {heartlike.length - 1}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Vediocards;
