import { NavBar } from "./navbar";
import { HeaderText } from "./header-text";
import segmed from "./resources/segmed.png";
import apple from "./resources/apple.png";
import nvidia from "./resources/nvidia.png";
import citadel from "./resources/citadel.jpeg";

export const Work = () => {
  const jobs = [
    {
      company: "Segmed",
      logo: segmed,
      title: "Software Engineering Intern",
      team: "Microservices Architecture",
      date: "may '21 — aug '21",
      tech: ["Go, Redis, TypeScript"],
    },
    {
      company: "NVIDIA",
      logo: nvidia,
      title: "Software Engineering Intern",
      team: "NGC AI Infrastructure",
      date: "jan '22 — apr '22",
      tech: ["C, C++, Docker"],
    },
    {
      company: "Apple",
      logo: apple,
      title: "Software Engineering Intern",
      team: "Apple Cloud Services",
      date: "may '22 — aug '22",
      tech: ["Go, Kubernetes, Python"],
    },
    {
      company: "Citadel (soon)",
      logo: citadel,
      title: "Software Engineering Intern",
      team: "Equities Engineering",
      date: "sept '22 — dec '22",
      tech: ["C++, Distributed Systems"],
    },
  ];

  return (
    <div className="w-full h-full flex justify-center">
      <div className="lg:w-card lg:h-card h-card-m md:w-card-m sm:w-card-sm w-card-tn flex bg-eggshell self-center">
        <div className="w-full h-full flex md:flex-row flex-col relative md:pb-14 md:pt-14 pb-8">
          <NavBar active="Work" />
          <h1 className="mb-5 text-2xl md:mt-0 mt-14 ml-14 w-1/6">
            Experience
          </h1>
          <div className="flex-grow flex text-semi-lg pt-0 pl-14 pr-14 justify-start gap-5 flex-col overflow-auto">
            {jobs.reverse().map((job) => (
              <div className="flex flex-col mb-6 items-stretch items-start w-full">
                <div className="flex sm:flex-row flex-col sm:space-x-4 items-center">
                  <img src={job.logo} alt="" className="h-10 w-10" />
                  <div className="flex flex-col sm:items-start items-center">
                    <h3 className="sm:text-lg text-base">{job.company}</h3>
                    <h6 className="lg:text-sm text-xs">{job.title}</h6>
                  </div>
                  <h3 className="sm:text-sm text-xs self-center text-center sm:text-right flex-grow leading-tight">
                    <i
                      className="lg:text-base text-xs"
                      style={{
                        display: "inline",
                      }}
                    >
                      {job.team}
                    </i>
                    <br />
                    {job.date}
                  </h3>
                </div>
                <div className="pl-14 pt-4 -mb-4 text-xs">
                  {job.tech.map((lang) => (
                    <span>{lang}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div className="bg-secondary">
//       <NavBar active={"Work"} />
//       <div className="absolute left-1/6 right-1/12 top-24 lg:w-2/3 w-auto">
//         <HeaderText text="employment" />
//         <div className="mb-32">
//           {jobs.reverse().map((job) => (
//             <div className="flex flex-col mt-10 font-open-sans sm:items-stretch items-center lg:w-2/3 w-5/6 space-y-10">
//               <div className="flex sm:flex-row flex-col sm:space-x-4 items-center">
//                 <img src={job.logo} alt="" className="h-12 w-12" />
//                 <div className="flex flex-col sm:items-start items-center">
//                   <h3 className="font-semibold sm:text-xl text-lg">
//                     {job.company}
//                   </h3>
//                   <h6 className="lg:text-base text-xs">{job.title}</h6>
//                 </div>
//                 <h3 className="sm:text-lg text-xs sm:self-start self-center text-center sm:text-right flex-grow leading-tight">
//                   <i
//                     style={{
//                       background:
//                         "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
//                       display: "inline",
//                     }}
//                   >
//                     {job.date}
//                   </i>
//                   <br />
//                   <i
//                     className="lg:text-base text-xs"
//                     style={{
//                       display: "inline",
//                     }}
//                   >
//                     {job.team}
//                   </i>
//                 </h3>
//               </div>
//               <ul className="lg:ml-16 sm:text-semi-sm text-xs space-y-2">
//                 {job.description.map((point) => (
//                   <li>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
