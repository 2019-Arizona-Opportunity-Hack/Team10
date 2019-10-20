import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";

export default function HomeScreen() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand>
              Neurologic Music Therapy Services of Arizona
            </Navbar.Brand>
          </Link>
          <Nav className="ml-auto">
            <Link to="/login">Login</Link>
          </Nav>
        </Navbar>
      </Router>
    </div>
  );
}
