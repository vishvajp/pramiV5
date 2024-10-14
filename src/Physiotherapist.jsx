import React from "react";
import "./Physiotherapist.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PhysiotherapyTable from "./PhysiotherapyTable.jsx";

const Physiotherapist = ({ showPhysiotherapistAdd }) => {
  const handleAdd = () => {
    showPhysiotherapistAdd("PHYSIOTHERAPIST", "");
  };

  return (
    <div>
      <p className="clinic-title">Physiotherapy</p>
      <div className="d-flex w-100   pe-5 align-items-center">
        <div className="clinec-search-container ">
          <p>
            Search Physiotherapist <FaMagnifyingGlass className="text-danger" />
          </p>
          <input
            type="text"
            className="clinecs-header-div-input"
            placeholder="Search by  Name or Location"
          ></input>
        </div>
        <div>
          <button onClick={handleAdd} className="clinecs-addclinecs-button">
            {" "}
            ADD PHYSIOTHERAPIST
          </button>
        </div>
      </div>
      <div className="physitherapy-table-div">
        <PhysiotherapyTable />
      </div>
    </div>
  );
};

export default Physiotherapist;
