import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../asset/avatar.png";
import robot from "../asset/robot.png";
import spinner from "../asset/spinner.png";
import "./pages.scss";
const Verify = () => {
  const reload = () => {
    alert("reloading...");
  };
  return (
    <div className="container">
      Face Recognition
      <div className="profile">
        <div>
          <img className="img-fluid" src={avatar} alt="avatar" />
        </div>

        <div className="">Mommmaad Ali</div>
      </div>
      <div className="camera-section">
        <Row>
          <Col>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Body>
                {/* <Card.Title>Passport</Card.Title> */}
                {/* <Card.Text>
                The Application process is swift and easy to use
              </Card.Text> */}
                <img src={robot} alt="Robot" />
                <p>
                  oops, something went wrong make sure your face is in focus and
                  in a well lit environment
                </p>
                <div className="reload-button">
                    <div className="spinner">
                    <img  src={spinner} alt="Spinner" />
                    </div>
                  
                  <button
                    onClick={reload}
                    type="button"
                    className=" btn btn-sm bg-pink"
                  >
                    TRY AGAIN
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Verify;
