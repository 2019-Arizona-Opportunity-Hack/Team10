import React from "react";
import Header from "./Header";
import PatientImg from "../assets/Illustrations/patient.svg";
import TherapistImg from "../assets/Illustrations/doctors.svg";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const lightOrange = {color: '#CF9702'}

function HomeScreen() {
  return (
    <div>
      <Header />
      <div>
        <Container className="text-center">
          <Row>
            <Col>
              <Link to="/patient">
                <img src={PatientImg} />
                <h1 style={lightOrange}>
                  Patient Application
                </h1>
              </Link>
            </Col>
            <Col>
              <Link to="/therapist">
                <img src={TherapistImg} />
                <h1 style={lightOrange}>
                  Therapist Application
                </h1>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default HomeScreen;
