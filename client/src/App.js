import React from 'react';
import PatientForm from './Forms/PatientForm.jsx';
import ManagerDashboard from './Views/ManagerDashboard';
import TherapistForm from './Forms/TherapistForm.jsx'
// import HomeScreen from './Views/HomeScreen.jsx'
import Login from './Views/Login.jsx'

import { Navbar, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


export default function App() {
  return (
    <div>
<<<<<<< HEAD
      {/* <PatientForm /> */}
      <ManagerDashboard />
=======
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/patient" component={PatientForm} />
          <Route exact path="/therapist" component={TherapistForm} />
          <Route exact path="/dashboard" component={ManagerDashboard} />
        </Switch>
      </Router>
>>>>>>> 8980507c037b4f5914ef96928ec63216a21956fa
    </div>
  );
}

function HomeScreen(){
  return (
    <div>
      <Link to='/therapist'>
        I am a therapist
      </Link>
      <Link to='/patient'>
        I am a patient
      </Link>
    </div>

  )
}

function Header() {
  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>Neurologic Music Therapy Services of Arizona</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to='/login'>
            Admin Login
          </Link>
        </Nav>
      </Navbar>

    </div>
  )
}
