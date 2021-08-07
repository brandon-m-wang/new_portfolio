import logo from "./resources/b.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="" className="fixed w-10 h-10 top-9 left-12" />
    </Link>
  );
};
