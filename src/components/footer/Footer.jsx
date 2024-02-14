import React from "react";
import Rectangle from "../../assets/Rectangle 37.png";
import Frame84 from "../../assets/Frame 84.png";
import logo from "../../assets/footerlogo.png";
import SocialMedia from "./SocialMedia";
import Titles from "./Titles";

const Footer = () => {
  const groupTitle = [
    {
      title: "Title",
      subtitles: ["subtitle1", "subtitle1", "subtitle1", "subtitle1"],
    },
    {
      title: "Title",
      subtitles: ["subtitle2", "subtitle2", "subtitle2", "subtitle2"],
    },
    {
      title: "Title",
      subtitles: ["subtitle3", "subtitle3", "subtitle3", "subtitle3"],
    },
  ];

  return (
    <div className="flex justify-center bg-white">
      <div className="navBarPadding containerDiv flex flex-col justify-between px-5 py-3  bg-[#0059BC] max-h-[451px] text-[#FFFFFF]">
        <div className="flex justify-between py-[65px]">
          <div className="flex flex-col justify-between gap-6 max-w-[470px]">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p className="hidden min-[480px]:inline text-wrap text-[16px] font-[400]">
                Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
                aliquam neque.
              </p>
            </div>
            <div className="relative max-w-[407px] h-[38px] min-w-[275px]">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-full"
              />
              <button className="absolute top-0 right-0">
                <img src={Frame84} alt="" />
              </button>
            </div>
          </div>

          <Titles groupTitle={groupTitle} />
        </div>
        <div>
          <img src={Rectangle} alt="Rectangle" />
        </div>
        <div className="flex justify-between items-center text-[12px] min-[480px]:text-[14px] min-[768px]:text-[20px] font-[400] my-5">
          <div>
            <a href="mailto:contact@nttdata.com">contact@nttdata.com</a>
          </div>
          <div>
            <p>+3 9876 765 444</p>
          </div>
          <div className="hidden min-[480px]:inline">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
