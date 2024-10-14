import React from "react";
import "./Doctordetail.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { MdCancel } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Doctordetails = ({ getDataFromDocDetail }) => {
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];
  const docpageNavigate = useNavigate();
  const handlecanceldoc = () => {
    docpageNavigate("/home/doctor");
  };

  const CustomInput = ({ value, onClick }) => (
    <button className="dashboard-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [docData, setDocData] = useState([]);

  const [sunMorn, setSunMorn] = useState("AM");
  const [sunEve, setSunEve] = useState("AM");
  const [monMorn, setMonMorn] = useState("AM");
  const [monEve, setMonEve] = useState("AM");
  const [tueMorn, setTueMorn] = useState("AM");
  const [tueEve, setTueEve] = useState("AM");
  const [wedMorn, setWedMorn] = useState("AM");
  const [wedEve, setWedEve] = useState("AM");
  const [thurMorn, setThurMorn] = useState("AM");
  const [thurEve, setThurEve] = useState("AM");
  const [friMorn, setFriMorn] = useState("AM");
  const [friEve, setFriEve] = useState("AM");
  const [satMorn, setSatMorn] = useState("AM");
  const [satEve, setSatEve] = useState("AM");
  const [docName, setDocName] = useState("");
  const [docExp, setDocExp] = useState("");
  const [docSpl, setDocSpl] = useState("");
  const [docEmail, setDocEmail] = useState("");
  const [docReg, setDocReg] = useState("");
  const [docDob, setDocDob] = useState("");
  const [phone, setPhone] = useState("");
  const [docLocation, setDocLocation] = useState("");
  const [docMale, setDocMale] = useState(false);
  const [docFemale, setDocFemale] = useState(false);
  const [docFee, setDocFee] = useState("");
  const [docEdu, setDocEdu] = useState("M.B.B.S, Md");
  const [docAchieve, setDocAchieve] = useState("");
  const [docClinic, setDocClinic] = useState("Spine Clinics");

  const handleSave = () => {
    const data = {
      name: docName,
      experience: docExp,
      specialization: docSpl,
      email: docEmail,
      reg_no: docReg,
      dob: docDob,
      phone: phone,
      location: docLocation,
      gender: docMale ? "Male" : "Female",
      fee: docFee,
      education: docEdu,
      achievements: docAchieve,
      clinic: docClinic,
    };
    setDocData([...docData, data]);
    const fullDocData = docData;
    getDataFromDocDetail(fullDocData);
  };

  const handleSunMorn = () => {
    setSunMorn(sunMorn === "AM" ? "PM" : "AM");
  };
  const handleSunEve = () => {
    setSunEve(sunEve === "AM" ? "PM" : "AM");
  };
  const handleMonMorn = () => {
    setMonMorn(monMorn === "AM" ? "PM" : "AM");
  };
  const handleMonEve = () => {
    setMonEve(monEve === "AM" ? "PM" : "AM");
  };
  const handleTueMorn = () => {
    setTueMorn(tueMorn === "AM" ? "PM" : "AM");
  };
  const handleTueEve = () => {
    setTueEve(tueEve === "AM" ? "PM" : "AM");
  };
  const handleWedMorn = () => {
    setWedMorn(wedMorn === "AM" ? "PM" : "AM");
  };
  const handleWedEve = () => {
    setWedEve(wedEve === "AM" ? "PM" : "AM");
  };
  const handleThurMorn = () => {
    setThurMorn(thurMorn === "AM" ? "PM" : "AM");
  };
  const handleThurEve = () => {
    setThurEve(thurEve === "AM" ? "PM" : "AM");
  };
  const handleFriMorn = () => {
    setFriMorn(friMorn === "AM" ? "PM" : "AM");
  };
  const handleFriEve = () => {
    setFriEve(friEve === "AM" ? "PM" : "AM");
  };
  const handleSatMorn = () => {
    setSatMorn(satMorn === "AM" ? "PM" : "AM");
  };
  const handleSatEve = () => {
    setSatEve(satEve === "AM" ? "PM" : "AM");
  };
  return (
    <div className="doctor-detail-container ">
      {" "}
      <div className="row d-flex justify-content-center">
        <div className="col docdetail-1col">
          <p className="doctor-detail-text">Doctor details</p>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Doctor Name</label>
            <input
              onChange={(e) => setDocName(e.target.value)}
              className="docdetail-input"
              value={docName}
              type="text"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Experience</label>
            <input
              onChange={(e) => setDocExp(e.target.value)}
              className="docdetail-input"
              value={docExp}
              type="text"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">E Mail ID</label>
            <input
              onChange={(e) => setDocEmail(e.target.value)}
              className="docdetail-input"
              value={docEmail}
              type="email"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Date Of Birth</label>
            <DatePicker
              selected={docDob}
              onChange={(date) => setDocDob(date)}
              customInput={<CustomInput />}
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Location</label>
            <input
              onChange={(e) => setDocLocation(e.target.value)}
              value={docLocation}
              className="docdetail-input"
              type="text"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="docdetail-input-label">Doctor Fees</label>
            <div className="docdetail-input-wrapper">
              <span className="docdetail-rs"> Rs.</span>
              <input
                onChange={(e) => setDocFee(e.target.value)}
                value={docFee}
                type="text"
                className="docdetail-rs-input"
              />
            </div>
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Achievements</label>
            <input
              onChange={(e) => setDocAchieve(e.target.value)}
              value={docAchieve}
              className="docdetail-input"
              type="text"
            />
          </div>
        </div>
        <div className="col docdetail-2col">
          <div className="d-flex justify-content-end align-items-center">
            <div className="docdetail-docimg-pencil">
              <img
                className=" profile-doc-image m-2"
                src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "75px", height: "75px" }}
              ></img>
              <FaPencil className="docdetail-penicl-icon" />
            </div>
            <MdCancel
              onClick={handlecanceldoc}
              className="docdetail-cancel-icon"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Specialist</label>
            <input
              onChange={(e) => setDocSpl(e.target.value)}
              value={docSpl}
              className="docdetail-input"
              type="text"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">
              Medical Registration No
            </label>
            <input
              onChange={(e) => setDocReg(e.target.value)}
              className="docdetail-input"
              value={docReg}
              type="text"
            />
          </div>

          <div className="d-flex flex-column">
            <label className="docdetail-input-label">Mobile No</label>
            <div className="docdetail-input-wrapper">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="country-selector"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
              <input
                //   className="profile-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Gender</label>
            <div className="d-flex justify-content-evenly align-items-center docdetail-gender-registration">
              <div className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => setDocMale(!docMale)}
                  checked={docMale}
                  id="Gender"
                  name="Gender"
                  value="male"
                />
                <label for="Gender" className="ms-2">
                  Male
                </label>
              </div>
              <div className="docdetail-vertical-line"></div>
              <div className="d-flex">
                <input
                  type="checkbox"
                  id="Gender"
                  name="Gender"
                  value="female"
                  onChange={() => setDocFemale(!docFemale)}
                  checked={docFemale}
                />
                <label for="Gender" className="ms-2">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column ">
            <label className="docdetail-input-label" for="Education">
              Education
            </label>
            <select
              value={docEdu}
              onChange={(e) => setDocEdu(e.target.value)}
              name="Education"
              id="education"
            >
              <option>M.B.B.S, Md</option>
              <option>M.B.B.S ENT</option>
              <option>BDS</option>
              <option>PHYSIO</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label className="docdetail-input-label" for="Clinic">
              Clinic Name
            </label>
            <select
              value={docClinic}
              onChange={(e) => setDocClinic(e.target.value)}
              name="clinic"
              id="clinic"
            >
              <option>Spine Clinics</option>
              <option>Nuero Clinic</option>
              <option>General Clinic</option>
              <option>Cardio Clinic</option>
            </select>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column doctordetail-days-div mt-3 ">
        <label className="docdetail-input-label">Days</label>
        <div className="d-flex justify-content-evenly align-items-center docdetail-days">
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Sunday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="female" />
            <label for="Gender">Monday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Tuesday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Wednesday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Thursday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Friday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Saturday</label>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column doctordetail-time-div mt-3">
        <label className="docdetail-input-label">Time</label>
        <div className="d-flex   align-items-center docdetail-medical-registration py-1">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Gender" className="me-1">
                Sunday
              </label>
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    width: "22px",
                  }}
                  onClick={handleSunMorn}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 docdetail-am-to">{sunMorn}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className="docdetail-am-to ">To</span>
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  style={{ marginLeft: "3px", width: "22px" }}
                  onClick={handleSunEve}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">{sunEve}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Gender" className="me-1">
                Monday
              </label>
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleMonMorn}
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    width: "22px",
                  }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0  docdetail-am-to">{monMorn}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className=" docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleMonEve}
                  style={{ marginLeft: "3px", width: "22px" }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">{monEve}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Tuesday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleTueMorn}
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    width: "22px",
                  }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 docdetail-am-to">{tueMorn}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className=" docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleTueEve}
                  style={{ marginLeft: "3px", width: "22px" }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">{tueEve}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Wednesday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button ms-1">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleWedMorn}
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    width: "22px",
                  }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0  docdetail-am-to">{wedMorn}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className=" docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleWedEve}
                  style={{ marginLeft: "3px", width: "22px" }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">{wedEve}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Thursday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleThurMorn}
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    width: "22px",
                  }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0  docdetail-am-to">{thurMorn}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className=" docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleThurEve}
                  style={{ marginLeft: "3px", width: "22px" }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">{thurEve}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Friday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleFriMorn}
                  style={{
                    width: "22px",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 docdetail-am-to">{friMorn}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className=" docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleFriEve}
                  style={{ marginLeft: "3px", width: "22px" }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">{friEve}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="docdetail-time-vertical-line"></div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label for="Day" className="me-1">
                Saturday
              </label>
              <input type="checkbox" id="Day" name="Day" value="Day" />
              <button className="docdetail-add-button">ADD</button>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleSatMorn}
                  style={{
                    width: "22px",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow " />
                  <p className="mb-0 docdetail-am-to">{satMorn}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
              <span className=" docdetail-am-to">To</span>
              <div className="d-flex align-items-center">
                <input
                  className="docdetail-time"
                  type="text"
                  placeholder="00:00"
                  maxLength={"5"}
                />
                <div
                  onClick={handleSatEve}
                  style={{ width: "22px", marginLeft: "3px" }}
                >
                  <BiSolidUpArrow className="docdetail-timeup-arrow" />
                  <p className="mb-0 docdetail-am-to">{satEve}</p>
                  <BiSolidDownArrow className="docdetail-timedown-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <label className="docdetail-input-label ms-3 mt-3">
          Time Slot Increment
        </label>
        <div className="d-flex mt-2">
          <label className="ms-3 me-2 ">Every</label>
          <input className="doctor-detail-bottom-time-input"></input>
          <select className="doctor-detail-bottom-minute-dropdown">
            <option></option>
            <option>Minute</option>
            <option>Hour</option>
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={handleSave} className="docdetail-save-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default Doctordetails;
