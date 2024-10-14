import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutDoctorEdit.css"

const AboutDoctorEdit = () => {

    const aboutDocNavigate = useNavigate()
    const countryCodes = [
        { code: "+91", name: "India" },
        { code: "+1", name: "USA" },
        { code: "+44", name: "UK" },
        // Add more countries as needed
      ];
    
    
    
      const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
      const [phone, setPhone] = useState("");

      const handleAboutNavigate =()=>{
        aboutDocNavigate("/home/doctor/about")
      }
  return (
    <div>
    
    <div className=" m-3 profile-container pt-1">
      <div className="d-flex  profile-red-container">
        <img
          className=" profile-doc-image m-2"
          src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "80px", height: "80px" }}
        ></img>
        <div className="doc-plus-icon">
          <FaPencil />
        </div>

        <div className="profile-docname-div ms-2 ">
          <p className="text-white mt-4 profile-doc-name">
            Dr. Karunakaran S
          </p>
          <span className="text-warning profile-doc-designation">
            spine Surgeon
          </span>
        </div>
        <div className="profile-vertical-line"></div>
        <div className="profile-experience ms-2 ">
          <p className="text-white mt-4 profile-doc-experience">Experience</p>
          <span className="text-warning profile-doc-designation">
            28Year(s)
          </span>
        </div>
        <div className="profile-vertical-line "></div>
        <div className="profile-medical-registration ms-2 ">
          <p className="text-white mt-3 profile-doc-experience">Medical</p>
          <p className="profile-doc-registration">Registration No</p>
          <span className="text-warning profile-doc-designation mb-5">
            000005b
          </span>
        </div>
      </div>
      <div className="d-flex profile-details-div">
        <div className="col-5 profile-detail-1col">
          <div className="d-flex flex-column ">
            <label className="profile-input-label">E Mail ID</label>
            <input
              className="profile-input"
              type="email"
              placeholder="Karunakaran@gmail.com"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="profile-input-label">Date Of Birth</label>
            <input
              className="profile-input"
              type="text"
              placeholder="20.12.1981"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="profile-input-label">Location</label>
            <input
              className="profile-input"
              type="text"
              placeholder="Adayar,Chennai"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="docdetail-input-label">Doctor Fees</label>
            <div className="input-wrapper">
              <span className="docdetail-rs"> Rs.</span>
              <input type="text" className="docdetail-rs-input" />
            </div>
          </div>
        </div>
        <div className="col-5 profile-detail-2col">
          <div className="d-flex flex-column">
            <label className="profile-input-label">Mobile No</label>
            <div className="input-wrapper">
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
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="d-flex flex-column ">
            <label className="profile-input-label" for="Education">
              Education
            </label>
            <input className="profile-input" type="text" />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Gender</label>
            <div className="d-flex justify-content-evenly align-items-center docdetail-medical-registration">
              <div className="d-flex">
                <input
                  type="checkbox"
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
                />
                <label for="Gender" className="ms-2">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column ">
            <label className="profile-input-label" for="Clinic">
              Clinic Name
            </label>
            <input className="profile-input" type="text" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column docabout-days ">
        <label className="docdetail-input-label">Days</label>
        <div className="d-flex justify-content-evenly align-items-center docdetail-days">
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="male" />
            <label for="Gender">Sunday</label>
          </div>
          <div className="docdetail-days-vertical-line"></div>
          <div className="d-flex flex-column">
            <input type="checkbox" id="Gender" name="Gender" value="female" />
            <label for="Gender">Monday </label> 
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
      <div className="d-flex flex-column docabout-time-container ">
        <label className="docdetail-input-label">Time</label>
        <div className="d-flex justify-content-evenly align-items-center docdetail-medical-registration py-1">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label for="Gender" className="me-1">
                Sunday
              </label>
              <p className="mb-0 docabout-time">10 AM to 1 PM</p>
            </div>
            <input type="checkbox" className="docabout-checkbox"></input>
          </div>
          <div className="docabout-time-vertical-line"></div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label for="Gender" className="me-1">
                Monday
              </label>
              <p className="mb-0 docabout-time">10 AM to 1 PM</p>
            </div>
            <input type="checkbox" className="docabout-checkbox"></input>
          </div>
          <div className="docabout-time-vertical-line"></div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label for="Gender" className="me-1">
                Tuesday
              </label>
              <p className="mb-0 docabout-time">10 AM to 1 PM</p>
            </div>
            <input type="checkbox" className="docabout-checkbox"></input>
          </div>
          <div className="docabout-time-vertical-line"></div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label for="Gender" className="me-1">
                Wednesday
              </label>
              <p className="mb-0 docabout-time">10 AM to 1 PM</p>
            </div>
            <input type="checkbox" className="docabout-checkbox"></input>
          </div>
          <div className="docabout-time-vertical-line"></div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label for="Gender" className="me-1">
                Thursday
              </label>
              <p className="mb-0 docabout-time">10 AM to 1 PM</p>
            </div>
            <input type="checkbox" className="docabout-checkbox"></input>
          </div>
          <div className="docabout-time-vertical-line"></div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label for="Gender" className="me-1">
                Friday
              </label>
              <p className="mb-0 docabout-time">10 AM to 1 PM</p>
            </div>
            <input type="checkbox" className="docabout-checkbox"></input>
          </div>
          <div className="docabout-time-vertical-line"></div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label for="Gender" className="me-1">
                Saturday
              </label>
              <p className="mb-0 docabout-time">10 AM to 1 PM</p>
            </div>
            <input type="checkbox" className="docabout-checkbox"></input>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className='aboutdoedit-button'onClick={handleAboutNavigate}>UPDATE</button>
      </div>
    </div>
  </div>
  )
}

export default AboutDoctorEdit