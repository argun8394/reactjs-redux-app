import React, { useState, useEffect } from "react";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const interval = 3000;
  const slides = [
    {
      imageUrl: slide1,
      altText: "Slide 1",
      title: "Slayt 1 Başlık",
      description: "Slayt 1 Açıklama",
    },
    {
      imageUrl: slide2,
      altText: "Slide 2",
      title: "Slayt 2 Başlık",
      description: "Slayt 2 Açıklama",
    },
    {
      imageUrl: slide3,
      altText: "Slide 3",
      title: "Slayt 3 Başlık",
      description: "Slayt 3 Açıklama",
    },
    {
      imageUrl: slide4,
      altText: "Slide 3",
      title: "Slayt 3 Başlık",
      description: "Slayt 3 Açıklama",
    },
  ];

  useEffect(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    const slider = setTimeout(() => {
      setCurrentSlide(nextSlide);
    }, interval);

    return () => {
      clearTimeout(slider);
    };
  }, [currentSlide, interval, slides.length]);

  return (
    <div className=" relative flex justify-center min-[480px]:pt-[145] pt-[148px] bg-white">
      <div className="containerDiv slideshow relative ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            <img src={slide.imageUrl} alt={slide.altText} />
            {/* <h2>{slide.title}</h2>
          <p>{slide.description}</p> */}
          </div>
        ))}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-gray-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
