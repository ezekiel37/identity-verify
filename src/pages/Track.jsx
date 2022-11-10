import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../asset/avatar.png";
import robot from "../asset/robot.png";
import spinner from "../asset/spinner.png";
import "./pages.scss";
const Track = () => {
  const reload = () => {
    alert("reloading...");
  };
  return (
    <div className="container">
    
      <div className="profile">
        <div>
          <img className="img-fluid" src={avatar} alt="avatar" />
        </div>

        <div className="">Mommmaad Ali</div>
      </div>
      <div className="track-section">
        <Row>
          <Col>
           <Form>
            
           </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Track;
