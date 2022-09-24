import { Logo } from "./logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Projects } from "./projects";
import { Work } from "./work";
import { Snapshots } from "./snapshots";
import { Teaching } from "./teaching";
import { Notes } from "./notes";

export function App() {
  return (
    <Router>
      <Logo />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/teaching">
          <Teaching />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/snaps">
          <Snapshots />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
