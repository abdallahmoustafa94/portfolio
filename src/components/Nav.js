import { useState } from "react";
import { Menu, Image, Sidebar, Button } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 z-50 "
        id="landing-nav"
      >
        <div className="w-full  lg:px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
            <h1 className="text-4xl my-2 tracking-wider">Abdallah Moustafa</h1>
            <Button
              className=" text-pink cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
              type="button"
              icon="bars"
              onClick={() => setNavbarOpen(!navbarOpen)}
            ></Button>
          </div>
          <div
            className={`lg:flex ${navbarOpen ? "block" : "hidden"} `}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <Menu.Item
                    className={`${
                      splitLocation[1] === ""
                        ? "active xs:py-2 sm:py-2 tracking-wider font-bold cursor-pointer mr-8 text-xl test  "
                        : "xs:py-2 sm:py-2 hover tracking-wider font-bold cursor-pointer mr-8 text-xl   cursor-pointer mr-8 text-black"
                    }`}
                    name="About Me"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skillset">
                  <Menu.Item
                    className={`${
                      splitLocation[1] === "skillset"
                        ? "active tracking-wider font-bold cursor-pointer mr-8 text-xl  text-bold xs:py-2 sm:py-2"
                        : "hover tracking-wider font-bold cursor-pointer mr-8 text-xl  cursor-pointer xs:py-2 sm:py-2 mr-8 text-black"
                    }`}
                    name="Skillset"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/my-works">
                  <Menu.Item
                    className={`${
                      splitLocation[1] === "my-works"
                        ? "active tracking-wider font-bold cursor-pointer mr-8 text-xl  text-bold xs:py-2 sm:py-2"
                        : "hover tracking-wider font-bold cursor-pointer mr-8 text-xl text-black  cursor-pointer mr-8 xs:py-2 sm:py-2"
                    }`}
                    name="Some of My Works"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <Menu.Item
                    className={`${
                      splitLocation[1] === "contact"
                        ? "active tracking-wider font-bold cursor-pointer mr-8 text-xl  text-bold xs:py-2 sm:py-2"
                        : "hover tracking-wider font-bold cursor-pointer mr-8 text-xl text-black  cursor-pointer mr-8 xs:py-2 sm:py-2"
                    }`}
                    name="Contact Me"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
