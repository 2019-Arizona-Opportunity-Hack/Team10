import React from "react";
import DoctorIllastration from "../assets/Illustrations/doctors.svg";
import PatientIllastration from "../assets/Illustrations/patient.svg";
import AppointmentIllastration from "../assets/Illustrations/appts.svg";
// import SearchIcon from "../assets/icons/search-solid.svg";
import { Link } from "react-router-dom";

const ManagerDashboardContent = () => {
  return (
    <div className="content">
      <div className="search">
        {/* <input></input>
        <img className="searchIcon" src={SearchIcon} alt="logo" /> */}
      </div>
      <div className="b">
        <h3>
          What do you <br />
          Want to do today?
        </h3>
        <div className="cardsWrapper">
          <Link to="/manager-doctorsCom">
            <div className="card doctorIllastration">
              <img src={DoctorIllastration} alt="patient illustration" />
              <p className="cardCaption">
                SELECT A <br></br>DOCTOR
              </p>
            </div>
          </Link>
          <Link to="/">
            <div className="card patientIllastration">
              <img src={PatientIllastration} alt="patient illustration" />
              <p className="cardCaption">
                SELECT A <br></br>PATIENT
              </p>
            </div>
          </Link>
          <Link to="/">
            <div className="card appointmentIllastration">
              <img src={AppointmentIllastration} alt="patient illustration" />
              <p className="cardCaption">
                SELECT AN <br></br>APPOINTMENT
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboardContent;
