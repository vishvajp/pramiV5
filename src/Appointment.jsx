import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { FaCalendarAlt } from "react-icons/fa";
import "./Appointment.css";
import { FaSearch } from "react-icons/fa";
import { AppointmentTable } from "./AppointmentTable";

import ParameterModal from "./ParameterModal";
import Paymentmodal from "./Paymentmodal";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [basicisModalOpen, basicsetIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState();
  const [isModalOpenPayment, setIsModalOpenPayment] = useState(false);
  const [selectClinic, setSelectClinic] = useState("All");
  const [selectDoctor, setSelectDoctor] = useState("All");
  const [selectTreatment, setSelectTreatment] = useState("All Treatment");
  const [searchpatient,setSearchPatient]=useState("")

  const [chooseDays, setChooseDays] = useState("Appointment List");
  const [toDate, setToDate] = useState();

  const currentDayDate = new Date();
  currentDayDate.setHours(0, 0, 0, 0);

  const handleSelectWeek = () => {
    const weekday = new Date(currentDayDate);
    weekday.setDate(weekday.getDate() + 7);

    weekday.setHours(0, 0, 0, 0);
    setStartDate(currentDayDate);
    setToDate(weekday);
    setChooseDays("Week");
  };

  const handleSelectMonth = () => {
    const monthDay = new Date(currentDayDate);
    monthDay.setDate(monthDay.getDate() + 30);
    monthDay.setHours(0, 0, 0, 0);
    setStartDate(currentDayDate);
    setToDate(monthDay);
    setChooseDays("Month");
  };

  // Parametermodal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // BasicModal

  // const basicshowModal = () => {
  //   basicsetIsModalOpen(true);
  // };
  // const basichandleOk = () => {
  //   basicsetIsModalOpen(false);
  // };
  // const basichandleCancel = () => {
  //   basicsetIsModalOpen(false);
  // };

  // Paymentmodal

  const showModalPayment = () => {
    setIsModalOpenPayment(true);
  };
  const paymenthandleOk = () => {
    setIsModalOpenPayment(false);
  };
  const paymenthandleCancel = () => {
    setIsModalOpenPayment(false);
  };

  const CustomInput = ({ value, onClick }) => (
    <button className="appintment-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );
  return (
    <div className="bg">
      <div className="appointment-servicelist">
        <p className="mb-0 appointment-servicelist-text">Service List</p>
        <div className="d-flex ">
          <div className="d-flex align-items-center ">
            <div className="d-flex align-items-center appointment-1st-div">
              <span
                style={{
                  backgroundColor:
                    chooseDays === "Appointment List" ? "green" : "white",
                  color: chooseDays === "Appointment List" ? "white" : "black",
                }}
                onClick={() => {
                  setChooseDays("Appointment List");
                  setStartDate(null);
                  setToDate(null);
                }}
                className="appointment-appointmentlist-text"
              >
                Appointment List
              </span>
              <span
                onClick={() => {
                  setChooseDays("Day");
                  setStartDate(currentDayDate);
                  setToDate(currentDayDate);
                }}
                style={{
                  backgroundColor: chooseDays === "Day" ? "green" : "white",
                  color: chooseDays === "Day" ? "white" : "black",
                }}
                className="appointment-span"
              >
                Day
              </span>
              <span
                style={{
                  backgroundColor: chooseDays === "Week" ? "green" : "white",
                  color: chooseDays === "Week" ? "white" : "black",
                }}
                onClick={handleSelectWeek}
                className="appointment-span"
              >
                Week
              </span>
              <span
                style={{
                  backgroundColor: chooseDays === "Month" ? "green" : "white",
                  color: chooseDays === "Month" ? "white" : "black",
                }}
                onClick={handleSelectMonth}
                className="appointment-span"
              >
                Month
              </span>
            </div>
          </div>
          <div
            className="d-flex align-items-end justify-content-end"
            style={{ width: "100%" }}
          >
            <span
              style={{ width: "25%" }}
              className="mb-0 appointment-2div-walk"
            >
              {" "}
              WALK-IN CONSULTATION
            </span>
          </div>
        </div>
      </div>
      <div className="appointment-servicelist row">
        <div className="d-flex flex-column col ">
          <label className="docdetail-input-label" for="Education">
            From
          </label>

          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            customInput={<CustomInput />}
          />
        </div>
        <div className="d-flex flex-column col ">
          <label className="dashboard-input-label ms-3">To</label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            customInput={<CustomInput />}
          />
        </div>
        {/* <div className="d-flex flex-column col ">
          <label className="docdetail-input-label" for="Education">
            Hospital / Clinic
          </label>
          <select
            onChange={(e) => setSelectClinic(e.target.value)}
            name="Education"
            id="hospital"
          >
            <option>All</option>
            <option>Appollo</option>
            <option>Sunshine</option>
            <option>Testing</option>
          </select>
        </div> */}

        <div className="d-flex flex-column col">
          <label className="docdetail-input-label" for="Education">
            Select Doctor
          </label>
          <select
            onChange={(e) => setSelectDoctor(e.target.value)}
            name="Education"
            id="doctors"
          >
            <option>All</option>
            <option>Dr Karunakarn</option>
            <option>Dr Senthil</option>
            <option>Dr Kumaran</option>
          </select>
        </div>
        <div className="d-flex flex-column col ">
          <label className="docdetail-input-label" for="Education">
            Treatment Type
          </label>
          <select
            onChange={(e) => setSelectTreatment(e.target.value)}
            name="Education"
            id="doctors"
          >
            <option>All Treatment</option>
            <option>Consultation</option>
            <option>Asset Physiotherapy</option>
            <option>Physiotherapy</option>
          </select>
        </div>
      </div>
      <div className="appointment-table-part">
        <div
          className="d-flex justify-content-between  "
          style={{ padding: "0px 30px" }}
        >
          <div>
            <div className="appointment-appointmnet-text-abovetable">
              Appointment List
            </div>
          </div>
          <div className="appointment-search-bar">
            <div className="appointment-search-input-div">
              <span className="appointmnet-search-icon">
                {" "}
                <FaSearch />
              </span>
              <input
                placeholder="Search Booked Patient"
                type="text"
                className="appointment-search-input"
                value={searchpatient}
                onChange={(e)=>{setSearchPatient(e.target.value)}}
              />
            </div>
          </div>
        </div>
        <AppointmentTable
          selectDoctor={selectDoctor}
          startDate={startDate}
          selectTreatment={selectTreatment}
          showModal={showModal}
          showModalPayment={showModalPayment}
          toDate={toDate}
          setSelectDoctor={setSelectDoctor}
          searchpatient = {searchpatient}
        ></AppointmentTable>
      </div>
      <ParameterModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      ></ParameterModal>
      {/* <Basicdetailmodal
        basicisModalOpen={basicisModalOpen}
        basichandleOk={basichandleOk}
        basichandleCancel={basichandleCancel}
      /> */}
      <Paymentmodal
        isModalOpenPayment={isModalOpenPayment}
        paymenthandleOk={paymenthandleOk}
        paymenthandleCancel={paymenthandleCancel}
      />
    </div>
  );
};

export default Appointment;
