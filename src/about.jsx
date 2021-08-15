import { NavBar } from "./navbar";
import { HeaderText } from "./header-text";
import pic from "./resources/pic1.png";
import { useEffect, useRef } from "react";
import { Links } from "./links";
import { Icon } from "@iconify/react";

export const About = () => {
  if (!localStorage.getItem("imgData")) {
    localStorage.setItem("imgData", pic);
  }
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
    <div className="bg-secondary">
      <NavBar active="About" />
      <div className="absolute left-1/6 right-1/12 top-24 w-2/3">
        <HeaderText text="about myself" />
        <div className="relative lg:grid lg:grid-cols-2 flex flex-col mt-16 w-full mb-36">
          <div className="relative lg:justify-self-end lg:mr-32 mr-10 self-center">
            <div className="border-3 relative rounded-xl inline-block z-10 border-primary lg:h-profile lg:w-profile h-profile-sm w-profile-sm" />
            <img
              src=""
              ref={picRef}
              alt=""
              className="lg:h-profile lg:w-profile h-profile-sm w-profile-sm object-cover absolute"
              style={{
                top: "15px",
                left: "15px",
                borderRadius: "0.75rem",
                border: "solid #4D6674",
              }}
            ></img>
          </div>
          <div className="font-open-sans font-normal sm:text-base text-sm mt-15 lg:m-0">
            I'm an undergrad at{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
                display: "inline",
              }}
            >
              UC Berkeley
            </span>{" "}
            studying Computer Science and Data Science with a concentration in
            Applied Mathematics.
            <br></br>
            <br></br>I'm a producer, mogul skier, and ginger beer fan. I enjoy
            building things and watching them work. From beautifully simple UIs,
            to complex backend infrastructures, I love working the{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
                display: "inline",
              }}
            >
              full stack
            </span>
            .<br></br>
            <br></br>When I'm not working, I'm usually either playing poker,
            watching shows, learning a new framework, or playing the piano.
            <Links />
          </div>
        </div>
        <div className="relative lg:grid lg:grid-cols-2 mt-16 w-full mb-36 justify-items-start">
          <HeaderText text="my stack" justifyEnd={true} />
          <div
            className="grid sm:grid-cols-4 grid-cols-2 sm:text-base text-sm font-open-sans font-light gap-x-6 justify-items-start"
            style={{ alignItems: "flex-end", paddingTop: "1.5rem" }}
          >
            {Object.entries(stack).map(([type, entries]) => (
              <div key={type} className="grid grid-rows-6 sm:mb-0 mb-8">
                <h6 className="font-semibold">
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
                      display: "inline",
                    }}
                  >
                    {type}
                  </span>
                </h6>
                <br></br>
                {entries.map((entry) => (
                  <p key={entry} className="font-light">
                    {entry}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:grid lg:grid-cols-2 mt-16 w-full mb-32 justify-items-start">
          <HeaderText text="contact me" justifyEnd={true} />
          <div className="font-open-sans transform scale-90 sm:scale-100 origin-left md:transform-none font-light flex pt-6 gap-x-2">
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
