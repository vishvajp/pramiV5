import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Doctortable } from "./Doctortable";
import { useNavigate } from "react-router-dom";
const Doctor = () => {
const docDetailNavigate = useNavigate()
const handledocdetail =()=>{
  docDetailNavigate("/home/doctor/details")
}

  return (
    <div>
      <div className="d-flex w-100 justify-content-end mt-3 pe-5">
        <div className="doctor-search-container">
          <p>
            Search Doctors <FaMagnifyingGlass className="text-danger" />
          </p>
          <select name="Education" id="doctoreducation">
            <option value="volvo">M.B.B.S, Md,</option>
            <option value="saab">""</option>
            <option value="opel">""</option>
            <option value="audi">""</option>
          </select>
        </div>
        <div onClick={handledocdetail} className="d-flex flex-row mt-2 align-items-center pe-2 doctor-add">
          <img
            className=" profile-doc-image m-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "60px", height: "60px" }}
          ></img>
          <div className="doc-plus-icon">
            <FaCirclePlus className="doctor-plus-icon" />
          </div>
          <p className="text-white doctor-doc-text">ADD DOCTOR</p>
        </div>
      </div>
      <div className="doc-page-table ">
       
        <Doctortable />
      </div>
    </div>
  );
};

export default Doctor;
