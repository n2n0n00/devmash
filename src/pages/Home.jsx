import { Button, Carousel } from "../components";
import { logo } from "../assets/index";

const Home = () => {
  return (
    <div className="home_gradient h-full w-full">
      <div className="w-full flex flex-row justify-between px-[12%] pt-7 max-[820px]:p-5 ">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} />
          <p className="logo">DevMash</p>
        </div>
        <div>
          <Button text="Start A Project?" />
        </div>
      </div>

      <div className="m-10 py-[14%] home_bg max-[820px]:my-10 max-[820px]:mx-0">
        <div className="flex flex-col justify-center">
          <p className="h2 w-[52%] ml-[10%] max-[820px]:w-full max-[820px]:m-0">
            Elevated Experiences Through Seamless Web Design
          </p>
        </div>
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
