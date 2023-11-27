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
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Lets build something together! <img src={lightning} />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Lets build something together! <img src={lightning} />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Lets build something together! <img src={lightning} />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Lets build something together! <img src={lightning} />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Lets build something together! <img src={lightning} />
          </p>
        </div>
        <div>
          <p className="h4 flex flex-row items-center justify-center gap-3">
            Lets build something together! <img src={lightning} />
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
