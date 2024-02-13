import React from "react";
import logo from "../../assets/Frame.png";
import { useState, useEffect } from "react";
import MenuItem from "../menu-item/MenuItem";
import Rectangle from "../../assets/Rectangle 37.png";
import search from "../../assets/Search.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

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
      title: "Account",
    },
    {
      title: "Prizes",
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

  return (
    <div className="w-full fixed top-0 z-[10] bg-[#fff]">
      <div className="navBarPadding containerDiv flex flex-col justify-around min-[480px]:flex min-[480px]:flex-row mx-auto min-[480px]:justify-between  h-[148px] min-[480px]:h-[80px]  gap-1 min-[480px]:items-center ">
        <div className="flex justify-between">
          {!show && (
            <img
              className="w-[183px] min-[480px]:w-[170px] min-[780px]:w-[183px] min-w-[170px] h-[24px]"
              src={logo}
              alt="logo"
            />
          )}
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
            className="hamburgerIcon block min-[480px]:hidden"
            onClick={() => setShow(!show)}
          >
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="relative flex border-[1px] rounded border-[#89919A] w-full">
            <input
              type="text"
              className="w-full h-[40px] "
              placeholder="Search..."
            />
            <div className=" hidden min-[480px]:inline  w-[156px] ">
              <div className="relative flex flex-col items-center w-full h-[40px] ">
                <button
                  onClick={(e) => setIsOpen(!isOpen)}
                  className="w-[156px] rounded-r-[4px] h-[40px] bg-[#F4F5F6]  flex items-center justify-between font-bold text-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white "
                >
                  Categories
                </button>
                {isOpen && (
                  <div className="bg-blue-400 absolute top-10 flex flex-col items-start p-2 w-full">
                    {list.map((item, i) => (
                      <div
                        className="flex w-full justify-between hover:bg-blue-200 cursor-pointer"
                        key={i}
                      >
                        <h3 className="font-bold">{item.title}</h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className=" min-[480px]:ml-2 min-[480px]:inline bg-[#0059BC] max-w-[110px] min-w-[100px] h-[40px] rounded-[4px] text-white">
            <div className="flex justify-center items-center">
              <img src={search} alt="search" />
            </div>
          </button>
        </div>
      </div>
      {/* <div className="containerDiv flex w-full justify-center items-center ">
        <img src={Rectangle} alt="Rectangle" />
      </div> */}
      <div className="navBarPadding containerDiv hidden min-[480px]:flex mx-auto justify-start h-[65px] gap-4 items-center bg-[#fff]">
        <MenuItem />
      </div>
    </div>
  );
};

export default Navbar;
