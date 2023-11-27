import { Button } from "../components";
import { logo } from "../assets/index";

const Home = () => {
  return (
    <div className="home_gradient h-full w-full">
      <div className="w-full flex flex-row justify-between px-[12%] pt-7 ">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} />
          <p className="logo">DevMash</p>
        </div>
        <div>
          <Button text="Start A Project?" />
        </div>
      </div>

      <div className="m-10 home_bg">
        <div className="flex flex-col justify-center">
          <p className="h2 text-right mt-[10%] ml-20 w-[50%]">
            Real Agency With Its Super Digital
          </p>
        </div>

        <div className="flex flex-row justify-center w-[85%] mt-5">
          <p className="small_white_p w-[110px]">
            Let&apos;s start discussing your project
          </p>
        </div>
        <div className="px-[12%] my-[5%]">
          <h1 className="h1">Why Us?</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
