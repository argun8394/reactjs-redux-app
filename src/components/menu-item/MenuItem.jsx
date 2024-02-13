import React from "react";
import { useState, useEffect } from "react";

const MenuItem = () => {
  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        <span key={index} className="text-clip text-nowrap">
          {item}
        </span>
      ))}
      {menuItems.length > 6 && windowWidth <= 768 && (
        <button className="" onClick={() => setShowMore(!showMore)}>
          More
        </button>
      )}
      {showMore && (
        <ul className="absolute flex flex-col right-0 top-8">
          {menuItems.slice(6).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
