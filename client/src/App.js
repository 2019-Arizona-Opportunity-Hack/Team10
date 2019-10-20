import React from "react";
import PatientForm from "./Forms/PatientForm.jsx";
import ManagerDashboard from "./Views/ManagerDashboard";
import TherapistForm from "./Forms/TherapistForm.jsx"

export default function App() {
  return (
    <div>
      <PatientForm />
      <ManagerDashboard />
    </div>
  );
}
