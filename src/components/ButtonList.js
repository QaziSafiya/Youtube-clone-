import React from "react";
import Button from "./Button";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const ButtonList = () => {
  const nextslide = () => {
    document.getElementById("slide").scrollLeft += 800;
  };
  const prevslide = () => {
    document.getElementById("slide").scrollLeft -= 800;
  };
  return (
    <div className="flex w-full h-[50px] justify-center items-center ">
      <div
        id="slide"
        className="max-w-[1240px] w-full h-full flex scroll-smooth overflow-x-auto scrollbar-hide m-auto"
      >
        <Button name="All" />
        <Button name="New" />
        <Button name="Hockey" />
        <Button name="Live" />
        <Button name="Cricket" />
        <Button name="Music" />
        <Button name="Java" />
        <Button name="Qwaali" />
        <Button name="Poems" />
        <Button name="Poetry" />
        <Button name="Animation" />
        <Button name="Drama" />
        <Button name="Watched" />
        <Button name="Computer" />
        <Button name="Mixes" />
        <Button name="Music" />
        <Button name="Play" />

        <div
          className="absolute top-[10%] -translate-x-[20px] translate-y-[10%] right-5 text-2xl rounded-full p-2  group hover:bg-black/50 text-black cursor-pointer md:flex hidden"
          onClick={nextslide}
        >
          <BiSolidChevronRight />
        </div>
        <div
          className="absolute top-[10%] -translate-x-[-90px] translate-y-[10%] left-5 text-2xl rounded-full p-2  group hover:bg-black/50 hover:text-black text-white cursor-pointer md:flex hidden "
          onClick={prevslide}
        >
          <BiSolidChevronLeft />
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
