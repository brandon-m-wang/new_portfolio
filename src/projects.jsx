import { NavBar } from "./navbar";
import { HeaderText } from "./header-text";
import { ProjectFilters } from "./project-filters";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { LinkButton } from "./link-button";

export const Projects = () => {
  const projects = [
    {
      title: "contextr.io",
      category: "live",
      description:
        "A fully functioning social media suite with posting, liking, commenting, friends, themes, and a wide range of customization built without templating frameworks. Users can send/receive friend requests to make friends, share their favorite out-of-context interactions, and expand their collection of memorable verbal exchanges over time. Complete with an intuitive front-end that organizes large amounts of user/post information and offers many interactive front-facing components like total user likes, number of likes/comments, situational text-post backgrounds, and user notifications.",
      repo: "https://github.com/brandon-m-wang/contextr",
      live: "https://contextr.io/users/brandon",
      thumbnail: "",
    },
    {
      title: "Safeguard Seattle",
      category: "hackathon",
      description:
        "Protecting marginalized communities from hate crimes in Seattle through a personalized, interactive heat map. Converts police report excel data to an API endpoint in real-time. Depending on the user's chosen race, ethnicity, gender, sexuality, and religion, the heat map redistributes itself to display the frequency and location of incidents by the user's chosen criteria.",
      repo: "https://github.com/brandon-m-wang/safeguardSEA",
      awards: [
        "1st Place (SunHacks | DS/ML/AI App)",
        "1st Place (SunHacks | Google Cloud App)",
      ],
    },
    {
      title: "Graph Algorithms Visualizer",
      category: "live",
      description:
        "Visualizer for the process of Djikstra's, A*, Prim's, Kruskal's, and other graph traversal algorithms for the purposes of pathfinding and identifying SPTs and MSTs. Developed with React.js. Inludes a JavaScript Dijkstra's implementation along with a pathfinding variant that implements a tree structure to return shortest traversed path. Utilizes the react-graph-vis, vis-data, vis-network packages from vis.js.",
      repo: "https://github.com/brandon-m-wang/graph-algos-visualizer",
      live: "https://brandonwan.gg/graph-vis/",
    },
    {
      title: "Grassroots for Housing",
      category: "hackathon",
      description:
        "A redlining visualizer to combat racial and economic housing segregation. The platform is aimed at not only helping the economically challenged and displaced to find their next month-to-month living space, but also educating the general population about the geopolitical history and issues and to provide avenues for change.",
      repo: "https://github.com/brandon-m-wang/grassrootshousing",
      awards: ["1st Place (HackTX | Hack for Housing)"],
    },
    {
      title: "K-NN Parksinson's Classifier",
      description:
        "This is a simple lazy-learning k-NN classifier built from UCI ML repository training data provided by a 2018 comparative analysis of speech processing algorithms led by various researchers in Istanbul. The study the classifier is centered around leveraging signal data taken from simple speech recordings to provide clinically feasible information. Currently ~85% accuracy in Parkinson's classification using a holdout validation scheme.",
    },
    {
      title: "Educe",
      category: "hackathon",
      description:
        "A platform designed for connecting benefactors and beneficiaries of old and unused tech for the underpriveleged to gain access to remote learning opportunities.",
      repo: "https://github.com/brandon-m-wang/wildfirewatchems",
      awards: ["Semifinalist (HackGT | Overall)"],
    },
    {
      title: "Wildfire Watch",
      category: "hackathon",
      description:
        "A mobile application that utilizes NASA satellite heatmap imagery to map out a self-updating wildfire distribution and an algorithm that determines the size and threat levels of certain fires with regards to relative user location. When a user is in dangerous vicinity to a wildfire, the app notifies the user to evacuate. If the app determines that the user is trapped in a fire, it will immediately send messages to first responders about the user's current location.",
      repo: "https://github.com/brandon-m-wang/wildfirewatchems",
      awards: ["Top 8 App (Emory University | Overall)"],
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="w-screen h-screen bg-secondary">
      <NavBar active="Projects" />
      <div className="absolute left-1/6 right-1/12 top-24 w-2/3">
        <HeaderText text="projects" justifyEnd={true} />
        <ProjectFilters selected={selectedFilter} />
        <div className="relative grid grid-cols-1 pt-12 mb-24">
          {projects.map((project) => (
            <div className="relative flex gap-x-16 my-10">
              <div className="border-3 block flex-shrink-0 rounded-lg border-primary h-project w-project" />
              <img
                src={project.thumbnail}
                alt=""
                className="absolute top-4 left-4 h-64"
              />
              <div>
                <h6 className="text-lg font-semibold leading-3 mb-5 font-open-sans">
                  {project.title}
                </h6>
                <p className="text-semi-sm font-light mb-5">
                  {project.description}
                </p>
                {project.awards && (
                  <div className="mb-5">
                    {project.awards.map((award) => (
                      <div className="flex flex-col mt-1">
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
                <div className="flex gap-x-2">
                  {project.repo && (
                    <LinkButton text="repo" link={project.repo} />
                  )}
                  {project.live && (
                    <LinkButton text="view" link={project.live} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
