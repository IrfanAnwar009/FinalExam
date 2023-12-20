import React from "react";
import logo from "../assets/images/logo1.png";
import social from "../assets/images/social.png";
export const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-dark pt-5">
          <div className="col-md-4 mt-md-0 mt-3 text-center">
            <div className="footer-copyright text-center text-white pb-0 pt-5">
              © {new Date().getFullYear()} Copyright:
              <a href="#!">
                <span className="ms-2">Web3mkr</span>
              </a>
            </div>
          </div>
          <div className="col-md-4 mt-md-0 mt-3 text-center">
            <img src={logo} alt="logo" className="fs-2" />
            <ul
              className=""
              style={{
                listStyleType: "none",
                display: "flex",
                paddingLeft: "10%",
              }}
            >
              <li>
                <a href="#!" className="text-white ms-3">
                  Web3mkr
                </a>
              </li>
              <li>
                <a href="#!" className="text-white ms-3">
                  WhitePaper
                </a>
              </li>
              <li>
                <a href="#!" className="text-white ms-3">
                  services
                </a>
              </li>
              <li>
                <a href="#!" className="text-white ms-3">
                  Tools
                </a>
              </li>
              <li>
                <a href="#!" className="text-white ms-3">
                  ContactUs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mt-md-0 mt-3 text-center">
            <img src={social} alt="" className="pb-0 pt-5" />
          </div>
          <div className="left1-ecllipse"></div>
          <div className="middle1-ecllipse"></div>
          <div className="right1-ecllipse"></div>
        </div>
      </div>
    </>
  );
};
