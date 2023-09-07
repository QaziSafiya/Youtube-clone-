import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_API } from "../utils/constants";
import Vediocards from "./Vediocards";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [vedios, setVedios] = useState([]);

  useEffect(() => {
    getyoutubevedios();
  }, []);
  const getyoutubevedios = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();
    setVedios(json.items);
  };

  return (
    <div className="max-w-[1240px] h-full w-full m-auto ">
      <div className="grid md:grid-cols-3 grid-cols-1">
        {vedios.map((vedio) => (
          <Link to={"/watch?v=" + vedio.id}>
            <Vediocards key={vedio.id} info={vedio} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
