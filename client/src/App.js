import React from "react";
import PatientForm from "./Forms/PatientForm.jsx";
import ManagerDashboard from "./Views/ManagerDashboard";
import TherapistForm from "./Forms/TherapistForm.jsx";
import HomeScreen from "./Views/HomeScreen";
import Login from "./Views/Login.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/patient" component={PatientForm} />
          <Route exact path="/therapist" component={TherapistForm} />
          <Route exact path="/dashboard" component={ManagerDashboard} />
        </Switch>
      </Router>
    </div>
  );
}
