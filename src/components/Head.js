import { FaBars, FaSearch } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // useEffect(() => {
  //   // make Api call after every key press
  //   // if the difference between   2 api of call is <200ms
  //   //decline the API call
  //   setTimeout(() => {
  //     // getsearchQuery();
  //   });
  // }, [searchQuery]);

  // const getsearchQuery = async () => {
  //   const data = await fetch(SEARCH_API + searchQuery);
  //   const json = await data.json();
  //   setSearchQuery(json);
  //   console.log(json);
  // };

  const dispatch = useDispatch();
  const togglehandler = () => {
    dispatch(toggleMenu());
  };

  // search

  return (
    <div className="w-full h-[80px]  justify-between items-center p-5  text-black cursor-pointer">
      <div className="max-w-[1240px] w-full h-full grid grid-cols-3 ">
        <div className="flex w-[220px] mt-2 ml-[-20px]  ">
          <FaBars onClick={togglehandler} />

          <img
            className="md:w-[100px] w-[100px] h-[60px]  mt-[-20px]  "
            src="https://9to5google.com/wp-content/uploads/sites/4/2017/08/youtube_logo_light.jpg"
            alt=""
          />
        </div>
        {/* search bar  */}
        <div className="flex  bg-gray-300 text-black md:w-[450px] md:h-[32px] w-[140px]  h-[22px] rounded-full mt-2">
          <input
            type="text"
            placeholder="search "
            className="md:w-[400px] md:h-[32px] rounded-l-full px-3 border-2  w-[100px] h-[22px] "
          />
          <FaSearch className="md:mt-3 md:ml-2 mt-2 ml-2 " size={10} />
        </div>
        <ul className=" flex ml-[40px] mt-2 md:ml-[500px] ">
          <li className="md:p-1 md:m-2 mx-1">
            <MdOutlineCreateNewFolder size={20} />
          </li>
          <li className="md:p-1 md:m-2 mx-1">
            {" "}
            <BsBell size={20} />
          </li>
          <li className="md:p-1 md:m-2 mx-1">
            <CgProfile size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
