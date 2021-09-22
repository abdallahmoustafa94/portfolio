import { Image, Transition } from "semantic-ui-react";
import mypic from "../assets/mypic.JPG";
import Typed from "react-typed";
import { Animated } from "react-animated-css";

import { Grid, Card } from "semantic-ui-react";

const About = () => {
  return (
    <>
      <div className=" w-full flex-1 my-8">
        <div className=" sm:mx-auto">
          <div className="xs:flex xs:flex-col-reverse xs:px-6 md:px-12 lg:flex w-full lg:mx-auto sm:items-center">
            <div className="lg:flex lg:w-1/2  lg:justify-end  lg:ml-32 ">
              <Animated
                animationIn="fadeInUp"
                animationInDuration={2000}
                isVisible={true}
              >
                <div>
                  <span className="text-xl font-bold">HEY! I AM</span>
                  <h1 className="md:text-6xl my-0  font-bold tracking-wider">
                    Abdallah Moustafa
                  </h1>
                  <Typed
                    className="font-medium md:text-3xl tracking-wider"
                    strings={["Frontend Developer"]}
                    typeSpeed={40}
                    showCursor={false}
                  />
                  <p className="md:text-2xl mt-8 font-bold leading-relaxed mb-16 tracking-wider	color-primary">
                    Seasoned and independent frontend developer with 3 years of
                    experience in blending the art of design with skill of
                    programming to deliver an immersive and engaging user
                    experience through efficient website development.
                    <br />
                    Proficient with JS Frameworks, with extensive knowledge of
                    UX and user psychology. Specialized in ReactJs , Vuejs and
                    responsive design.
                  </p>
                </div>
              </Animated>
            </div>

            <div className="lg:flex lg:w-1/2 xs:mx-auto lg:justify-center">
              <Animated
                animationIn="fadeInUp"
                animationInDuration={2000}
                isVisible={true}
              >
                <Image
                  src={mypic}
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "20% 40%",
                  }}
                  className=" rounded-full z-50 border-2 border-white"
                />
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
