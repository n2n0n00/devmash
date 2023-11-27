import React from "react";

const Works = () => {
  return (
    <div className="mx-[10%] flex flex-col gap-20">
      <div className="flex flex-col">
        <p className="small_blue_p">Our Works</p>
        <h3 className="h3_bold w-[870px]">
          How we can produce work that you are interested in
        </h3>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="small_gray_p">UIUX Design / MOSEOM 2022</p>
          <p className="small_white_p italic">Visit Link</p>
        </div>
        <div className="h-[400px] w-full bg-gray-500" />
      </div>

      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="small_gray_p">UIUX Design / MOSEOM 2022</p>
          <p className="small_white_p italic">Visit Link</p>
        </div>
        <div className="h-[400px] w-full bg-gray-500" />
      </div>
    </div>
  );
};

export default Works;
