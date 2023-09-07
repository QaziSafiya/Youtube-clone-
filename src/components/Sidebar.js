import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return isMenuOpen ? null : (
    <div className="shadow-md bg-white absolute ease-in-out duration-500   h-screen z-10  pl-7 pr-7">
      <div
        className=" col-span-3 
     "
      >
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Vedio</li>
          <li>Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
        <ul>
          <li>Movie</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Dance</li>
        </ul>

        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Movie</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Dance</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
