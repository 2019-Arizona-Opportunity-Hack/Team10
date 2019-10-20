import React from "react";
import SearchIcon from "../assets/icons/search-solid.svg";
import "../Styles/ManagerDoctorsCom.css";

const ManagerDoctorsCom = ({ doctors }) => {
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
            <span className="doctorCardItem">Avatar</span>
            <span className="doctorCardItem">Name</span>
            <span className="doctorCardItem">Email</span>
            <span className="doctorCardItem">Last Date Seen</span>
          </div>
        </div>
        <div className="doctorCardsWrapper">
          {doctors.map(doctor => {
            return (
              <div className="doctorCard">
                <div className="doctorCardItem">
                  <div className="img"></div>
                </div>
                <span className="doctorCardItem">
                  {doctor.fName} {doctor.lName}
                </span>
                <span className="doctorCardItem">{doctor.emailAddr}</span>
                <span className="doctorCardItem">{doctor.updated_at}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManagerDoctorsCom;
