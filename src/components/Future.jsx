import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import futureImage from "../assets/images/futureImage.png";
import heroImage from "../assets/images/heroImage.png";

const Future = () => {
  const futureStyle = {
    height: "98vh",
    background: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundColor: "#230823",
  };

  const imageStyle = {
    width: "55%", // Make the image responsive
    height: "auto", // Maintain the aspect ratio
    objectFit: "cover",
  };

  return (
    <>
      <div className="" style={futureStyle}>
        <div className="text-white text-center pt-5">
          <h1 className="">The Future of Web3 NoCode</h1>
          <p className="fs-5">
            Web3Makr allows you to incorporate top-ranked blockchain platforms
            into your work through the drag and drop feature.
          </p>
        </div>
        <div className="containerfluid">
          <Row className="px-2 py-3">
            <Col lg={4} md={12} sm={12} className="py-4 text-center">
              <div className="text-white">
                <h4 className="text-white">Multi-chain</h4>
                <h5>Dashboard</h5>
                <h6>Tool</h6>
              </div>
            </Col>
            <Col lg={8} md={12} sm={12} className="py-4">
              <div className="text-center">
                <img src={futureImage} alt="components" style={imageStyle} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Future;
