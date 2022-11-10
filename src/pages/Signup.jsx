import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./pages.scss"
const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("okay")
        navigate('/verify')
    }
  return (
    <div className="container">
         <Sidebar/>
         <div className="card bg-green ">
            <p className="text-center">Signup</p>
            <p className="text-center">Join millions of users getting their passports with ease</p>
         </div>
    <Form onSubmit={handleSubmit}>
    <Row className="my-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <button type="submit" className="btn bg-green">
          Register
        </button>
    </Form>
    </div>
  );
}

export default Signup;