import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const SliderProducts = ({
  productSlider,
  products,
  handleClickButton,
  favorites,
  formatter,
  handleShowMoreLine,
  showMoreLine,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="w-full  relative">
      {productSlider && (
        <Swiper
          ref={swiperRef}
          // loop={true}
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation]}
          // onSlideChange={() => console.log("swiper")}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
          }}
          className="w-[100%] xs:w-[85%] relative flex justify-center mb-[106px]"
        >
          {products?.map((item, i) => (
            <SwiperSlide className="" key={i}>
              <div
                key={i}
                className=" w-full min-[768px]:w-[23%] min-[1220px]:w-[24%] p-[13px] border"
              >
                <div className="relative">
                  <Link to="https://nttdata-solutions.com/tr/">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full max-h-[179px]"
                    />
                  </Link>
                  <div
                    className="absolute p-[6px] top-[11px] right-[11px] rounded-[36px] bg-[#FFFFFF]"
                    onClick={() => handleClickButton(item)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_69_181"
                        style={{ marginRight: "spacing" + "em" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_69_181)">
                        <path
                          d="M8.00001 14.2333L7.03334 13.3667C5.91112 12.3556 4.98334 11.4833 4.25001 10.75C3.51668 10.0167 2.93334 9.35822 2.50001 8.77467C2.06668 8.19156 1.76401 7.65556 1.59201 7.16667C1.41957 6.67778 1.33334 6.17778 1.33334 5.66667C1.33334 4.62222 1.68334 3.75 2.38334 3.05C3.08334 2.35 3.95557 2 5.00001 2C5.57779 2 6.12779 2.12222 6.65001 2.36667C7.17223 2.61111 7.62223 2.95556 8.00001 3.4C8.37779 2.95556 8.82779 2.61111 9.35001 2.36667C9.87223 2.12222 10.4222 2 11 2C12.0445 2 12.9167 2.35 13.6167 3.05C14.3167 3.75 14.6667 4.62222 14.6667 5.66667C14.6667 6.17778 14.5807 6.67778 14.4087 7.16667C14.2362 7.65556 13.9333 8.19156 13.5 8.77467C13.0667 9.35822 12.4833 10.0167 11.75 10.75C11.0167 11.4833 10.0889 12.3556 8.96668 13.3667L8.00001 14.2333ZM8.00001 12.4333C9.06668 11.4778 9.94445 10.6582 10.6333 9.97467C11.3222 9.29156 11.8667 8.69733 12.2667 8.192C12.6667 7.68622 12.9445 7.236 13.1 6.84133C13.2556 6.44711 13.3333 6.05556 13.3333 5.66667C13.3333 5 13.1111 4.44444 12.6667 4C12.2222 3.55556 11.6667 3.33333 11 3.33333C10.4778 3.33333 9.99445 3.48044 9.55001 3.77467C9.10557 4.06933 8.80001 4.44444 8.63334 4.9H7.36668C7.20001 4.44444 6.89445 4.06933 6.45001 3.77467C6.00557 3.48044 5.52223 3.33333 5.00001 3.33333C4.33334 3.33333 3.77779 3.55556 3.33334 4C2.8889 4.44444 2.66668 5 2.66668 5.66667C2.66668 6.05556 2.74445 6.44711 2.90001 6.84133C3.05557 7.236 3.33334 7.68622 3.73334 8.192C4.13334 8.69733 4.67779 9.29156 5.36668 9.97467C6.05557 10.6582 6.93334 11.4778 8.00001 12.4333Z"
                          fill={
                            favorites.find((x) => x.id === item.id)
                              ? "red"
                              : "#D9D9D9"
                          }
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-around min-h-[172px]">
                  <h2 className="px-1 w-full font-bold">{item.name}</h2>
                  <p className="px-1 font-[700] w-full h-[24px] text-[#00254F] bg-[#E6EEF8] ">
                    {formatter(item.price)}
                  </p>
                  <h3 className="px-1 h-[22px] font-[500] text-[12px]">
                    Description
                  </h3>
                  <p
                    className={`px-1 font-[400] text-[12px]  ${
                      !showMoreLine[item.id] ? "clapText" : ""
                    }  `}
                  >
                    {item.description}{" "}
                  </p>
                  <span
                    className="font-[500] text-[10px] text-[#0059BC] "
                    onClick={() => handleShowMoreLine(item.id)}
                  >
                    devamını gör
                  </span>
                  <p className="px-1 font-[400] text-[10px]">
                    {item.shippingMethod}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {productSlider && (
        <div className="absolute navBarPadding flex justify-center items-center h-[58px] bottom-[50px]  space-x-2 w-full">
          {[0, 1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full  ${
                index === currentSlide ? "bg-gray-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SliderProducts;
