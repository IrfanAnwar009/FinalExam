import { Button, Image } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import playbtn from "../assets/images/playbtn.png";
import Screen from "../assets/images/Screen.png";

export default function HeroSection() {
  return (
    <div className="p-5 hero-div">
      <div className="left-ecllipse"></div>
      <div className="middle-ecllipse"></div>
      <div className="right-ecllipse"></div>
      <div className="d-flex flex-column align-items-center">
        <div style={{ maxWidth: "35%" }}>
          <h1 className="text-light text-center">
            Web3Makr Redefining How You Create
          </h1>
        </div>

        <p className="text-light text-center" style={{ maxWidth: "22%" }}>
          Unlock the blockchain potential to create Web3 Applications
        </p>
        <img src={playbtn} alt="playbutton"></img>
      </div>
      <div className="mt-5 text-center">
        <img src={Screen} className=""></img>
      </div>
    </div>
  );
}
