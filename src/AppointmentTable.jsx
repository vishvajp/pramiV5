import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { LuRefreshCw } from "react-icons/lu";

export function AppointmentTable({
  showModal,
  showModalPayment,
  selectDoctor,
  startDate,
  selectTreatment,
  toDate,
  chooseDays,
}) {
  const tableHeader = [
    {
      name: "Time",
    },
    {
      name: "Consultation Date",
    },
    {
      name: "Check In",
    },
    {
      name: "Token",
    },
    {
      name: "Patient Name",
    },
    {
      name: "Age & Gender",
    },
    {
      name: "Contact Number",
    },
    {
      name: "Status",
    },
    {
      name: "Doctor Name",
    },
    {
      name: "Treatment",
    },
    {
      name: "Due(INR)",
    },
    {
      name: "",
    },
  ];

  const baseUrl = "https://tabsquareinfotech.com/App/Abinesh_be_work/tsit_prami/build"
  const tableContent = [
    {
      Time: "10.00 AM",
      Date: "10-12-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientname: "Mrs vijayalakshmi a",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "Dr Kumaran",
      treatment: "Consultation",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "10-12-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientname: "Mrs vijayalakshmi s",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "Dr Kumaran",
      treatment: "Consultation",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "08-27-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "Dr Karunakarn",
      treatment: "Asset Physiotherapy",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "09-25-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "Dr senthil",
      treatment: "Asset Physiotherapy",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "08-30-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "Dr senthil",
      treatment: "Physiotherapy",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "08-31-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "Dr senthil",
      treatment: "Physiotherapy",
      due: "23",
      refresh: "",
    },
  ];

  const filteredItem = tableContent.filter((item) => {
    const isDateInRange =
      startDate && toDate
        ? new Date(item.Date) >= startDate && new Date(item.Date) <= toDate
        : true;

    const isDoctor =
      selectDoctor === "All" ||
      (selectDoctor &&
        item.doctorname?.toLowerCase() === selectDoctor.toLowerCase());

    const isTreatment =
      selectTreatment === "All Treatment" ||
      (selectTreatment &&
        item.treatment?.toLowerCase() === selectTreatment.toLowerCase());

    return isDoctor && isDateInRange && isTreatment;
  });
  const RefreshHead = () => {
    return (
      <div className="table-head-refresh">
        <LuRefreshCw className="head-refresh-icon" /> Refresh
      </div>
    );
  };

  const RefreshIcons = () => {
    return (
      <div className="refresh-icons-container">
        <div className="refresh-icons-div">
          <FaHeartbeat
            style={{ height: "23px", width: "23px" }}
            className="refresh-icon"
            onClick={showModal}
          />
        </div>

        <div className="refresh-icons-div">
          <FaRegMoneyBillAlt
            style={{ height: "23px", width: "23px" }}
            className="refresh-icon"
            onClick={showModalPayment}
          />
        </div>

        <div className="refresh-icons-div">
          <FaPlayCircle
            style={{ height: "23px", width: "23px", color: "dodgerblue" }}
            className="refresh-icon"
          />
        </div>

        <div className="refresh-icons-div">
          <GiCancel
            style={{ height: "23px", width: "23px", color: "red" }}
            className="refresh-icon"
          />
        </div>
      </div>
    );
  };
  // console.log(...tableHeader);

  return (
    <Table responsive>
      <thead className="table-head-container">
        <tr>
          {[...tableHeader].map((ele, index) => (
            <th className="table-header-col" key={index}>
              {ele.name === "Time" || ele.name === "Status" ? (
                <>
                  {ele.name}
                  <div className="table-header-div"></div>
                  <BsArrowDownUp />
                </>
              ) : (
                <>
                  {ele.name}
                  {index < tableHeader.length - 1 && (
                    <div className="table-header-div"></div>
                  )}
                </>
              )}

              {index === tableHeader.length - 1 && <RefreshHead />}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredItem.map((element, index) => {
          return (
            <tr className="table-body-row-container" key={index}>
              {Object.keys(element).map((rowData, index) => {
                if (index === Object.keys(element).length - 1) {
                  return <RefreshIcons key={index} />;
                }
                // if (index === Object.keys(element).length - 9) {
                //   return <Inbutton />;
                // }

                return (
                  <td className="table-body-row" key={index}>
                    {element[rowData]}
                    <div className="table-header-div"></div>
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
