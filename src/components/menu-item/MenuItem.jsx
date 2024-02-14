import { useState, useEffect } from "react";
import hoverimg from "../../assets/hoverimg.png";
import arrow from "../../assets/expand_more (3).png";
import Titles from "../shared/Titles";

const MenuItem = () => {
  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showImg, setShowImg] = useState(false);

  const groupTitle = [
    {
      title: "Header",
      subtitles: ["subHeader1", "subHeader1", "subHeader1", "subHeader1"],
    },
    {
      title: "Header",
      subtitles: ["subHeader2", "subHeader2", "subHeader2", "subHeader2"],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    "Menu item",
    "Menu item",
    "Menu item",
    "Menu item",
    "Menu item",
    "Menu item",
    "Menu item",
    "Menu item",
    "Menu item",
  ];

  const displayItems = windowWidth > 768 ? menuItems : menuItems.slice(0, 6);

  return (
    <div className="flex justify-between gap-[2px] relative text-[10px] min-[600px]:text-[12px] font-[500] w-full">
      {displayItems.map((item, index) => (
        <span
          key={index}
          className="text-clip text-nowrap cursor-pointer lineAnimate"
          onClick={() => setShowImg(!showImg)}
        >
          {item}
        </span>
      ))}
      {menuItems.length > 6 && windowWidth <= 768 && (
        <button
          className="flex justify-center items-center gap-2 cursor-pointer mr-[30px] "
          onClick={() => setShowMore(!showMore)}
        >
          More
          <img
            src={arrow}
            alt="arrow"
            className={`${!showMore ? "" : "transform rotate-180"} `}
          />
        </button>
      )}
      {showMore && (
        <ul className="absolute flex flex-col justify-center items-center right-0 pr-2 top-8 bg-[#F4F5F6] w-[92px] h-[92px]">
          {menuItems.slice(6).map((item, index) => (
            <li
              key={index}
              onClick={() => setShowImg(!showImg)}
              className="cursor-pointer bg-[#F4F5F6] text-[#6A6D70] text-[12px] font-[500]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {showImg && (
        <div className="absolute left-0 top-8 w-[100%] p-12 bg-[#F4F5F6]">
          <div className="flex justify-between items-center gap-4 ">
            <Titles groupTitle={groupTitle} textColor="#000000" />

            <img src={hoverimg} alt="hoverimg" className="w-[70%] h-[240px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
