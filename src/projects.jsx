import { NavBar } from "./navbar";
import { HeaderText } from "./header-text";
import { ProjectFilters } from "./project-filters";
import { calculateSize, Icon } from "@iconify/react";
import { useState } from "react";
import { LinkButton } from "./link-button";
import { ToggleButton } from "./toggle-button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import contextr from "./resources/1.png";
import contextrDemo from "./resources/contextr_demo.gif";
import safeguard from "./resources/2.png";
import graph from "./resources/3.png";
import grassroots from "./resources/4.png";
import parkinsons from "./resources/5.png";
import educe from "./resources/6.png";
import wildfire from "./resources/7.png";
import gitlet from "./resources/8.png";
import gitletDemo from "./resources/gitlet_demo.gif";
import scheme from "./resources/9.png";
import byow from "./resources/10.png";
import tilegame from "./resources/11.png";

export const Projects = () => {
  const projects = [
    {
      title: "contextr.io",
      stack: "jQuery, Firebase, Node.js",
      category: ["all projects", "live site"],
      description:
        "A fully functioning social media suite with posting, liking, commenting, friends, themes, and a wide range of customization built without templating frameworks. Users can send/receive friend requests to make friends, share their favorite out-of-context interactions, and expand their collection of memorable verbal exchanges over time. Complete with an intuitive front-end that organizes large amounts of user/post information and offers many interactive front-facing components like total user likes, number of likes/comments, situational text-post backgrounds, and user notifications.",
      repo: "https://github.com/brandon-m-wang/contextr",
      live: "https://contextr.io/users/brandon",
      thumbnail: contextr,
      demo: contextrDemo,
    },
    {
      title: "Safeguard Seattle",
      stack: "JavaScript, Python, GCP Firestore",
      category: ["all projects", "hackathon"],
      description:
        "A webapp protecting marginalized communities from hate crimes in Seattle through a personalized, interactive heat map. Converts police report excel data to an API endpoint in real-time. Depending on the user's chosen race, ethnicity, gender, sexuality, and religion, the heat map redistributes itself to display the frequency and location of incidents by the user's chosen criteria.",
      repo: "https://github.com/brandon-m-wang/safeguardSEA",
      awards: [
        "1st Place (SunHacks | DS/ML/AI App)",
        "1st Place (SunHacks | Google Cloud App)",
      ],
      thumbnail: safeguard,
    },
    {
      title: "Graph Algorithms Visualizer",
      stack: "React.js, vis.js, Graph3D",
      category: ["all projects", "live site"],
      description:
        "A Visualizer for the process of Djikstra's, A*, Prim's, Kruskal's, and other graph traversal algorithms for the purposes of pathfinding and identifying SPTs and MSTs. Developed with React.js. Inludes a JavaScript Dijkstra's implementation along with a pathfinding variant that implements a tree structure to return shortest traversed path. Utilizes the react-graph-vis, vis-data, vis-network packages from vis.js.",
      repo: "https://github.com/brandon-m-wang/graph-algos-visualizer",
      live: "https://brandonwan.gg/graph-vis/",
      thumbnail: graph,
    },
    {
      title: "Grassroots for Housing",
      stack: "JavaScript, Python",
      category: ["all projects", "hackathon"],
      description:
        "A redlining visualizer to combat racial and economic housing segregation. The platform is aimed at not only helping the economically challenged and displaced to find their next month-to-month living space, but also educating the general population about the geopolitical history and issues and to provide avenues for change.",
      repo: "https://github.com/brandon-m-wang/grassrootshousing",
      awards: ["1st Place (HackTX | Hack for Housing)"],
      thumbnail: grassroots,
    },
    {
      title: "K-NN Parksinson's Classifier",
      stack: "NumPy, Matplotlib",
      category: ["all projects"],
      description:
        "A simple lazy-learning k-NN classifier built from UCI ML repository training data provided by a 2018 comparative analysis of speech processing algorithms led by various researchers in Istanbul. The study the classifier is centered around leveraging signal data taken from simple speech recordings to provide clinically feasible information. Currently ~85% accuracy in Parkinson's classification using a holdout validation scheme.",
      repo: "https://github.com/brandon-m-wang/parkinsonsclassifier",
      thumbnail: parkinsons,
    },
    {
      title: "Gitlet",
      stack: "Java, Make",
      category: ["all projects", "coursework"],
      description:
        "A lite version of GitHub with file content tracking functionality; closely recreates features like git commit, staging, status, log, branch, and remote pushing/pulling from a local development server. Also includes more complex functionality like maintaining related branch commit sequences, merging and resetting, and commit searching. Designed and implemented internal file structures and utilized a wide spread of data structures and object serialization along with JUnit tests.",
      thumbnail: gitlet,
      request: true,
      demo: gitletDemo,
    },
    {
      title: "Educe",
      stack: "React.js, GCP Firestore",
      category: ["all projects", "hackathon"],
      description:
        "A platform designed for connecting benefactors and beneficiaries of old and unused tech for the underpriveleged to gain access to remote learning opportunities.",
      repo: "https://github.com/brandon-m-wang/wildfirewatchems",
      awards: ["Semifinalist (HackGT | Overall)"],
      thumbnail: educe,
    },
    {
      title: "Wildfire Watch",
      stack: "React Native, Python",
      category: ["all projects", "hackathon"],
      description:
        "A mobile application that utilizes NASA satellite heatmap imagery to map out a self-updating wildfire distribution and an algorithm that determines the size and threat levels of certain fires with regards to relative user location. When a user is in dangerous vicinity to a wildfire, the app notifies the user to evacuate. If the app determines that the user is trapped in a fire, it will immediately send messages to first responders about the user's current location.",
      repo: "https://github.com/brandon-m-wang/wildfirewatchems",
      awards: ["Top 8 App (HackATL | Overall)"],
      thumbnail: wildfire,
    },
    {
      title: "Open World Generator",
      stack: "Java, StdDraw",
      category: ["all projects", "coursework"],
      description:
        "A 2D two-player, tile-based open world generation engine. World generation is handled with adjacency list generation in conjunction with graph-based search algorithms to create defined rooms and hallways. The players are able to generate playable maps from a seed with consistency, and interact with the world elements in a combat-based capture the flag environment. Scores, weapons, portals, and other creative mechanics are built in to the game's core functionality.",
      thumbnail: byow,
      request: true,
    },
    {
      title: "Scheme Language Interpreter",
      stack: "Python, Scheme",
      category: ["all projects", "coursework"],
      description:
        "An interpreter for the functional Lisp dialect Scheme which parses Scheme code via lexicographical and syntactical analysis. Lexicographical interpretation is done through the tokenization of input strings. Syntactic analysis is performed through mutually recursive functions for validation. Handles core functionality like define, eval, and map, along with user-defined lambda functions. Also includes list procedures and special conditional forms.",
      thumbnail: scheme,
      request: true,
    },
    {
      title: "2048 Clone",
      stack: "Java, MVC",
      category: ["all projects", "coursework"],
      description:
        "A 2048 clone which accurately recreates fundamental game functionality like move recognition, max tile, board rotation, and tile states. Utilizes the model-view-controller design pattern in which the model represents the game board state, the view being the GUI, and the controller which handles and validates user input.",
      thumbnail: tilegame,
      request: true,
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("all projects");

  return (
    <div className="bg-secondary">
      <NavBar active="Projects" />
      <div className="absolute left-1/6 right-1/12 top-24 w-2/3">
        <HeaderText text="projects" />
        <ProjectFilters selected={selectedFilter} handler={setSelectedFilter} />
        <div className="relative lg:grid lg:grid-cols-1 flex flex-col pt-10 mb-32">
          {projects.map(
            (project) =>
              project.category.includes(selectedFilter) && (
                <div
                  key={project.title}
                  className="relative flex lg:flex-row flex-col items-center gap-x-16 my-10"
                >
                  <div className="relative sm:h-project sm:w-project h-project-sm w-project-sm lg:mr-0 mr-5">
                    <div
                      id={project.title + " frame"}
                      className="border-3 inline-block z-10 flex-shrink-0 rounded-lg border-primary sm:h-project sm:w-project h-project-sm w-project-sm"
                    />
                    <div
                      id={project.title + " loader"}
                      style={{
                        position: "absolute",
                        top: "calc(50% - 50px + 0.75rem)",
                        left: "calc(50% - 50px + 0.75rem)",
                        zIndex: 100,
                      }}
                    >
                      <Loader
                        type="TailSpin"
                        color="#ffc296"
                        radius={0}
                        height={100}
                        width={100}
                        timeout={0}
                      />
                    </div>
                    <img
                      id={project.title}
                      src={project.thumbnail}
                      onLoad={() => {
                        document.getElementById(
                          project.title + " loader"
                        ).style.display = "none";
                        document.getElementById(project.title).style.filter =
                          "none";
                      }}
                      alt=""
                      className="absolute top-3 left-3 sm:h-project sm:w-project h-project-sm w-project-sm border-3 border-primary rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold leading-3 mb-5 lg:mt-0 mt-12 font-open-sans">
                      {project.title}
                      <br className="xl:hidden" />
                      <br className="xl:hidden" />
                      <span
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
                          display: "inline",
                        }}
                        className="xl:float-right text-semi-sm -mt-1 leading-5 font-normal"
                      >
                        {project.stack}
                      </span>
                    </h6>
                    <p className="sm:text-semi-sm text-sm font-open-sans font-normal mb-5">
                      {project.description}
                    </p>
                    {project.awards && (
                      <div className="mb-5">
                        {project.awards.map((award) => (
                          <div key={award} className="flex flex-col mt-1">
                            <div className="flex items-center gap-x-2">
                              <Icon
                                icon="entypo:medal"
                                color="#4D6674"
                                style={{ fontSize: "1.5rem" }}
                              />
                              <h6 className="font-open-sans font-semibold text-sm text-primary">
                                {award}
                              </h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex sm:flex-row flex-col flex-wrap gap-y-2 gap-x-2">
                      {project.demo && (
                        <ToggleButton
                          text="toggle demo"
                          handler={(active) => {
                            if (active) {
                              document.getElementById(project.title).src =
                                project.thumbnail;
                            } else {
                              document.getElementById(
                                project.title + " loader"
                              ).style.display = "block";
                              document.getElementById(
                                project.title
                              ).style.filter = "brightness(50%)";
                              document.getElementById(project.title).src =
                                project.demo;
                            }
                          }}
                        />
                      )}
                      {project.live && (
                        <LinkButton text="live site" link={project.live} />
                      )}
                      {project.repo && (
                        <LinkButton text="repo" link={project.repo} />
                      )}
                      {project.request && (
                        <LinkButton
                          text="request"
                          link={"mailto:wangb@berkeley.edu"}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
