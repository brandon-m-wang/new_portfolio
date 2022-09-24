import { Icon } from "@iconify/react";
import { NavBar } from "./navbar";

export const Teaching = () => {
  const teaching = [
    {
      title: "Facilitating Lecturer",
      abbr: "CS 198-750",
      name: "Full Stack Development (DeCal), Evans Hall Rm. 60",
      paragraph:
        "I lectured for a 2-unit university accredited full stack development course (DeCal). I led weekly lectures, lab, and OH for 450+ students over 3 semesters. Taught fundamentals of React, Express, Node.js, WebSocket, HTTP, and Git. In order to streamline content creation, I developed a Git-based content management system for TAs.",
    },
    {
      title: "Discussion AI",
      abbr: "CS 70",
      name: "Discrete Mathematics and Probability Theory, Dwinelle Hall Rm. 105",
      paragraph:
        "I taught inductive proofs, graph theory, Markov chains, continuous probability and more to CS 70 students in biweekly discussion sections of 50+ people.",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center">
      <div className="lg:w-card lg:h-card h-card-m md:w-card-m sm:w-card-sm w-card-tn flex bg-eggshell self-center">
        <div className="w-full h-full flex md:flex-row flex-col relative md:pb-14 md:pt-14 pb-8">
          <NavBar active="Teaching" />
          <h1 className="mb-5 text-2xl md:mt-0 mt-14 ml-14 w-1/6">Teaching</h1>
          <div className="flex-grow flex flex-1 h-full md:mb-5 md:p-14 md:pt-0 pl-14 pr-14 md:pb-0 text-semi-lg space-y-4 justify-start flex-col overflow-scroll">
            {teaching.map((course) => (
              <div className="flex sm:flex-row flex-col items-center">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row">
                    <h3 className="sm:text-lg text-base">{course.abbr}</h3>
                  </div>
                  <h6 className="lg:text-sm text-xs">
                    {course.title}
                    {", "}
                    {course.name}
                  </h6>
                  <p className="text-sm mt-3">{course.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
