import React from "react";
import SearchIcon from "../assets/icons/search-solid.svg";
import "../Styles/ManagerDoctorsCom.css";

const ManagerDoctorsCom = ({ patientInfo }) => {
  return (
    <div className="content">
      <div className="search">
        <input></input>
        <img className="searchIcon" src={SearchIcon} alt="logo" />
      </div>
      <div className="b">
        <h3>
          What do you <br />
          Want to do today?
        </h3>
        <div className="doctorCardsWrapperTitle">
          <div className="doctorCardTitle doctorIllastration">
            <span className="doctorCardItem">Doctor</span>
            <span className="doctorCardItem">Jame Flomo</span>
            <span className="doctorCardItem">Condition</span>
            <span className="doctorCardItem">Last Date Seen</span>
          </div>
        </div>
        <div className="doctorCardsWrapper">
          {patientInfo.map(patient => {
            return (
              <div className="doctorCard">
                <div className="doctorCardItem">
                  <div className="img"></div>
                </div>
                <span className="doctorCardItem">{patient.name}</span>
                <span className="doctorCardItem">{patient.birthday}</span>
                <span className="doctorCardItem">{patient.lastAppts}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManagerDoctorsCom;
