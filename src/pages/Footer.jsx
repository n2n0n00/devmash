import React from "react";
import { Button } from "../components/index";

const Footer = () => {
  return (
    <div className="mx-[10%] mt-[10%] flex flex-col gap-20 max-lg:mx-5">
      <div className="flex flex-row max-md:flex-col justify-between items-center max-md:gap-10">
        <div className="flex flex-col gap-10 max-md:items-center max-lg:justify-start">
          <h2 className="w-[80%] footer_xl_text max-md:w-full max-md:text-center">
            Would you like to work with us?{" "}
            <span className="underline max-md:text-center">Let&apos;s! </span>{" "}
            work together
          </h2>
          <Button text="Start a Project?" />
        </div>
        <div className="flex flex-col gap-4 max-md:w-full max-md:text-center">
          <p className="footer_text">
            Babarsari Sleman, No 23 Ruko Biru Kab. Sleman, Kota Yogyakarta{" "}
          </p>
          <div className="flex flex-col gap-1">
            <p className="footer_text">+62 824 - 2637 - 8823</p>
            <p className="footer_text">+62 824 - 2637 - 8823</p>
          </div>
          <p className="footer_text">Walkagency@studio.io</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="footer_text">Dribbble</p>
          <p className="footer_text">Behance</p>
          <p className="footer_text">LinkedIn</p>
          <p className="footer_text">Instagram</p>
          <p className="footer_text">Facebook</p>
        </div>
      </div>
      <div className="mb-12">
        <p className="copyright_p ">© 2022 Walkagency - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
