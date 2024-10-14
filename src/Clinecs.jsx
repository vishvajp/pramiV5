import React from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";
import "./Clinecs.css";
import { ClinecsTable } from "./ClinecsTable";

const Clinecs = ({ showPhysiotherapistAdd }) => {
  const handleAdd = () => {
    showPhysiotherapistAdd("CLINIC", "");
  };
  return (
    <div className="bg">
      <p className="clinic-title">Clinic Stats</p>
      <div>
        <div className="d-flex w-100   pe-5 align-items-center">
          <div className="clinec-search-container ">
            <p>
              Search Clinics <FaMagnifyingGlass className="text-danger" />
            </p>
            <input
              type="text"
              className="clinecs-header-div-input"
              placeholder="Search by Clinic Name or Location"
            ></input>
          </div>
          <div>
            <button className="clinecs-addclinecs-button" onClick={handleAdd}>
              {" "}
              ADD CLINIC
            </button>
          </div>
        </div>
        <div className="clinecs-table-div">
          <ClinecsTable></ClinecsTable>
        </div>
      </div>
    </div>
  );
};

export default Clinecs;
