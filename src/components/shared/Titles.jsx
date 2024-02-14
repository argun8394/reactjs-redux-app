import React from "react";

const Titles = ({ groupTitle, textColor }) => {
  return (
    <div
      className={`hidden min-[480px]:flex min-[480px]:flex-col min-[768px]:flex-row  gap-[6vw] justify-between align-items-end min:[480px]-ml-1 text-${textColor}`}
    >
      {groupTitle.map((item, index) => (
        <div
          key={index}
          className="flex min-[768px]:flex-col justify-end gap-3 text-[24px] font-[500]"
        >
          <h3 className=" ">{item.title}</h3>
          {item.subtitles.map((subtitle, i) => (
            <p
              key={i}
              className="hidden min-[768px]:inline text-[20px] font-[400] "
            >
              {subtitle}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Titles;
