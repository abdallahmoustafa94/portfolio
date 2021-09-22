import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import cv from "../assets/my-cv.pdf";
const Footer = () => {
  return (
    <>
      {/* <div
        style={{
          width: "50px",
          position: "absolute",
          top: "50%",
          left: "20px",
          zIndex: "200",
          cursor: "pointer",
        }}
      >
        <FaFacebookF size={20} className="hover" />
        <FaLinkedinIn size={20} className="my-12 hover" />
      </div> */}
      <div className="flex w-full items-center xs:px-4 lg:px-12" style={{}}>
        <div className="flex justify-start w-1/2 xs:text-lg  font-primary lg:text-xl">
          <a
            href="mailto:abdallahmoustafa1194@gmail.com"
            style={{ color: "inherit" }}
          >
            <p>abdallahmoustafa1194@gmail.com</p>
          </a>
        </div>
        <div className="flex justify-end w-1/2 xs:text-lg font-primary lg:text-xl">
          <a href={cv} download style={{ color: "inherit" }}>
            Download my Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
