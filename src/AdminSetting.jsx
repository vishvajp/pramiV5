import React, { useEffect, useState } from "react";
import "./AdminSetting.css";
import Clinecs from "./Clinecs";
import Lab from "./Lab";
import Pharmacy from "./Pharmacy";
import Doctor from "./Doctor";
import Physiotherapist from "./Physiotherapist";
import AddPhysiotherapy from "./AddPhysiotherapy";
import LabRegistration from "./LabRegistration";
import ClinecsRegistration from "./ClinecsRegistration";
import PharmacyRegistration from "./PharmacyRegistration";

const AdminSetting = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedBtnName, setSelectedBtnName] = useState("CLINIC");
  const [addBtnName, setAddBtnName] = useState("");

  const handleSelectButton = (e, index) => {
    setSelectedBtnName(e.target.value);
    setSelectedButton(index);
  };

  const btnName = [
    { name: "CLINIC" },
    { name: "LAB" },
    { name: "PHARMACY" },
    { name: "DOCTOR" },
    { name: "PHYSIOTHERAPY" },
  ];

  // Function to show the Physiotherapist section
  const showPhysiotherapist = (getdata, setdata) => {
    setSelectedBtnName(getdata);
    setAddBtnName(setdata);
  };

  const showPhysiotherapistAdd = (getdata, setdata) => {
    setAddBtnName(getdata);
    setSelectedBtnName(setdata);
  };
  console.log(addBtnName);
  return (
    <div>
      {selectedBtnName && (
        <div className="d-flex gap-2 justify-content-center">
          {btnName.map((btn, index) => (
            <button
              style={{
                color: selectedButton === index ? "black" : "white",
                backgroundColor: selectedButton === index ? "green" : "red",
              }}
              onClick={(e) => handleSelectButton(e, index)}
              key={index}
              value={btn.name}
              className="adminsetting-button"
            >
              {btn.name}
            </button>
          ))}
        </div>
      )}
      {selectedBtnName === "CLINIC" && (
        <Clinecs showPhysiotherapistAdd={showPhysiotherapistAdd} />
      )}
      {selectedBtnName === "LAB" && (
        <Lab showPhysiotherapistAdd={showPhysiotherapistAdd} />
      )}
      {selectedBtnName === "PHARMACY" && (
        <Pharmacy showPhysiotherapistAdd={showPhysiotherapistAdd} />
      )}
      {selectedBtnName === "DOCTOR" && <Doctor />}
      {selectedBtnName === "PHYSIOTHERAPY" && (
        <Physiotherapist showPhysiotherapistAdd={showPhysiotherapistAdd} />
      )}
      {addBtnName === "PHYSIOTHERAPY" && (
        <AddPhysiotherapy showPhysiotherapist={showPhysiotherapist} />
      )}
      {addBtnName === "CLINIC" && (
        <ClinecsRegistration showPhysiotherapist={showPhysiotherapist} />
      )}
      {addBtnName === "LAB" && (
        <LabRegistration showPhysiotherapist={showPhysiotherapist} />
      )}
      {addBtnName === "PHARMACY" && (
        <PharmacyRegistration showPhysiotherapist={showPhysiotherapist} />
      )}
    </div>
  );
};

export default AdminSetting;
