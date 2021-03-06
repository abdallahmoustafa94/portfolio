import { Grid, GridColumn } from "semantic-ui-react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMaterialUi } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import Slide from "react-reveal/Reveal";
import Typed from "react-typed";
import { Animated } from "react-animated-css";

const SkillSet = () => {
  return (
    <div className=" w-full flex-1 xs:items-center my-8">
      <div>
        <Typed
          className="text-6xl text-center block mb-8  typed tracking-widest"
          showCursor={false}
          strings={["About My Skills"]}
          typeSpeed={50}
          style={{ zIndex: "9999" }}
        />
      </div>
      <Animated
        animationIn="fadeInUp"
        animationInDuration={2000}
        isVisible={true}
      >
        <div className="w-full xs:hidden sm:hidden md:block">
          <Grid doubling container>
            <Grid.Row columns={5}>
              <Grid.Column>
                <AiFillHtml5 className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <DiCss3 className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <IoLogoJavascript className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <SiTypescript className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaReact className="skills-icons" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <FaVuejs className="skills-icons" />
              </Grid.Column>

              <Grid.Column>
                <FaNpm className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <DiJqueryLogo className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaBootstrap className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <SiTailwindcss className="skills-icons" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <SiMaterialUi className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaAws className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <SiRedux className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaSass className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaGitSquare className="skills-icons" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="lg:hidden md:hidden xs:block sm:block">
          <Grid container>
            <Grid.Row columns={3}>
              <Grid.Column>
                <AiFillHtml5 className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <DiCss3 className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <IoLogoJavascript className="skills-icons" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <SiTypescript className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaReact className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaVuejs className="skills-icons" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <FaNpm className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <DiJqueryLogo className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaBootstrap className="skills-icons" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <SiTailwindcss className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <SiMaterialUi className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaAws className="skills-icons" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column>
                <SiRedux className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaSass className="skills-icons" />
              </Grid.Column>
              <Grid.Column>
                <FaGitSquare className="skills-icons" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Animated>
    </div>
  );
};

export default SkillSet;
