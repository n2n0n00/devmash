import React from "react";

const CTA = () => {
  return (
    <div className="m-20 flex flex-col items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center justify-center">
        <h1 className="xl_letters">
          Let&apos;s <span className="xl_letters_gradient">Work</span>
        </h1>
        <h1 className="xl_letters flex gap-10">
          Together
          <div className="round_green" />
        </h1>
        <h1 className="xl_letters">
          Let&apos;s <span className="xl_letters_blue">Create.</span>
        </h1>
      </div>
    </div>
  );
};

export default CTA;
