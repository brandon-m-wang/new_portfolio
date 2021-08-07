import { Icon } from "@iconify/react";

export const Links = () => {
  const highlightColor = "#ffc296";
  return (
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
    </div>
  );
};
