import { NavBar } from "./navbar";
import { HeaderText } from "./header-text";
import rectangle from "./resources/rectangle.png";
import pic from "./resources/pic1.png";
import { useEffect, useRef } from "react";
import { Links } from "./links";

localStorage.setItem("imgData", pic);

export const About = () => {
  const picRef = useRef();
  useEffect(() => {
    picRef.current.src = localStorage.getItem("imgData");
  }, [picRef]);

  return (
    <div className="w-100 h-100 overflow-visible bg-secondary">
      <NavBar active="About" />
      <div className="absolute left-1/6 right-1/12 top-24 w-2/3">
        <HeaderText text="about myself" />
        <div className="relative grid grid-cols-2 mt-16 w-full mb-36">
          <div className="relative justify-self-end mr-32">
            <img
              src={rectangle}
              alt=""
              style={{
                width: "378px",
                height: "362px",
                position: "relative",
                zIndex: "2",
              }}
            ></img>
            <img
              src=""
              ref={picRef}
              alt=""
              style={{
                width: "378px",
                height: "362px",
                objectFit: "cover",
                position: "absolute",
                top: "15px",
                left: "23px",
                borderRadius: "15px",
                border: "solid #4D6674",
                filter: "saturate(90%)",
              }}
            ></img>
          </div>
          <div className="font-open-sans font-normal">
            I'm an undergrad at UC Berkeley studying Computer Science and Data
            Science with a concentration in Economics.
            <br></br>
            <br></br>I'm a lo-fi producer, mogul skier, ginger beer lover, and
            Miata enthusiast. I enjoy building things and watching them in
            action. From beautifully simple UIs, to highly complex backend
            infrastructures, I love working the full stack.
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
            <div className="grid grid-rows-6">
              <h6 className="font-semibold">Frontend</h6>
              <br></br>
              <p>React.js</p>
              <p>TypeScript</p>
              <p>TailwindCSS</p>
              <p>Cypress</p>
            </div>
            <div className="grid grid-rows-6">
              <h6 className="font-semibold">DB</h6>
              <br></br>
              <p>PostgreSQL</p>
              <p>Redis</p>
              <p>Firestore</p>
            </div>
            <div className="grid grid-rows-6">
              <h6 className="font-semibold">Backend</h6>
              <br></br>
              <p>Python</p>
              <p>Golang</p>
              <p>Java</p>
              <p>Node.js</p>
            </div>
            <div className="grid grid-rows-6">
              <h6 className="font-semibold">DevOps</h6>
              <br></br>
              <p>GitLab</p>
              <p>Docker</p>
              <p>Jira</p>
              <p>Cron</p>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 mt-16 w-full mb-40 justify-items-start">
          <HeaderText text="contact me" justifyEnd={true} />
          <div
            className="grid grid-cols-4 font-open-sans font-light gap-x-6 justify-items-start font-semibold"
            style={{ alignItems: "flex-end", paddingTop: "1.5rem" }}
          >
            wangb@berkeley.edu
          </div>
        </div>
      </div>
    </div>
  );
};
