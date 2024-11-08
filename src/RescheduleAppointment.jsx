import React, { useState }  from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "./RescheduleAppointment.css"

const RescheduleAppointment = ({
  isModalOpenReschdule,
  handleOkReschedule,
  handleCancelReschedule,
  setIsModalOpenReschedule,
  specificPatient,
}) => {
  
  const [startDateReschedule, setStartDateReschedule] = useState(null);
  const [patientSlotTiming,setPatientSlotTiming]=useState()

// console.log(specificPatient, isModalOpenReschdule,"check",specificPatient.patientname);

  const handleDateChange = (date) => {
    setStartDateReschedule(date);
    // Generate slots for the selected date
  };
const game = specificPatient

  const CustomInput = ({ value, onClick }) => (
    <button className="patientBooking-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );

  const handleRescheduleFormSubmit=()=>{

  }
  
  return (
    <div>
      <Modal open={isModalOpenReschdule} onOk={handleOkReschedule}>
   <div className="row">
   <div className="col-3 patientbooking-1st-col ">
              <div>
                <div className="patientbooking-img-pencil d-flex justify-content-center">
                  <img
                    className=" docimage ms-2"
                    src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ width: "90px", height: "90px" }}
                  ></img>
                  <TiPencil className="patientbooking-tipencil" />
                </div>
              </div>
              <span
                onClick={() => {
             
                  handleCancelReschedule(); // Call the function
                }}
                className="patientbooking-1stdiv-cancelspan"
              >
                <MdCancel className="patientbooking-1st-div-cancel" />
              </span>
              <p className="text-center mb-0 patientbooking-searchpatient-text">
                Search Patient
              </p>
              <p className="text-center mb-0 patientbooking-dot-text">
                ....................
              </p>
              <p className="text-center mb-0 patientbooking-datetime-appointment">
                Selected Date & Time
              </p>
              <p className="text-center mb-0 patientbooking-date-text">
                Jan 30, 2024
              </p>
              <p className="text-center mb-0 patientbookin-time-text">
                09:45Hrs To 10:00 Hrs
              </p>
              <p className="text-center mb-0 patientbooking-dot-text">
                ....................
              </p>
              <p className="text-center mb-0 patientbooking-datetime-appointment">
                Appointment with
              </p>
              <p className="text-center mb-0 patientbooking-dr-text">
                Dr. Karunakaran S
              </p>
            </div>
            <div className="col-8 ms-4">
              <div className="d-flex mt-4">
                <p className="patientbooking-bookingappointment-text">
                  {" "}
                  You are{" "}
                  <span className="patientbooking-book-span">Booking</span> an
                  appointment
                </p>
               
              </div>
              <div className="row">
                <div className="col" style={{ padding: "10px 10px 5px 10px" }}>
                  <div className="d-flex flex-column">
                    <label className="patientbooking-input-label">
                      Select Clinic
                    </label>
                    <p className="reschedule-appointment-para">{specificPatient.clinic}</p>
                    {/* <select
                     value={clinic}
                     onChange={(e) => setClinic(e.target.value)}
                    name="man" id="appointment">
                      <option></option>
                      <option>Dr. Karunakaran Spine Center</option>
                   
                    </select> */}
                  </div>
                </div>
                <div className="col" style={{ padding: "10px 25px 5px 10px" }}>
                  <div className="d-flex flex-column">
                    <label className="patientbooking-input-label">
                      Name Of The Patient
                    </label>
                    <p className="reschedule-appointment-para">{game.patientName }</p>
                    {/* <input
                      className="patientbooking-2col-patient-input"
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    ></input> */}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column me-3">
                <div className="d-flex mt-2 row">
                  <div className="d-flex flex-column col">
                    <label className="patientbooking-input-label">
                      Choose Doctor
                    </label>
                    <p  id="doctor">{specificPatient?.doctor}</p>
                    {/* <select
                      name="doctor"
                      id="doctor"
                      onChange={handleDoctorChange}
                    >
                      <option value="">Select a doctor</option>
                      {data.map((docname) => (
                        <option key={docname.name} value={docname.name}>
                          {docname.name}
                        </option>
                      ))}
                    </select> */}
                  </div>

                  <div className="col" style={{ padding: "0px 10px 5px 10px" }}>
                    <div className="d-flex flex-column">
                      <label className="patientbooking-input-label">
                        Mobile Number
                      </label>
                      <p  className="reschedule-appointment-para">{specificPatient?.patientMobile}</p>
                      {/* <input
                        className="patientbooking-2col-patient-input"
                        type="text"
                        value={patientMobile}
                        onChange={(e) => setPatientMobile(e.target.value)}
                      ></input> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-2 row">
                <div className="d-flex flex-column col">
                  <label className="patientbooking-input-label ms-3">
                    Appointment Type
                  </label>
                  <p className="reschedule-appointment-para">{specificPatient?.appointmentType}</p>
                  {/* <select 
                   value={appointmentType}
                   onChange={(e) => setAppointmentType(e.target.value)}
                  name="man" id="appointment">
                    <option></option>
                    <option>New Appointment</option>
                    <option>Follow Up</option>
                  </select> */}
                </div>
                <div className="d-flex flex-column col">
                  <label className="patientbooking-input-label ms-3">
                    Appointment Date
                  </label>
                  <DatePicker
                    selected={startDateReschedule}
                    minDate={new Date()}
                    onChange={handleDateChange}
                    customInput={<CustomInput />}
                  />
                </div>
              </div>
              <div className="d-flex mt-2 row">
              <div className="d-flex flex-column col">
                      <label className="patientbooking-input-label">
                      Clinic Physio Asset
                      </label> 
                  
                      <p className="patientbooking-2col-patient-input">{specificPatient.physioAsset ? specificPatient.physioAsset : "-" }</p>
                    </div>
              <div className="d-flex flex-column col">
                      <label className="patientbooking-input-label">
                        Select Reschedule Timing
                      </label> 
                  
                      <input
                        className="patientbooking-2col-patient-input"
                        type="time"
                      
                        onChange={(e) => setPatientSlotTiming(e.target.value)}
                      ></input>
                    </div>

              </div>
              <div className="d-flex mt-2 row">
              <div className="d-flex flex-column col">
                      <label className="patientbooking-input-label">
                      Referral Source
                      </label> 
                  
                      <p className="reschedule-appointment-para">{specificPatient.referralSource }</p>
                    </div>
              <div className="d-flex flex-column col">
                      <label className="patientbooking-input-label">
                       Visit Reason
                      </label> 
                  
                      <p className="reschedule-appointment-para">{specificPatient.visitReason }</p>
                    </div>

              </div>
             
              <div className="d-flex mt-3 gap-2">
                <div className="d-flex align-items-center patientbooking-checkbox-input">
                  <input
                    className="patientbooking-input-checkbox me-1"
                    type="checkbox"
                  />
                  <label>Send SMS</label>
                </div>
                <div className="d-flex align-items-center patientbooking-checkbox-input">
                  <input
                    className="patientbooking-input-checkbox me-1"
                    type="checkbox"
                  />
                  <label>Send Email</label>
                </div>
                <div className="d-flex align-items-center patientbooking-checkbox-input">
                  <input
                    className="patientbooking-input-checkbox me-1"
                    type="checkbox"
                  />
                  <label>Send Whatsapp</label>
                </div>
              </div>
              <div className="mt-5">
                <button className="patientbooking-addpatient-button">
                  {" "}
                  + ADD PATIENT
                </button>
                <button className="patientbooking-bookappointment-button" onClick={handleRescheduleFormSubmit}>
                  {" "}
                  BOOK APOINTMENT
                </button>
              </div>
            </div>
   </div>


      </Modal>
    </div>
  );
};

export default RescheduleAppointment;
