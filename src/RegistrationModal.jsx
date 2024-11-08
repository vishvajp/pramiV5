import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Button, Modal } from "antd";
import DatePicker from "react-datepicker";
import "./RegistrationModal.css"

import "react-datepicker/dist/react-datepicker.css";

import { Collapse, Input } from "antd";

const RegistrationModal = ({
  basicisModalOpen,
  basichandleOk,
  basichandleCancel,
}) => {
  const [startDate, setStartDate] = useState();
  const [DateOfBirth, setDateOfBirth] = useState();
  const CustomInput = ({ value, onClick }) => (
    <button className="dashboard-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );
  return (
    <div>
      {" "}
      <Modal
        className="basic-modal-content"
        open={basicisModalOpen}
        onOk={basichandleOk}
      >
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column">
                <label className="registration-modal-label">Registration Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<CustomInput />}
                />
              </div>
              <div className="d-flex flex-column">
                <lable className="registration-modal-label">Patient Name</lable>
                <input className="registration-modal-input" type="text"></input>
              </div>
              <div className="d-flex flex-column">
                <lable className="registration-modal-label">Mobile</lable>
                <input className="registration-modal-input" type="tel"></input>
              </div>
              <div className="d-flex flex-column">
                <lable className="registration-modal-label">Patient Occupation</lable>
                <input className="registration-modal-input" type="text"></input>
              </div>
            
              <div className="d-flex">
              <div className="d-flex ">
                <input type="radio"></input>
                <lable className="registration-modal-label me-3">Insurance</lable>
              </div>
              <div className="d-flex ">
                <input type="radio"></input>
                <lable className="registration-modal-label">No Insurance</lable>
              </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column">
                <lable className="registration-modal-label">Date Of Birth</lable>
                <DatePicker
                  selected={DateOfBirth}
                  onChange={(date) => setDateOfBirth(date)}
                  customInput={<CustomInput />}
                />
              </div>
              <div className="d-flex flex-column">
                <label className="registration-modal-label">Address</label>
                <textarea className="registration-modal-input"></textarea>
              </div>
              <div className="d-flex flex-column">
            <label className="registration-modal-label">Email</label>
            <input className="registration-modal-input" type="text"></input>
              </div>
              <div className="d-flex flex-column">
                <lable className="registration-modal-label">Marital Status</lable>
                <input className="registration-modal-input" type="text"></input>
              </div>
              
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end basicdetail-button-div">
          <button
            className="basicdetail-cancel-button"
            onClick={basichandleCancel}
          >
            CANCEL
          </button>
          <button className=" basicdetail-register-button">SUBMIT</button>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
