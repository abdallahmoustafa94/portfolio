import "semantic-ui-css/semantic.min.css";
import Nav from "./components/Nav";
import Particles from "react-particles-js";
import About from "./pages/About";
import Fade from "react-reveal/Fade";
import SkillSet from "./pages/SkillSet";
import "./assets/fonts/bison/Bison-Bold(PersonalUse).ttf";
import Footer from "./components/Footer";
import MyWorks from "./pages/MyWorks";
import ContactMe from "./pages/ContactMe";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Particles
        id="particles-js"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
        params={{
          particles: {
            color: {
              value: "#000",
            },
            opacity: {
              value: 0.4,
              anim: {
                enable: true,
              },
            },
            line_linked: {
              color: {
                value: "#707070",
              },
            },
            move: {
              speed: 3,
            },
            number: {
              value: 50,
            },
            density: {
              enable: true,
              value_area: 1000,
            },
            anim: {
              enable: true,
              speed: 100,
              opacity_min: 0.7,
              sync: false,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
          },
        }}
      />
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <About style={{ zIndex: "50" }} />
          </Route>
          <Route exact path="/skillset">
            <SkillSet style={{ zIndex: "50" }} />
          </Route>
          <Route exact path="/my-works">
            <MyWorks style={{ zIndex: "50" }} />
          </Route>
          <Route exact path="/contact">
            <ContactMe style={{ zIndex: "50" }} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
