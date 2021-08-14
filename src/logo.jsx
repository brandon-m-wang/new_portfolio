import logo from "./resources/b.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt=""
        className="fixed z-50 w-10 h-10 md:top-9 md:left-12 top-3 left-3"
      />
    </Link>
  );
};
