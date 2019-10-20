import React from "react";
import DoctorIllastration from "../assets/Illustrations/doctors.svg";
import PatientIllastration from "../assets/Illustrations/patient.svg";
import AppointmentIllastration from "../assets/Illustrations/appts.svg";
// import SearchIcon from "../assets/icons/search-solid.svg";

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
          <div className="card doctorIllastration">
            <img src={DoctorIllastration} alt="patient illustration" />
            <p className="cardCaption">
              SELECT A <br></br>DOCTOR
            </p>
          </div>
          <div className="card patientIllastration">
            <img src={PatientIllastration} alt="patient illustration" />
            <p className="cardCaption">
              SELECT A <br></br>PATIENT
            </p>
          </div>
          <div className="card appointmentIllastration">
            <img src={AppointmentIllastration} alt="patient illustration" />
            <p className="cardCaption">
              SELECT AN <br></br>APPOINTMENT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboardContent;
