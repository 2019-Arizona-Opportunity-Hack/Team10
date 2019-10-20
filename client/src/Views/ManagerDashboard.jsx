import React, { Component } from "react";
import "../Styles/MangagerDashboard.css";
import Brand from "../assets/logo/logo.svg";
import ManagerDashboardMenu from "./ManagerDashboardMenu";
import ManagerDoctorsCom from "./ManagerDoctorsCom";
import ManagerDashboardContent from "./ManagerDashboardContent";
import { Link } from "react-router-dom";

class ManagerDashboard extends Component {
  state = {
    doctors: []
  };
  getAllDoctors = async () => {
    try {
      const res = await fetch("http://localhost:8080/doctors", {
        headers: {
          "Content-Type": "application/json",
          method: "GET"
        }
      });
      const doctors = await res.json();
      this.setState(doctors);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getAllDoctors();
    console.log("##############");
    console.log(this.state.doctors);
  };

  render() {
    console.log(this.state.doctors);
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
            <Link className="logoutbtn" to="/">
              logout
            </Link>
          </div>
          {/* <ManagerDashboardContent /> */}
          <ManagerDoctorsCom doctors={this.state.doctors} />
        </div>
      </div>
    );
  }
}
export default ManagerDashboard;
