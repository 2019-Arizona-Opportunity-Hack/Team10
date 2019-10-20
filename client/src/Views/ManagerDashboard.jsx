import React, { Component } from "react";
import "../Styles/MangagerDashboard.css";
import Brand from "../assets/logo/logo.svg";
import ManagerDashboardMenu from "./ManagerDashboardMenu";
import ManagerDoctorsCom from "./ManagerDoctorsCom";
import { Link } from "react-router-dom";

class ManagerDashboard extends Component {
  patientInfo = [
    {
      id: 1,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    },
    {
      id: 2,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    },
    {
      id: 3,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    },
    {
      id: 4,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    },
    {
      id: 5,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    },
    {
      id: 6,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    },
    {
      id: 7,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    },
    {
      id: 8,
      name: "Foo Bass",
      birthday: "09/01/1989",
      address: "5055, Grant St, Phoenix",
      reasonReffered: "This is why",
      lastAppts: "08/01/1989",
      hasAppts: true
    }
  ];
  render() {
    return (
      <div>
        <div className="managerDashboard">
          <div className="sidebar">
            <div className="x">
              <div className="brand">
                <img src={Brand} alt="logo" />
              </div>
              <div className="managerProfile">
                <div className="avarta"></div>
                <span>Jane Doe</span>
                <br></br>
                <small>Manager</small>
              </div>
              <ManagerDashboardMenu />
            </div>
            <div className="logoutbtn">
              <Link to="/">logout</Link>
            </div>
          </div>
          {/* <ManagerDashboardContent /> */}
          <ManagerDoctorsCom patientInfo={this.patientInfo} />
        </div>
      </div>
    );
  }
}
export default ManagerDashboard;
