import { Link } from "react-router-dom";

export const NavBar = ({ active }) => {
  return (
    <div className="flex flex-col fixed right-12 top-9 text-right space-y-2 select-none">
      <h6
        className="font-open-sans text-lg"
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
        className="font-open-sans text-lg"
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
        className="text-lg font-open-sans"
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
        className="text-lg font-open-sans"
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
        className="font-open-sans text-lg"
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
