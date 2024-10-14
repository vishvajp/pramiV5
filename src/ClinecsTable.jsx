import React from "react";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import "./ClinecsTable.css";
export function ClinecsTable() {
  const tableHeader = [
    {
      name: "Registration Number",
    },
    {
      name: "Name of the Hospital / Clinic",
    },
    {
      name: "Doctor Name",
    },
    {
      name: "Location",
    },
    {
      name: "Contact Person",
    },
    {
      name: "Contact Number",
    },
    {
      name: "",
    },
  ];

  const tableContent = [
    {
      registrationNumber: "Ih475",
      hospital: "Apollo",
      doctorName: "Mrs. Monica",
      location: "Chennai",
      contactPerson: "Respected person",
      contactNumber: "9874563211",
      icons: (
        <>
          <FaTrash className="clinicstable-trash-icon" /> <BiEdit className="clinicstable-Edit-icon"/>
        </>
      )
    },
    {
      registrationNumber: "Ih475",
      hospital: "Apollo",
      doctorName: "Mrs. Monica",
      location: "Chennai",
      contactPerson: "Respected person",
      contactNumber: "9874563211",
      icons: (
        <>
          <FaTrash className="clinicstable-trash-icon" /> <BiEdit className="clinicstable-Edit-icon" />
        </>
      )
    },
    {
      registrationNumber: "Ih475",
      hospital: "Apollo",
      doctorName: "Mrs. Monica",
      location: "Chennai",
      contactPerson: "Respected person",
      contactNumber: "9874563211",
      icons: (
        <>
          <FaTrash className="clinicstable-trash-icon" /> <BiEdit className="clinicstable-Edit-icon"/>
        </>
      )
    },
    {
      registrationNumber: "Ih475",
      hospital: "Apollo",
      doctorName: "Mrs. Monica",
      location: "Chennai",
      contactPerson: "Respected person",
      contactNumber: "9874563211",
      icons: (
        <>
          <FaTrash className="clinicstable-trash-icon" /> <BiEdit className="clinicstable-Edit-icon" />
        </>
      )
    },
    {
      registrationNumber: "Ih475",
      hospital: "Apollo",
      doctorName: "Mrs. Monica",
      location: "Chennai",
      contactPerson: "Respected person",
      contactNumber: "9874563211",
      icons: (
        <>
          <FaTrash className="clinicstable-trash-icon"/> <BiEdit className="clinicstable-Edit-icon" />
        </>
      )
    },
    {
      registrationNumber: "Ih475",
      hospital: "Apollo",
      doctorName: "Mrs. Monica",
      location: "Chennai",
      contactPerson: "Respected person",
      contactNumber: "9874563211",
      icons: (
        <>
          <FaTrash className="clinicstable-trash-icon" /> <BiEdit className="clinicstable-Edit-icon" />
        </>
      )
    },
  ];

  return (
    <Table responsive>
      <thead className="patienttable-head-container">
        <tr>
          {[...tableHeader].map((ele, index) => (
          <th className="patienttable-header-col" key={index}>
          {ele.name}
          {index < tableHeader.length - 1 && (
            <>
              <div className="clinicstable-header-div"></div>
            </>
          )}
        </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableContent.map((element) => {
          return (
            <tr className="patienttable-body-row-container">
              {Object.keys(element).map((rowData, cellIndex) => {
             
                return (
                  <td className="patienttable-body-row" key={cellIndex}>
                  {cellIndex < Object.keys(element).length - 1 ? (
                    <>
                      {element[rowData]}
                      <div className="clinicstable-header-div"></div>
                    </>
                  ) : (
                    element[rowData]
                  )}
                </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
