import { Link } from "react-router-dom";

export const NavBar = ({ active }) => {
  return (
    <div className="fixed bg-secondary z-20 w-full h-16 md:h-auto md:w-auto justify-end md:bg-transparent flex md:flex-col gap-x-2 sm:gap-x-5 md:gap-x-0 items-end md:right-12 md:pr-0 pr-3 md:top-9 pt-3 md:pt-0 pb-5 md:pb-0 text-right space-y-0.5 select-none text-sm sm:text-base lg:text-lg">
      <h6
        className="font-open-sans"
        onMouseOver={(e) => (e.target.style.color = "#597788")}
        onMouseOut={(e) => (e.target.style.color = "")}
      >
        <Link to="/">
          {active === "Home" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-semibold text-primary"
            >
              home
            </span>
          ) : (
            "home"
          )}
        </Link>
      </h6>
      <h6
        className="font-open-sans"
        onMouseOver={(e) => (e.target.style.color = "#597788")}
        onMouseOut={(e) => (e.target.style.color = "")}
      >
        <Link to="/about">
          {active === "About" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-semibold text-primary"
            >
              about
            </span>
          ) : (
            "about"
          )}
        </Link>
      </h6>
      <h6
        className="font-open-sans"
        onMouseOver={(e) => (e.target.style.color = "#597788")}
        onMouseOut={(e) => (e.target.style.color = "")}
      >
        <Link to="/projects">
          {active === "Projects" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-semibold text-primary"
            >
              projects
            </span>
          ) : (
            "projects"
          )}
        </Link>
      </h6>
      <h6
        className="font-open-sans"
        onMouseOver={(e) => (e.target.style.color = "#597788")}
        onMouseOut={(e) => (e.target.style.color = "")}
      >
        <Link to="/work">
          {active === "Work" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-semibold text-primary"
            >
              work
            </span>
          ) : (
            "work"
          )}
        </Link>
      </h6>
      <h6
        className="font-open-sans"
        onMouseOver={(e) => (e.target.style.color = "#597788")}
        onMouseOut={(e) => (e.target.style.color = "")}
      >
        <Link to="/snaps">
          {active === "Snaps" ? (
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 65%, #FFD0AE 65%)",
                display: "inline",
              }}
              className="font-semibold text-primary"
            >
              snaps
            </span>
          ) : (
            "snaps"
          )}
        </Link>
      </h6>
    </div>
  );
};
