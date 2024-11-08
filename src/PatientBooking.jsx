import "./PatientBooking.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";


const PatientBooking = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [eventDate, setEventDate] = useState(null);
  const [treatmentType, setTreatmentType] = useState();
  const [createEve, setCreateEve] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientMobile, setPatientMobile] = useState("");
  const [clinic, setClinic] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [visitReason, setVisitReason] = useState("");
  const [physioAsset, setPhysioAsset] = useState("")
  const [errors, setErrors] = useState({});

  const date = new Date(selectedSlot);
  const customFormattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true // '7:00:00 PM'
  });
  const handleTreatmentType = (e) => {
    setTreatmentType(e.target.value);
  };
  console.log(treatmentType);

  console.log(selectedSlot)

  const CustomInput = ({ value, onClick }) => (
    <button className="patientBooking-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );
  console.log(createEve);
  const data = [
    {
      name: "Dr Karunakaran",
      experience: "2 years",
      specialization: "Spine",
      email: "doc1@gmail.com",
      reg_no: "ab123",
      dob: "05.08.2006",
      phone: "46845332",
      location: "chennai",
      gender: "Male",
      fee: "500",
      education: "MBBS",
      achievements: "Got MEd",
      clinic: "Spine Clinic",
      dayandtime: [
        { day: "monday", time: { from: "6:30PM", to: "10PM" } },
        { day: "tuesday", time: { from: "5PM", to: "9PM" } },
        { day: "wednesday", time: { from: "5PM", to: "9PM" } },
        { day: "thursday", time: { from: "5PM", to: "9PM" } },
        { day: "friday", time: { from: "5PM", to: "9PM" } },
      ],
    },
    {
      name: "Dr Krishnakumar",
      experience: "2 years",
      specialization: "nuero",
      email: "doc1@gmail.com",
      reg_no: "ab123",
      dob: "05.08.2006",
      phone: "46845332",
      location: "chennai",
      gender: "Male",
      fee: "500",
      education: "MBBS",
      achievements: "Got MEd",
      clinic: "Spine Clinic",
      dayandtime: [
        { day: "monday", time: { from: "9AM", to: "11AM" } },
        { day: "tuesday", time: { from: "9AM", to: "11AM" } },
        { day: "wednesday", time: { from: "9AM", to: "11AM" } },
        { day: "thursday", time: { from: "9AM", to: "11AM" } },
        { day: "friday", time: { from: "9AM", to: "11AM" } },
      ],
    },
    {
      name: "Physiotherapy",
      experience: "2 years",
      specialization: "Spine",
      email: "doc1@gmail.com",
      reg_no: "ab123",
      dob: "05.08.2006",
      phone: "46845332",
      location: "chennai",
      gender: "Male",
      fee: "500",
      education: "MBBS",
      achievements: "Got MEd",
      clinic: "Spine Clinic",
      dayandtime: [
        { day: "monday", time: { from: "9AM", to: "10PM" } },
        { day: "tuesday", time: { from: "9AM", to: "10PM" } },
        { day: "wednesday", time: { from: "9AM", to: "10PM" } },
        { day: "thursday", time: { from: "9AM", to: "10PM" } },
        { day: "friday", time: { from: "9AM", to: "10PM" } },

      ],
    },
  ];

   

  const handleDoctorChange = (event) => {
    const doctor = data.find((doc) => doc.name === event.target.value);
    setSelectedDoctor(doctor);
    setAvailableSlots([]);
    setStartDate(null); // Reset slots when doctor changes
  };
  const handleEventDateChange = (date) => {
    setEventDate(date);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    generateSlots(date); // Generate slots for the selected date
  };

  const generateSlots = (date) => {
    if (!selectedDoctor || !date) return;

    const dayOfWeek = date
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();
    const availableTime = selectedDoctor.dayandtime.find(
      (day) => day.day === dayOfWeek
    );

    if (availableTime) {
      const { from, to } = availableTime.time;

      // Parse the start and end times (including minutes)
      const { hours: startHour, minutes: startMinutes } = parseTime(from);
      const { hours: endHour, minutes: endMinutes } = parseTime(to);

      // Create start and end times based on the doctor's availability
      const startTime = new Date(date);
      startTime.setHours(startHour);
      startTime.setMinutes(startMinutes);

      const endTime = new Date(date);
      endTime.setHours(endHour);
      endTime.setMinutes(endMinutes);

      const slots = [];

      // Generate slots in 30-minute intervals
      for (
        let slot = startTime;
        slot < endTime;
        slot.setMinutes(slot.getMinutes() + 30)
      ) {
        slots.push(new Date(slot));
      }

      setAvailableSlots(slots);
    } else {
      setAvailableSlots([]); // No availability for the selected day
    }
  };

  // Function to parse time strings like "11AM", "1PM" into hours
  const parseTime = (timeString) => {
    const [time, modifier] = timeString.split(/(AM|PM)/);
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours < 12) {
      hours += 12; // Convert PM hours to 24-hour format
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0; // Convert 12 AM to 0 hours
    }

    // If minutes are undefined, assume they are zero
    minutes = minutes || 0;

    return { hours, minutes }; // Return an object containing hours and minutes
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      patientName,
      patientMobile,
      clinic,
      doctor: selectedDoctor ? selectedDoctor.name : null,
      appointmentType,
      appointmentDate: startDate ,
      treatmentType,
      referralSource,
      visitReason,
      selectedSlot: customFormattedTime ? customFormattedTime : null,
      physioAsset: physioAsset ? physioAsset : "-",
    };

    const formErrors = {};
    if (!startDate) {
      formErrors.startDate = "Appointment date is required"; // Add error if date is not selected
    }

    // If there are errors, update the state and stop the submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }


    console.log(formData)

    // try {
    //   const response = await axios.post("YOUR_API_ENDPOINT_HERE", formData);
   
    //   console.log("Appointment booked successfully:", response.data);

    //   handleCancel();
    // } catch (error) {
    
    //   console.error("Error booking appointment:", error);
    // }
  };

  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk}>
        {createEve && (
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
                  setCreateEve(true);
                  handleCancel(); // Call the function
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
                <p
                  className="mb-0 patientbooking-createevent-text"
                  onClick={() => setCreateEve(!createEve)}
                >
                  {" "}
                  Create Event
                </p>
              </div>
              <form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col" style={{ padding: "10px 10px 5px 10px" }}>
                  <div className="d-flex flex-column">
                    <label className="patientbooking-input-label">
                      Select Clinic
                    </label>
                    <select
                    required
                     value={clinic}
                     onChange={(e) => setClinic(e.target.value)}
                    name="man" id="appointment">
                      <option></option>
                      <option>Dr. Karunakaran Spine Center</option>
                   
                    </select>
                  </div>
                </div>
                <div className="col" style={{ padding: "10px 25px 5px 10px" }}>
                  <div className="d-flex flex-column">
                    <label className="patientbooking-input-label">
                      Name Of The Patient
                    </label>
                    <input
                      className="patientbooking-2col-patient-input"
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column me-3">
                <div className="d-flex mt-2 row">
                  <div className="d-flex flex-column col">
                    <label className="patientbooking-input-label ms-3">
                      Choose Doctor
                    </label>
                    <select
                      name="doctor"
                      id="doctor"
                      onChange={handleDoctorChange}
                      required
                    >
                      <option value=""></option>
                      {data.map((docname) => (
                        <option key={docname.name} value={docname.name}>
                          {docname.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col" style={{ padding: "0px 10px 5px 10px" }}>
                    <div className="d-flex flex-column">
                      <label className="patientbooking-input-label">
                        Mobile Number
                      </label>
                      <input
                        className="patientbooking-2col-patient-input"
                        type="tel"
                        value={patientMobile}
                        onChange={(e) => setPatientMobile(e.target.value)}
                        required
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-2 row">
                <div className="d-flex flex-column col">
                  <label className="patientbooking-input-label ms-3">
                    Appointment Type
                  </label>
                  <select 
                  required
                   value={appointmentType}
                   onChange={(e) => setAppointmentType(e.target.value)}
                  name="man" id="appointment">
                    <option></option>
                    <option>New Appointment</option>
                    <option>Follow Up</option>
                  </select>
                </div>
                <div className="d-flex flex-column col">
                  <label className="patientbooking-input-label ms-3">
                    Appointment Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    minDate={new Date()}
                    onChange={handleDateChange}
                    customInput={<CustomInput />}
                    // required
                  />
                   {errors.startDate && <p className="error">{errors.startDate}</p>} {/* Show error if date is not selected */}
        
                </div>
              </div>
              <div className="mt-2">
                <div className="d-flex flex-column me-3">
                  <div className="d-flex row">
                    <div className="d-flex flex-column mt-2 col">
                      <label className="patientbooking-input-label ms-3">
                        Treatment Type
                      </label>
                      <select
                      required
                        name="man"
                        id="appointment"
                        onChange={handleTreatmentType}
                      >
                        <option></option>
                        <option value="Consulatation">Consulataiton</option>
                        <option value="Clinic Physio Asset">
                          Clinic Physio Asset
                        </option>
                        <option value="Home Care Asset">Home Care Asset</option>
                      </select>
                    </div>
                    <div className="d-flex flex-column col">
                      {availableSlots.length > 0 ? (
                        <>
                          {/* First Row (4 slots) */}
                          <div className="d-flex flex-wrap mb-1">
                            {availableSlots.map((slot, index) => (
                              <div
                                key={index}
                                className={`patientBooking-time-slot ms-1 mb-1 ${
                                  selectedSlot === slot ? "selected-slot" : ""
                                }`}
                                onClick={() => setSelectedSlot(slot)} // Update the selected slot state
                              >
                                {slot.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </div>
                            ))}
                          </div>

                          {/* Second Row (2 slots) */}
                          {/* {availableSlots.length > 4 && (
                        <div className="d-flex flex-wrap mt-1">
                          {availableSlots.slice(4, 6).map((slot, index) => (
                            <div
                              key={index + 4}
                              className="patientBooking-time-slot ms-1"
                            >
                              {slot.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          ))}
                        </div>
                      )} */}
                        </>
                      ) : (
                        <div className="mt-4">
                          <span className="patientBooking-time-slot">
                            No Slots available
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {treatmentType === "Clinic Physio Asset" && (
                    <div className="d-flex flex-column mt-2 ">
                      <label className="patientbooking-input-label ms-3">
                        Clinic Physio Asset
                      </label>
                      <select id="appointment" value={physioAsset}  onChange={(e)=>setPhysioAsset(e.target.value)}>
                        <option value=""></option>
                        <option value="Super Inductive System">
                          Super Inductive System
                        </option>
                        <option value="Tecar Therapy">Tecar Therapy</option>
                        <option value="Shockwave Therapy">
                          Shockwave Therapy
                        </option>
                        <option value="Dry Needling Therapy">
                          Dry Needling Therapy
                        </option>
                        <option value="Tapping Therapy">Tapping Therapy</option>
                        <option value="Laser Therapy">Laser Therapy</option>
                        <option value="Pens Therapy">Pens Therapy</option>
                        <option value="UST,IFT,TENS,MST,RST,TRACTION">
                          UST,IFT,TENS,MST,RST,TRACTION
                        </option>
                        <option value="Cryotherapy">Cryotherapy</option>
                      </select>
                    </div>
                  )}
                   {treatmentType === "Home Care Asset" && (
                    <div className="d-flex flex-column mt-2 ">
                      <label className="patientbooking-input-label ms-3">
                        Home Care Physio Asset
                      </label>
                      <select id="appointment" value={physioAsset}  onChange={(e)=>setPhysioAsset(e.target.value)}>
                        <option value=""></option>
                        <option value="Super Inductive System">
                          Super Inductive System
                        </option>
                        <option value="Tecar Therapy">Tecar Therapy</option>
                        <option value="Shockwave Therapy">
                          Shockwave Therapy
                        </option>
                        <option value="Dry Needling Therapy">
                          Dry Needling Therapy
                        </option>
                        <option value="Tapping Therapy">Tapping Therapy</option>
                        <option value="Laser Therapy">Laser Therapy</option>
                        <option value="Pens Therapy">Pens Therapy</option>
                        <option value="UST,IFT,TENS,MST,RST,TRACTION">
                          UST,IFT,TENS,MST,RST,TRACTION
                        </option>
                        <option value="Cryotherapy">Cryotherapy</option>
                      </select>
                    </div>
                  )}
                  <div className="d-flex flex-column mt-2 ">
                    <label className="patientbooking-input-label ms-3">
                      Referral Source
                    </label>
                    <input
                      className="patientbooking-referal-input"
                      type="text"
                      value={referralSource}
                      onChange={(e)=>{setReferralSource(e.target.value)}}
                    
                    ></input>
                  </div>

                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 10px" }}
                  >
                    <label className="patientbooking-input-label mt-2">
                      Visit Reason
                    </label>
                  </div>
                  <div>
                    <input
                      className="patientbooking-2col-patient-input"
                      type="text"
                      value={visitReason}
                      onChange={(e)=>{setVisitReason(e.target.value)}}
                    />
                  </div>
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
                <button className="patientbooking-bookappointment-button"  type="submit" >
                  {" "}
                  BOOK APOINTMENT
                </button>
                
              </div>
              </form>
            </div>
          </div>
          
        )}
        {!createEve && (
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
                  setCreateEve(true);
                  setIsModalOpen(false);
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
              <p className="event-top-title">MEDICAL EVENT APPLICATION FORM</p>
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column">
                    <label
                      style={{ marginTop: "10px" }}
                      className="event-label"
                    >
                      Name
                    </label>
                    <input
                      placeholder="First Name"
                      className="event-input"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="col d-flex align-items-end">
                  <div style={{ width: "100%" }}>
                    <input
                      placeholder="Last Name"
                      className="event-input"
                      style={{ width: "100%" }}
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column">
                    <label className="event-label">Date of birth</label>
                    <DatePicker
                      selected={eventDate}
                      onChange={handleEventDateChange}
                      customInput={<CustomInput />}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <label style={{ marginTop: "10px" }} className="event-label">
                    Address
                  </label>
                  <input
                    placeholder="Street Address Line 1"
                    className="event-input"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    placeholder="Street Address Line 2"
                    className="event-input"
                    style={{ width: "100%" }}
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <input
                    placeholder="City"
                    className="event-input"
                    type="text"
                  ></input>
                  <input
                    placeholder="Postal/Zip Code"
                    className="event-input"
                    type="text"
                  ></input>
                </div>
                <div className="col d-flex flex-column">
                  <input
                    placeholder="Region"
                    className="event-input"
                    type="text"
                  ></input>
                  <input
                    placeholder="Country"
                    className="event-input"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <label className="event-label"> Phone Number</label>
                  <input className="event-input" type="text"></input>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="d-flex flex-column">
                    <label className="event-label"> Over 65</label>
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable style={{ marginRight: "10px" }}>Yes</lable>
                      </div>
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable>No</lable>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="d-flex flex-column">
                    <label
                      style={{ marginTop: "10px" }}
                      className="event-label"
                    >
                      {" "}
                      Current Patient
                    </label>
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable style={{ marginRight: "10px" }}>Yes</lable>
                      </div>
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable>No</lable>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="event-cancel-button"
                  onClick={() => setCreateEve(true)}
                >
                  Cancel
                </button>
                <button className="event-submit-button">Submit</button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientBooking;
