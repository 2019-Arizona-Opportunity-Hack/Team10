import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function HomeScreen() {

  return (
    <div>
      <Router>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>Neurologic Music Therapy Services of Arizona</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to='/login'>
            Login
          </Link>
        </Nav>
      </Navbar>
    </Router>
    </div>
  )
}
