import { Link } from "react-router-dom";

export const NavBar = ({ active }) => {
  return (
    <div className="flex flex-col fixed right-12 top-9 text-right space-y-2">
      <h6 className="font-semibold font-open-sans text-primary">
        <Link to="/">
          {active === "Home" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-bold"
            >
              home
            </span>
          ) : (
            "home"
          )}
        </Link>
      </h6>
      <h6 className="font-semibold font-open-sans text-primary">
        <Link to="/about">
          {active === "About" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-bold"
            >
              about
            </span>
          ) : (
            "about"
          )}
        </Link>
      </h6>
      <h6 className="font-semibold font-open-sans text-primary">
        <Link to="/projects">
          {active === "Projects" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-bold"
            >
              projects
            </span>
          ) : (
            "projects"
          )}
        </Link>
      </h6>
      <h6 className="font-semibold font-open-sans text-primary">
        <Link to="/work">
          {active === "Work" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-bold"
            >
              work
            </span>
          ) : (
            "work"
          )}
        </Link>
      </h6>
    </div>
  );
};
