import { useState, useEffect, useRef } from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Image, Grid, Card } from "semantic-ui-react";
import Typed from "react-typed";
import projectOne from "../assets/p-1.png";
import projectTwo from "../assets/p-2.png";
import projectThree from "../assets/p-3.png";
import projectFour from "../assets/p-4.png";
import projectFive from "../assets/p-5.png";
import { Animated } from "react-animated-css";

const MyWorks = () => {
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  return (
    <div className=" md:my-24 w-full flex-1">
      <div className="mx-auto">
        <Typed
          className="md:text-5xl xs:text-3xl text-center block  typed tracking-widest"
          showCursor={false}
          strings={["Some of My Works"]}
          typeSpeed={50}
        />
      </div>
      <div className="px-8 my-12">
        <Grid stackable>
          <Grid.Row columns={4}>
            <Grid.Column tablet={8} computer={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={400}
                isVisible={true}
              >
                <a href="https://1daycloud.com/" target="_blank">
                  <Card className="shadow-2xl project mx-auto">
                    <Image
                      src={projectOne}
                      size="medium"
                      className="shadow-2xl"
                      style={{ width: "260px" }}
                    />
                    <Card.Content>
                      <Card.Header className="project-title text-2xl">
                        OneDay Cloud Website
                      </Card.Header>
                      <Card.Description>
                        <span className="project-desc text-xl">
                          HTML5 - CSS3 - JS - React - Gatsby - AntDesign
                        </span>
                        <br />
                        Developed the frontend of a technology industry website
                        based in using React and Gatsby.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </a>
              </Animated>
            </Grid.Column>
            <Grid.Column tablet={8} computer={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={800}
                isVisible={true}
              >
                <a href="https://www.homey.com.tr/en" target="_blank">
                  <Card className="shadow-2xl project mx-auto">
                    <Image src={projectTwo} className="shadow-2xl" />
                    <Card.Content>
                      <Card.Header className="project-title text-2xl">
                        Homey Real Estate Website
                      </Card.Header>
                      <Card.Description>
                        <span className="project-desc text-xl">
                          HTML5 - CSS3 - LESS - React - Redux
                        </span>
                        <br />
                        Developed the frontend of a real estate industry website
                        based in Istanbul,Turkey,using React
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </a>
              </Animated>
            </Grid.Column>

            <Grid.Column tablet={8} computer={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={1200}
                isVisible={true}
              >
                <a href="https://bookarage.com/" target="_blank">
                  <Card className="shadow-2xl project mx-auto">
                    <Image
                      src={projectFour}
                      size="huge"
                      className="shadow-2xl"
                    />
                    <Card.Content>
                      <Card.Header className="project-title text-2xl">
                        Bookarage Car Services App
                      </Card.Header>
                      <Card.Description>
                        <span className="project-desc text-xl">
                          HTML5 - CSS3 - JS - React - Sass
                        </span>
                        <br />
                        Developed the frontend of this car services app ,using
                        React,React.js ecosystem
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </a>
              </Animated>
            </Grid.Column>
            <Grid.Column tablet={8} computer={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={1800}
                isVisible={true}
              >
                <a href="https://badrstores.com/" target="_blank">
                  <Card className="shadow-2xl project mx-auto">
                    <Image
                      src={projectFive}
                      size="huge"
                      className="shadow-2xl"
                    />
                    <Card.Content>
                      <Card.Header className="project-title text-2xl">
                        Badr Stationary E-Commerce Website
                      </Card.Header>
                      <Card.Description>
                        <span className="project-desc text-xl">
                          HTML5 - CSS3 - JS - React
                        </span>
                        <br />
                        Developed the frontend of this E-commerce website for a
                        Stationary based in Alexandria,Egypt
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </a>
              </Animated>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default MyWorks;
