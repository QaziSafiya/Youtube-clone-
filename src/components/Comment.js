import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiLocationArrow1 } from "react-icons/ci";
const Commentdata = [
  {
    name: "Safiya Qazi",
    text: "lorem Lorem  reprehenderit provident ",
    replies: [
      {
        name: "Safiya Qazi",
        text: "lorem Lorem  reprehenderit provident ",
        replies: [
          {
            name: "Safiya Qazi",
            text: "lorem Lorem  reprehenderit provident ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Safiya Qazi",
    text: "lorem Lorem  reprehenderit provident ",
    replies: [
      {
        name: "Safiya Qazi",
        text: "lorem Lorem  reprehenderit provident ",
        replies: [
          {
            name: "Safiya Qazi",
            text: "lorem Lorem reprehenderit provident ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Safiya Qazi",
    text: "lorem Lorem  reprehenderit provident ",
    replies: [
      {
        name: "Safiya Qazi",
        text: "lorem Lorem  reprehenderit provident ",
        replies: [],
      },
    ],
  },
  {
    name: "Safiya Qazi",
    text: "lorem Lorem  reprehenderit provident ",
    replies: [
      {
        name: "Safiya Qazi",
        text: "lorem Lorem  reprehenderit provident ",
        replies: [],
      },
      {
        name: "Safiya Qazi",
        text: "lorem Lorem  reprehenderit provident ",
        replies: [],
      },
    ],
  },
  {
    name: "Safiya Qazi",
    text: "lorem Lorem  reprehenderit provident ",
    replies: [
      {
        name: "Safiya Qazi",
        text: "lorem Lorem  reprehenderit provident ",
        replies: [],
      },
    ],
  },
];

const Commentcontainer = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className=" max-w-[970px] h-[55px]  ">
      <div className=" flex md:w-full  w-[330px] h-full bg-slate-200  md:ml-[170px] ml-[-30px]  md:pl-2 md:pt-1 rounded-lg m-1  mt-[30px]">
        <CgProfile size={30} className="md:mt-2" />
        <div className="relative ">
          <p className="ml-[-180px]">{name}</p>
          <p className=" ">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Commentlist = ({ Comments }) => {
  return Comments.map((comment) => (
    <div className="m-3  ">
      <Commentcontainer data={comment} />
      <div className="pl-4 ml-[170px]  m-2 w-[900px] ">
        <div className="md:ml-[-170px] ml-[-188px] ">
          <p className="md:ml-[-700px] text-gray-600 flex ">Replies |</p>
          <Commentcontainer data={comment} />
          <Commentcontainer data={comment} />
          <Commentcontainer data={comment} />
          <Commentcontainer data={comment} />
          <Commentcontainer data={comment} />

          {/* <Commentlist Comments={comment.replies} /> */}
        </div>
      </div>
    </div>
  ));
};
const Comment = () => {
  const [show, setShow] = useState(false);
  const handleshow = () => {
    setShow(!show);
  };
  const [livechat, setLivechat] = useState("");
  return (
    <div className="m-5 p-2">
      <div className=" text-black" onClick={handleshow}>
        <h1 className="font-bold text-2xl z-20 flex justify-start  md:mt-2 mt-5 md:ml-[170px] -ml-3">
          Comments:
        </h1>
        <div className=" mb-[80px]  h-[50px] w-[330px]  flex md:hidden ml-[-20px] shadow-md  rounded-md">
          <form
            action=""
            className="absolute flex w-[300px] rounded-md "
            onSubmit={(e) => {
              e.preventDefault();
              console.log("live messages", livechat);

              setLivechat("");
            }}
          >
            <input
              type="text"
              placeholder=" Comments"
              className="md:w-[390px] w-[300px] py-4 h-[50px]  "
              value={livechat}
              onChange={(e) => setLivechat(e.target.value)}
            />
            <CiLocationArrow1 size={30} className="md:ml-[-10px]  mt-4" />
          </form>
        </div>
      </div>
      {show && <Commentlist className="py-1" Comments={Commentdata} />}
    </div>
  );
};

export default Comment;
