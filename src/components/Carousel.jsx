import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lightning } from "../assets";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1237,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Let&apos;s build something together!{" "}
            <img src={lightning} className="max-[440px]:w-[8%]" />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Let&apos;s build something together!{" "}
            <img src={lightning} className="max-[440px]:w-[8%]" />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Let&apos;s build something together!{" "}
            <img src={lightning} className="max-[440px]:w-[8%]" />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Let&apos;s build something together!{" "}
            <img src={lightning} className="max-[440px]:w-[8%]" />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Let&apos;s build something together!{" "}
            <img src={lightning} className="max-[440px]:w-[8%]" />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Let&apos;s build something together!{" "}
            <img src={lightning} className="max-[440px]:w-[8%]" />
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
