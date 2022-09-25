import { NavBar } from "./navbar";
import { Link } from "react-router-dom";
import ReactRotatingText from "react-rotating-text";
import "./scroller.css";
import pic_sm from "./resources/pic1.png";
import pic from "./resources/pic1copy.png";
import pic_new from "./resources/lesshair.png";

export const Home = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center pb-percent tracking-tight font-copperplate text-1.5xl">
      <div className="border border-gray-800 bg-white relative lg:w-card lg:h-card h-card-m md:w-card-m sm:w-card-sm w-card-tn flex flex-col justify-center items-center leading-5 text-center">
        <div className="absolute top-8 w-full">
          <p className="sm:absolute relative sm:left-8 sm:text-sm text-left text-xs">
            <a href="mailto:brmw@berkeley.edu" rel="noreferrer">
              brmw@berkeley.edu
            </a>
            <br></br>
            512.940.6636
          </p>
          <p className="sm:absolute relative sm:right-8 sm:text-sm text-right text-xs">
            <Link to="/cv" target="_blank" rel="noopener noreferrer">
              Resume/CV
            </Link>
            <br></br>
            <a
              href="https://www.linkedin.com/in/brandon-m-wang"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div>
          <p>Brandon Wang</p>
          <p className="text-sm">UC Berkeley, B.A.</p>
        </div>
        <p className="absolute bottom-8 sm:text-sm text-xs">
          150 W 51st St. New York, NY 10019
        </p>
      </div>
    </div>
  );
};
