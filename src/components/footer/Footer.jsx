import React from "react";
import Rectangle from "../../assets/Rectangle 37.png";
import Frame84 from "../../assets/Frame 84.png";
import logo from "../../assets/footerlogo.png";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="navBarPadding containerDiv flex flex-col justify-between px-5 py-3 w-[1440px]  bg-[#0059BC] h-[401px] text-[#FFFFFF]">
        <div className="flex justify-between py-[65px]">
          <div className="flex flex-col justify-between gap-6 max-w-[470px]">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p className="text-wrap text-[16px] font-[400]">
                Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
                aliquam neque.
              </p>
            </div>
            <div className="relative w-[407px] h-[38px]">
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
          <div className="hidden min-[480px]:flex justify-between align-items-end gap-16">
            <div className="flex flex-col justify-end gap-4 ">
              <h3>Title</h3>
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
            </div>
            <div className="hidden min-[1440px]:flex flex-col justify-end gap-4">
              <h3>Title</h3>
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
            </div>
            <div className="hidden min-[1440px]:flex flex-col justify-end gap-4">
              <h3>Title</h3>
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Rectangle} alt="Rectangle" />
        </div>
        <div className="flex justify-between items-center text-[20px] font-[400]">
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
