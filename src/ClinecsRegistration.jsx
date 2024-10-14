import React from "react";
import "./ClinecsRegistration.css";

const ClinecsRegistration = ({ showPhysiotherapist }) => {
  const handleDataSend = () => {
    showPhysiotherapist("CLINIC", "");
  };

  return (
    <div>
      <p className="clinecs-1stdiv-text">Clinic Registration</p>
      <div className="clinic-main-div row bg">
        <div className="col clinecs-first-col pb-0">
          <div className="d-flex flex-column  mb-4">
            <label> Hospital / Clinic Name</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Contact Number</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="col clinecs-first-col pb-0">
          <div className="d-flex flex-column  mb-4">
            <label> Contact Person</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Email ID</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="p-0">
          <div className="col clinecs-first-col py-0">
            <div className="d-flex flex-column mb-4">
              <label>Address</label>
              <input type="text" placeholder="Enter Address"></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col clinecs-first-col py-0 ">
            <div className="d-flex flex-column mb-4">
              <input type="text" placeholder="Enter Country"></input>
            </div>
            <div
              className="d-flex flex-column "
              style={{ marginTop: "47.5px" }}
            >
              <input type="text" placeholder="Enter City"></input>
            </div>
          </div>
          <div className="col clinecs-first-col py-0 pe-0">
            <div className="d-flex flex-column mb-4">
              <input type="text" placeholder="Enter state"></input>
            </div>
            <div className="d-flex flex-column mb-4">
              <label>Pincode</label>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col clinecs-first-col pb-0 pt-0">
            <div className="d-flex flex-column  mb-4">
              <label> Enter Location</label>
              <select id="location">
                <option></option>
                <option>check</option>
              </select>
            </div>
            <div className="d-flex flex-column mb-4">
              <label>Practising Licence Number</label>
              <input type="text"></input>
            </div>
          </div>
          <div className="col clinecs-first-col pb-0 pt-0 pe-0">
            <div className="d-flex flex-column  mb-4">
              <label> Registration ON</label>
              <input
                type="date"
                classname="clinic-registration-date-input"
              ></input>
            </div>
            <div className="d-flex flex-column mb-4">
              <label>Enter TIN Number</label>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleDataSend}
            className="clinic-registration-submit-button"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinecsRegistration;
