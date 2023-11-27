import { services } from "../constants";

const Services = () => {
  return (
    <div className="m-[10%]">
      <div>
        <p className="small_blue_p">Our Services</p>
      </div>
      <div>
        <h3 className="h3_bold w-[1000px]">
          It&apos;s not about what we make, it&apos;s about how satisfied you
          are with our service
        </h3>
      </div>
      <div className="flex flex-wrap gap-20 w-[100%] mt-[5%] justify-center">
        <p className="graphic">
          Graphic <span className="design">Design</span>
        </p>
        <p className="webflow">Webflow</p>
        <p className="webflow">UIUX Design</p>
        <p className="webflow">Illustration</p>
        <p className="webflow">Motion</p>
        <p className="webflow">3D Design</p>
        <p className="webflow">Brand Identity</p>
      </div>
    </div>
  );
};

export default Services;
