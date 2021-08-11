import { NavBar } from "./navbar";
import { HeaderText } from "./header-text";
import pic from "./resources/pic1.png";
import { useEffect, useRef } from "react";
import { Links } from "./links";
import { Icon } from "@iconify/react";

export const About = () => {
  localStorage.setItem("imgData", pic);
  const picRef = useRef();
  useEffect(() => {
    picRef.current.src = localStorage.getItem("imgData");
  }, [picRef]);

  const stack = {
    Frontend: ["React.js", "TypeScript", "TailwindCSS", "Cypress"],
    DB: ["PostgreSQL", "Redis", "Firestore"],
    Backend: ["Python", "Golang", "Java", "Node.js"],
    DevOps: ["GitLab", "Docker", "Cron", "Jira"],
  };

  return (
    <div className="w-100 h-100 overflow-visible bg-secondary">
      <NavBar active="About" />
      <div className="absolute left-1/6 right-1/12 top-24 w-2/3">
        <HeaderText text="about myself" />
        <div className="relative grid grid-cols-2 mt-16 w-full mb-36">
          <div className="relative justify-self-end mr-33">
            <div className="border-3 relative rounded-xl z-10 border-primary h-profile w-profile" />
            <img
              src=""
              ref={picRef}
              alt=""
              style={{
                width: "345px",
                height: "362px",
                objectFit: "cover",
                position: "absolute",
                top: "15px",
                left: "23px",
                borderRadius: "0.75rem",
                border: "solid #4D6674",
                filter: "saturate(90%)",
              }}
            ></img>
          </div>
          <div className="font-open-sans font-normal">
            I'm an undergrad at UC Berkeley studying Computer Science and Data
            Science with a concentration in Economics.
            <br></br>
            <br></br>I'm a producer, mogul skier, and ginger beer lover. I enjoy
            building things and watching them in action. From beautifully simple
            UIs, to complex backend infrastructures, I love working the full
            stack.
            <br></br>
            <br></br>When I'm not working, I'm usually either playing poker,
            watching shows, learning a new framework, or playing the piano.
            <Links />
          </div>
        </div>
        <div className="relative grid grid-cols-2 mt-16 w-full mb-36 justify-items-start">
          <HeaderText text="my stack" justifyEnd={true} />
          <div
            className="grid grid-cols-4 font-open-sans font-light gap-x-6 justify-items-start"
            style={{ alignItems: "flex-end", paddingTop: "1.5rem" }}
          >
            {Object.entries(stack).map(([type, entries]) => (
              <div className="grid grid-rows-6">
                <h6 className="font-semibold">{type}</h6>
                <br></br>
                {entries.map((entry) => (
                  <p className="font-light">{entry}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="relative grid grid-cols-2 mt-16 w-full mb-40 justify-items-start">
          <HeaderText text="contact me" justifyEnd={true} />
          <div className="font-open-sans font-light flex items-end gap-x-2">
            <a
              rel="noopener noreferrer"
              href="mailto:wangb@berkeley.edu"
              target="_blank"
            >
              <Icon
                onMouseEnter={(e) => (e.target.style.color = "#ffc296")}
                onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
                icon="fluent:mail-16-filled"
                color="#4D6674"
                style={{ fontSize: "1.5rem" }}
              />
            </a>
            <p>
              <span className="font-semibold">Email me: </span>{" "}
              wangb@berkeley.edu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
