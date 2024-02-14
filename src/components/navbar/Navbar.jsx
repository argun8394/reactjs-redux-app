import React from "react";
import logo from "../../assets/Frame.png";
import { useState, useEffect } from "react";
import MenuItem from "../menu-item/MenuItem";
import Rectangle from "../../assets/Rectangle 37.png";
import search from "../../assets/Search.png";
import arrow from "../../assets/expand_more (3).png";
import menuIcon from "../../assets/burger-menu-svgrepo-com.svg";
import xIcon from "../../assets/x_icon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const navList = [
    {
      id: 1,
      name: "about us",
    },
    {
      id: 2,
      name: "games",
    },
    {
      id: 3,
      name: "career",
    },
  ];
  const list = [
    {
      title: "Data",
    },
    {
      title: "Users",
    },
    {
      title: "Account",
    },
    {
      title: "Prizes",
    },
  ];

  const handleResize = () => window.innerWidth > 480 && setShow(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="w-full fixed top-0 z-[10] bg-[#fff]">
      <div className="navBarPadding containerDiv flex flex-col justify-around min-[480px]:flex min-[480px]:flex-row mx-auto min-[480px]:justify-between  h-[148px] min-[480px]:h-[80px]  gap-1 min-[480px]:items-center ">
        <div className="flex justify-between ">
          {!show && <img className="h-[24px]" src={logo} alt="logo" />}
          {show && (
            <ul
              className="flex gap-3 xs:gap-6"
              // onClick={(e) => e.stopPropagation()}
            >
              {navList.map((item) => (
                <li
                  key={item.id}
                  className="uppercase font-medium hover:text-third duration-300 font-openSans lineAnimate"
                >
                  <a href="#" onClick={() => setShow(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div
            className="hamburgerIcon flex flex-col gap-[2px] min-[480px]:hidden justify-center h-[25px]"
            onClick={() => setShow(!show)}
          >
            {!show ? (
              <img src={menuIcon} alt="menuIcon" />
            ) : (
              <img src={xIcon} alt="xIcon" />
            )}
          </div>
        </div>
        <div className="flex w-full">
          <div className="relative flex border-[1px] rounded border-[#89919A] w-full  hover:border-[#30387c] hover:border-[3px]">
            <input type="text" className="w-full" placeholder="Search..." />
            <div className="hidden min-[480px]:inline  max-w-[132px] min-w-[120px]">
              <div className="relative flex flex-col items-center w-full h-[40px]">
                <button
                  onClick={(e) => setIsOpen(!isOpen)}
                  className="z-20 rounded-r-[4px] w-full h-[40px] gap-[2px] bg-[#F4F5F6] px-[2px] min-[678px]:px-2 flex items-center justify-between font-[400] text-[14px] tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white "
                >
                  <span>{!isOpen ? "Categories" : selectedCategory}</span>
                  <img
                    src={arrow}
                    alt="arrow"
                    className={`${!isOpen ? "" : "transform rotate-180"} `}
                  />
                </button>
                {isOpen && (
                  <div className="z-20 bg-[#00254F] opacity-100 absolute top-11 flex flex-col items-start p-2 w-[156px] rounded-[4px]">
                    {list.map((item, i) => (
                      <div
                        className="flex w-full justify-between hover:bg-[#0059BC] cursor-pointer p-1"
                        key={i}
                        onClick={() => handleCategorySelect(item.title)}
                      >
                        <h3 className="font-[400] text-[14px] text-[#FFFFFF]">
                          {item.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className=" min-[480px]:ml-2 min-[480px]:inline bg-[#0059BC] max-w-[110px] min-w-[90px] h-[40px] rounded-[4px] text-white">
            <div className="flex justify-center items-center">
              <img src={search} alt="search" />
            </div>
          </button>
        </div>
      </div>
      <div className=" flex w-full justify-center items-center ">
        <img src={Rectangle} alt="Rectangle" className="containerDiv" />
      </div>
      <div className="navBarPadding containerDiv hidden min-[480px]:flex mx-auto justify-start h-[65px] gap-4 items-center bg-[#fff]">
        <MenuItem />
      </div>
    </div>
  );
};

export default Navbar;
