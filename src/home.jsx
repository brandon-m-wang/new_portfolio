import { NavBar } from "./navbar";
import { Links } from "./links";
import ReactRotatingText from "react-rotating-text";
import "./scroller.css";
import pic_sm from "./resources/pic1.png";
import pic from "./resources/pic1copy.png";
import pic_new from "./resources/lesshair.png";

export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="lg:w-card lg:h-card h-card-m md:w-card-m sm:w-card-sm w-card-tn flex bg-eggshell self-center">
        <div className="w-full h-full flex sm:flex-row flex-col-reverse relative">
          <NavBar active="Home" />
          <div className="flex sm:w-1/2 w-full h-full pl-14 sm:pr-0 pr-14 justify-center flex-col left-1/8 top-2/7">
            <h3 className="md:text-5xl sm:text-4xl text-xl">Hi, I'm Brandon</h3>
            <div className="text-primary ml-0.5 md:text-1.25xl sm:text-sm text-xs mt-0">
              Computer Science, Statistics, UC Berkeley
            </div>
            <Links />
          </div>
          <img
            src={pic_new}
            alt=""
            className="lg:w-image md:w-image-m w-image-sm md:h-auto h-image-sm md:self-auto self-center md:rounded-none rounded-full object-cover md:block hidden"
            style={{
              filter: "contrast(110%) grayscale(100%)",
              marginLeft: "auto",
            }}
          ></img>
          <img
            src={pic_new}
            alt=""
            className="md:hidden w-image-sm h-image-sm self-center rounded-full object-right object-cover m-auto sm:mt-auto mt-10"
            style={{
              filter: "contrast(110%) grayscale(100%)",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};
