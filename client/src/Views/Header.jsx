import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            Neurologic Music Therapy Services of Arizona
          </Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to="/login">Admin Login</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
