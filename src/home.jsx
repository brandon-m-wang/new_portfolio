import { NavBar } from "./navbar";

export const Home = () => {
  return (
    <div className="w-screen h-screen bg-secondary">
      <NavBar active={"Home"} />
      <div className="flex flex-col space-y-4 fixed left-1/8 top-2/7">
        <h3 className="text-2.5xl font-open-sans font-semibold">hi, i'm</h3>
        <h1 className="text-6xl mt-0 -ml-1 font-bold font-futura text-primary">
          Brandon Wang,
        </h1>
        <h3 className="text-2.5xl font-open-sans font-semibold">
          a scroller placeholder.
        </h3>
      </div>
    </div>
  );
};
