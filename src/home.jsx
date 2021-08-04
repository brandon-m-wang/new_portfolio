import { NavBar } from "./navbar";
import { Icon } from "@iconify/react";

export const Home = () => {
  const highlightColor = "#ffc296";

  return (
    <div className="w-screen h-screen bg-secondary">
      <NavBar active={"Home"} />
      <div className="flex flex-col space-y-4 fixed left-1/8 top-2/7">
        <h3 className="text-2.5xl font-open-sans font-semibold">hi, i'm</h3>
        <h1 className="text-7xl mt-0 -ml-1 font-bold font-futura text-primary">
          Brandon Wang,
        </h1>
        <h3 className="text-2.5xl font-open-sans font-semibold">
          a scroller placeholder.
        </h3>
        <div className="flex flex-row space-x-8 pt-8 items-center">
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/brandonwan.gg/"
            target="_blank"
          >
            <Icon
              onMouseEnter={(e) => (e.target.style.color = highlightColor)}
              onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
              icon="ant-design:instagram-filled"
              color="#4D6674"
              style={{ fontSize: "1.82rem" }}
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/brandon-m-wang"
            target="_blank"
          >
            <Icon
              onMouseEnter={(e) => (e.target.style.color = highlightColor)}
              onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
              icon="akar-icons:linkedin-fill"
              color="#4D6674"
              style={{ fontSize: "1.5rem" }}
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://open.spotify.com/artist/4yd3Sjs98mo2coBsK1wpPN"
            target="_blank"
          >
            <Icon
              onMouseEnter={(e) => (e.target.style.color = highlightColor)}
              onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
              icon="akar-icons:spotify-fill"
              style={{ fontSize: "1.5rem" }}
              color="#4D6674"
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/brandon-m-wang"
            target="_blank"
          >
            <Icon
              onMouseEnter={(e) => (e.target.style.color = highlightColor)}
              onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
              icon="akar-icons:github"
              style={{ fontSize: "1.5rem" }}
              color="#4D6674"
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://gitlab.com/brandonmwang"
            target="_blank"
          >
            <Icon
              onMouseEnter={(e) => (e.target.style.color = highlightColor)}
              onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
              icon="fa-brands:gitlab"
              style={{ fontSize: "1.5rem" }}
              color="#4D6674"
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="mailto:wangb@berkeley.edu"
            target="_blank"
          >
            <Icon
              onMouseEnter={(e) => (e.target.style.color = "#ffc296")}
              onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
              icon="dashicons:email"
              color="#4D6674"
              style={{ fontSize: "2.1rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
