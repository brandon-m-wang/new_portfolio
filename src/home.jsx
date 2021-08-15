import { NavBar } from "./navbar";
import { Links } from "./links";
import ReactRotatingText from "react-rotating-text";
import "./scroller.css";

export const Home = () => {
  return (
    <div className="w-full h-full bg-secondary">
      <NavBar active="Home" />
      <div className="flex flex-col space-y-4 absolute left-1/8 top-2/7">
        <h3 className="sm:text-2.5xl text-1.5xl font-open-sans font-semibold">
          hi, i'm
        </h3>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-0 -ml-1 font-bold mr-10 font-futura text-primary">
          Brandon Wang,
        </h1>
        <div className="font-open-sans font-semibold sm:text-2.5xl text-1.5xl">
          <ReactRotatingText
            items={[
              "a driven developer.",
              "a weekend musician.",
              "a hip-hop aesthete.",
              "an introspective.",
              "a low-key insomniac.",
              "a red bull guzzler.",
            ]}
            deletingInterval={35}
          />
        </div>
        <Links />
      </div>
    </div>
  );
};
