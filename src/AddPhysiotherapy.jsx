import React from "react";
import "./AddPhysiotherapy.css";
import { useNavigate } from "react-router-dom";
const AddPhysiotherapy = ({ showPhysiotherapist }) => {
  const handleDataSend = () => {
    showPhysiotherapist("PHYSIOTHERAPIST", "");
  };

  return (
    <div>
      <p className="clinecs-1stdiv-text">Physiotherapy Registration</p>
      <div className="addphysiotherapy-main-div bg">
        <div className="row mb-4">
          <div className="col d-flex flex-column gap-4">
            <div className="d-flex flex-column">
              <lable className="addphysiotherapy-label">
                Physiotherapy Name
              </lable>
              <input className="addphysiotherapy-input" type="text"></input>
            </div>
            <div className="d-flex flex-column">
              <lable className="addphysiotherapy-label">Education</lable>
              <input className="addphysiotherapy-input" type="text"></input>
            </div>
            <div className="d-flex flex-column">
              <lable className="addphysiotherapy-label">Specialist</lable>
              <input className="addphysiotherapy-input" type="text"></input>
            </div>
          </div>
          <div className="col d-flex flex-column gap-4">
            <div className="d-flex flex-column">
              <lable className="addphysiotherapy-label">Experience</lable>
              <input className="addphysiotherapy-input" type="text"></input>
            </div>
            <div className="d-flex flex-column">
              <lable className="addphysiotherapy-label">Contact Number</lable>
              <input className="addphysiotherapy-input" type="text"></input>
            </div>
            <div className="d-flex flex-column">
              <lable className="addphysiotherapy-label">Email ID</lable>
              <input className="addphysiotherapy-input" type="text"></input>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mb-5">
          <lable className="addphysiotherapy-label">Location</lable>
          <input className="addphysiotherapy-input" type="text"></input>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="addphysiotherapy-cancel-button me-2"
            onClick={handleDataSend}
          >
            CANCEL
          </button>
          <button className="addphysiotherapy-add-button">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddPhysiotherapy;
