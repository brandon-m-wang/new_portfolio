import { useState } from "react";

export const ToggleButton = ({ text, handler }) => {
  const [active, setActive] = useState(false);
  return active ? (
    <div
      onClick={() => {
        handler(active);
        setActive(!active);
      }}
      className="rounded-full font-futura sm:w-auto w-32 px-5 cursor-pointer select-none text-center text-secondary bg-highlight sm:text-sm text-xs border-2 border-highlight"
    >
      {text}
    </div>
  ) : (
    <div
      onClick={() => {
        handler(active);
        setActive(!active);
      }}
      className="rounded-full font-futura sm:w-auto w-32 px-5 cursor-pointer select-none text-center sm:text-sm text-xs text-primary hover:text-highlight hover:border-highlight border-2 border-primary"
    >
      {text}
    </div>
  );
};
