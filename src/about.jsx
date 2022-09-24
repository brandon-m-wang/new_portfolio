import { NavBar } from "./navbar";
// import pic from "./resources/pic1.png";
// import { useEffect, useRef } from "react";
// import { Links } from "./links";

export const About = () => {
  // if (!localStorage.getItem("imgData")) {
  //   localStorage.setItem("imgData", pic);
  // }
  // const picRef = useRef();
  // useEffect(() => {
  //   picRef.current.src = localStorage.getItem("imgData");
  // }, [picRef]);

  // const stack = {
  //   Frontend: ["React.js", "TypeScript", "TailwindCSS", "Cypress"],
  //   DB: ["PostgreSQL", "Redis", "Firebase", "MongoDB"],
  //   Backend: ["Golang", "Express", "Node.js"],
  //   DevOps: ["GitLab", "Docker", "Jira"],
  //   Languages: ["Python", "C/C++", "Java"],
  // };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="lg:w-card lg:h-card h-card-m md:w-card-m sm:w-card-sm w-card-tn flex bg-eggshell self-center">
        <div className="w-full h-full flex flex-col relative md:pb-14 pb-8">
          <NavBar active="About" />
          <h1 className="mb-5 text-2xl mt-14 ml-14 w-1/6">About</h1>
          <div className="flex flex-1 h-full md:text-base text-sm p-14 pt-0 pb-0 justify-start flex-col left-1/8 top-2/7 overflow-scroll">
            I'm a 2nd year at UC Berkeley studying Computer Science and
            Statistics.
            <br></br>
            <br></br>I teach, I ski, and I do table tennis at Cal TTC.<br></br>
            <br></br>I'll be at Citadel in NYC for the fall.
            <br></br>
            <br></br>
            <i>wangb [at] berkeley.edu</i>
          </div>
        </div>
      </div>
    </div>
  );
};
//   return (
//     <div className="bg-secondary">
//       <NavBar active="About" />
//       <div className="absolute left-1/6 right-1/12 top-24 w-2/3">
//         <HeaderText text="about myself" />
//         <div className="relative lg:grid lg:grid-cols-2 flex flex-col mt-16 w-full mb-36">
//           <div className="relative lg:justify-self-end lg:mr-32 mr-10 self-center">
//             <div className="relative rounded-xl inline-block z-10 border-primary border-3 lg:h-profile lg:w-profile h-profile-sm w-profile-sm" />
//             <img
//               src={pic}
//               alt=""
//               className="lg:h-profile lg:w-profile h-profile-sm w-profile-sm object-cover absolute"
//               style={{
//                 top: "15px",
//                 left: "15px",
//                 borderRadius: "0.75rem",
//                 border: "solid #4D6674",
//                 borderWidth: "3px",
//               }}
//             ></img>
//           </div>
//           <div className="font-open-sans font-normal sm:text-base text-sm mt-15 lg:m-0">
//             I'm an undergrad at{" "}
//             <span
//               style={{
//                 background:
//                   "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
//                 display: "inline",
//               }}
//             >
//               UC Berkeley
//             </span>{" "}
//             studying Computer Science and Data Science.
//             <br></br>
//             <br></br>I'm a 2nd year UC Berkeley. I ski, I do table tennis @ Cal
//             TTC, and I play the piano. I'm interested in quantitative finance and low-level distributed systems.<br></br>
//             <br></br>I'm working at{" "}
//             <span
//               style={{
//                 background:
//                   "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
//                 display: "inline",
//               }}
//             >
//               NVIDIA
//             </span>{" "}
//             on the NGC AI Infrastructure Team. Writing in Go, Bash and working extensively with Alpine images in Docker.
//             <br></br>
//             <br></br>I teach a{" "}
//             <a
//               className="text-primary underline"
//               href="https://cs198-75.org/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               course
//             </a>{" "}
//             sponsored by Professor Josh Hug in Evans 60 every Monday.
//             <Links />
//           </div>
//         </div>
//         <div className="relative lg:grid lg:grid-cols-2 mt-16 w-full mb-36 justify-items-start">
//           <HeaderText text="the stack" justifyEnd={true} />
//           <div
//             className="grid sm:grid-cols-3 grid-cols-2 sm:text-base text-sm font-open-sans font-light gap-x-6 gap-y-6 justify-items-start"
//             style={{ alignItems: "flex-end", paddingTop: "1.5rem" }}
//           >
//             {Object.entries(stack).map(([type, entries]) => (
//               <div key={type} className="grid grid-rows-6 sm:mb-0 mb-8">
//                 <h6 className="font-semibold">
//                   <span
//                     style={{
//                       background:
//                         "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
//                       display: "inline",
//                     }}
//                   >
//                     {type}
//                   </span>
//                 </h6>
//                 <br></br>
//                 {entries.map((entry) => (
//                   <p key={entry} className="font-light">
//                     {entry}
//                   </p>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative lg:grid lg:grid-cols-2 mt-16 w-full mb-32 justify-items-start">
//           <HeaderText text="contact me" justifyEnd={true} />
//           <div className="font-open-sans transform scale-90 sm:scale-100 origin-left md:transform-none font-light flex pt-6 gap-x-2">
//             <a
//               rel="noopener noreferrer"
//               href="mailto:wangb@berkeley.edu"
//               target="_blank"
//             >
//               <Icon
//                 onMouseEnter={(e) => (e.target.style.color = "#ffc296")}
//                 onMouseLeave={(e) => (e.target.style.color = "#4D6674")}
//                 icon="fluent:mail-16-filled"
//                 color="#4D6674"
//                 style={{ fontSize: "1.5rem" }}
//               />
//             </a>
//             <p>
//               <span className="font-semibold">Email me: </span>{" "}
//               wangb@berkeley.edu
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
