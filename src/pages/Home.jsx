import React from "react";
import Sidebar from "../components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import "./pages.scss";

const Home = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Container className="my-3">
          <Row>
            <Col xs={12} lg={6} className="mb-4">
              <Card className="bg-green" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Passport</Card.Title>
                  <Card.Text>
                    The Application process is swift and easy to use
                  </Card.Text>
                  <Link
                    to="/signup"
                    style={{ float: "right" }}
                    className=" btn btn-sm bg-pink"
                  >
                    Apply now
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card className="bg-pink" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Visa</Card.Title>
                  <Card.Text>
                    The Application process is swift and easy to use Apply
                    anywhere
                  </Card.Text>
                  <Link
                    to="/signup"
                    style={{ float: "right" }}
                    className=" btn btn-sm bg-green"
                  >
                    Apply now
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* country */}
        <Container>
          <Row>
            <h3 className="pt-4 pb-3">Country</h3>
            <Col>
              <Form.Select>
                <option>Select a country</option>
                <option value="0">Nigeria</option>
                <option value="1">Ghana</option>
                <option value="2">Kenya</option>
                <option value="3">Cameroun</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="pt-4 pb-3">Requirements</h3>
              <ul>
                <li>National Identity</li>
                <li>Birth Certificate</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={12}></Col>
            <Col sm={12}></Col>
          </Row>
        </Container>
      </div>
      <div className="footer bg-green">
        <h3 className="mx-0 my-0">Contact us</h3>
        <ul className="d-flex list">
          <li className="pr-2">
            <BsFacebook />
          </li>
          <li className="px-3">
            <BsTwitter />
          </li>
          <li className="pr-2">
            <RiInstagramFill />
          </li>
        </ul>
      </div>
      <div className="footer  bg-pink">&copy; 2022 I4G TEAM</div>
    </>
  );
};

export default Home;
