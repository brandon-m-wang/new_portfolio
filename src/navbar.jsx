import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const NavBar = ({ active }) => {
  const regColor = "#668394";
  const highlightColor = "#829cab";
  return (
    <div className="absolute h-auto md:w-auto w-full md:-right-10 md:top-0 -top-10 z-10 flex md:flex-col flex-row content-center md:justify-end justify-center bg-transparent md:space-x-0 space-x-4">
      <Link to="/">
        {active === "Home" ? (
          <Icon
            icon="ant-design:home-filled"
            color="white"
            style={{ fontSize: "1.82rem" }}
          />
        ) : (
          <Icon
            onMouseEnter={(e) => (e.target.style.color = highlightColor)}
            onMouseLeave={(e) => (e.target.style.color = regColor)}
            icon="ant-design:home-outlined"
            color={regColor}
            style={{ fontSize: "1.82rem" }}
          />
        )}
      </Link>
      <Link to="/about">
        {active === "About" ? (
          <Icon
            icon="ant-design:profile-filled"
            color="white"
            style={{ fontSize: "1.82rem" }}
          />
        ) : (
          <Icon
            onMouseEnter={(e) => (e.target.style.color = highlightColor)}
            onMouseLeave={(e) => (e.target.style.color = regColor)}
            icon="ant-design:profile-outlined"
            color={regColor}
            style={{ fontSize: "1.82rem" }}
          />
        )}
      </Link>
      <Link to="/projects">
        {active === "Projects" ? (
          <Icon
            icon="ant-design:folder-open-filled"
            color="white"
            style={{ fontSize: "1.82rem" }}
          />
        ) : (
          <Icon
            onMouseEnter={(e) => (e.target.style.color = highlightColor)}
            onMouseLeave={(e) => (e.target.style.color = regColor)}
            icon="ant-design:folder-open"
            color={regColor}
            style={{ fontSize: "1.82rem" }}
          />
        )}
      </Link>
      <Link to="/work">
        {active === "Work" ? (
          <Icon
            icon="ant-design:container-filled"
            color="white"
            style={{ fontSize: "1.82rem" }}
          />
        ) : (
          <Icon
            onMouseEnter={(e) => (e.target.style.color = highlightColor)}
            onMouseLeave={(e) => (e.target.style.color = regColor)}
            icon="ant-design:container-outlined"
            color={regColor}
            style={{ fontSize: "1.82rem" }}
          />
        )}
      </Link>
      <Link to="/teaching">
        {active === "Teaching" ? (
          <Icon
            icon="ant-design:highlight-filled"
            color="white"
            style={{ fontSize: "1.82rem" }}
          />
        ) : (
          <Icon
            onMouseEnter={(e) => (e.target.style.color = highlightColor)}
            onMouseLeave={(e) => (e.target.style.color = regColor)}
            icon="ant-design:highlight-outlined"
            color={regColor}
            style={{ fontSize: "1.82rem" }}
          />
        )}
      </Link>
      <Link to="/notes">
        {active === "Notes" ? (
          <Icon
            icon="ant-design:book-filled"
            color="white"
            style={{ fontSize: "1.82rem" }}
          />
        ) : (
          <Icon
            onMouseEnter={(e) => (e.target.style.color = highlightColor)}
            onMouseLeave={(e) => (e.target.style.color = regColor)}
            icon="ant-design:book-outlined"
            color={regColor}
            style={{ fontSize: "1.82rem" }}
          />
        )}
      </Link>
    </div>
  );
};
