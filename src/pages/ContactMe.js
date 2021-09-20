import Typed from "react-typed";
import { Grid, Card } from "semantic-ui-react";
import { Animated } from "react-animated-css";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="my-12 mb-52">
      <div className="mx-auto ">
        <Typed
          className="text-6xl text-center block  typed tracking-widest"
          showCursor={false}
          strings={["Contact Me"]}
          typeSpeed={50}
          style={{ zIndex: "9999" }}
        />
        <p className="mx-auto text-center my-4 text-xl">
          Feel free to contact me anytime.
        </p>
      </div>
      <div className="xs:hidden sm:hidden md:hidden lg:block">
        <Grid container centered className="my-12">
          <Grid.Row columns={4}>
            <Grid.Column width={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={400}
                isVisible={true}
              >
                <Card className="shadow-2xl project">
                  <Card.Content>
                    <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                      <MdLocationOn size={50} className="mx-auto" />
                      Address
                    </Card.Header>
                    <Card.Description className="text-center text-lg">
                      Alexandria, Egypt
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Animated>
            </Grid.Column>
            <Grid.Column width={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={800}
                isVisible={true}
              >
                <Card className="shadow-2xl project">
                  <Card.Content>
                    <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                      <FaPhoneAlt size={50} className="mx-auto" />
                      Phone
                    </Card.Header>
                    <Card.Description className="text-center text-lg">
                      (+2)01206487756
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Animated>
            </Grid.Column>
            <Grid.Column width={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={1200}
                isVisible={true}
              >
                <a
                  href="mailto:abdallahmoustafa1194@gmail.com"
                  style={{ color: "inherit" }}
                >
                  <Card className="shadow-2xl project">
                    <Card.Content>
                      <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                        <MdEmail size={50} className="mx-auto" />
                        E-mail
                      </Card.Header>
                      <Card.Description className="text-center text-lg">
                        abdallahmoustafa1194@gmail.com
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </a>
              </Animated>
            </Grid.Column>
            <Grid.Column width={4}>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={1800}
                isVisible={true}
              >
                <a
                  href="https://www.linkedin.com/in/abdallah-moustafa-4ba357178/"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <Card className="shadow-2xl project">
                    <Card.Content>
                      <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                        <FaLinkedinIn size={50} className="mx-auto" />
                        Linkedin Profile
                      </Card.Header>
                      <Card.Description className="text-center text-lg">
                        Abdallah Moustafa
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </a>
              </Animated>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className="lg:hidden ">
        <Grid stretched verticalAlign="middle" centered className="my-12">
          <Grid.Row>
            <Grid.Column>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={400}
                isVisible={true}
              >
                <Card className="shadow-2xl project">
                  <Card.Content>
                    <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                      <MdLocationOn size={50} className="mx-auto" />
                      Address
                    </Card.Header>
                    <Card.Description className="text-center text-lg">
                      Alexandria, Egypt
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Animated>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={800}
                isVisible={true}
              >
                <Card className="shadow-2xl project">
                  <Card.Content>
                    <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                      <FaPhoneAlt size={50} className="mx-auto" />
                      Phone
                    </Card.Header>
                    <Card.Description className="text-center text-lg">
                      (+2)01206487756
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Animated>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={1200}
                isVisible={true}
              >
                <a
                  href="mailto:abdallahmoustafa1194@gmail.com"
                  style={{ color: "inherit" }}
                >
                  <Card className="shadow-2xl project">
                    <Card.Content>
                      <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                        <MdEmail size={50} className="mx-auto" />
                        E-mail
                      </Card.Header>
                      <Card.Description className="text-center text-lg">
                        abdallahmoustafa1194@gmail.com
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </a>
              </Animated>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Animated
                animationIn="bounceInDown"
                animationInDuration={1800}
                isVisible={true}
              >
                <a
                  href="https://www.linkedin.com/in/abdallah-moustafa-4ba357178/"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <Card className="shadow-2xl project">
                    <Card.Content>
                      <Card.Header className="project-title text-3xl tracking-widest mx-auto text-center">
                        <FaLinkedinIn size={50} className="mx-auto" />
                        Linkedin Profile
                      </Card.Header>
                      <Card.Description className="text-center text-lg">
                        Abdallah Moustafa
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

export default ContactMe;
