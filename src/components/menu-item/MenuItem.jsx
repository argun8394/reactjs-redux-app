import { useState, useEffect } from "react";
import hoverimg from "../../assets/hoverimg.png";
import arrow from "../../assets/expand_more (3).png";

const MenuItem = () => {
  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showImg, setShowImg] = useState(false);

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
    <div className="flex justify-between gap-[2px] relative text-[12px] font-[500] w-full">
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
          className="flex justify-center items-center gap-2 cursor-pointer  "
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
        <ul className="absolute flex flex-col justify-center items-center right-[-20px] pr-2 top-8 bg-[#F4F5F6] w-[92px] h-[92px]">
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
            <div className="flex gap-10 ">
              <div className="flex flex-col gap-3">
                <h2>Header</h2>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h2>Header</h2>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
                <p>Title</p>
              </div>
            </div>
            <img src={hoverimg} alt="" className="w-[70%] h-[240px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
