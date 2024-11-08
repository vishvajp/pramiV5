import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { LuRefreshCw } from "react-icons/lu";
import { AiOutlineHistory } from "react-icons/ai";
import RescheduleAppointment from "./RescheduleAppointment";

export function AppointmentTable({
  showModal,
  showModalPayment,
  selectDoctor,
  startDate,
  selectTreatment,
  toDate,
  chooseDays,
  searchpatient,
}) {
  const [isModalOpenReschdule, setIsModalOpenReschedule] = useState(false);
  const showModalReschdule = () => {
    setIsModalOpenReschedule(true);
  };
  const handleOkReschedule = () => {
    setIsModalOpenReschedule(false);
  };
  const handleCancelReschedule = () => {
    setIsModalOpenReschedule(false);
  };

  const [specificPatient, setSpecificPatient] = useState();

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
    // {
    //   name: "Age & Gender",
    // },
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
      name:"Asset"
    },
    // {
    //   name: "Due(INR)",
    // },
    {
      name:"Appointment Type"
    },
    {
      name:"Referal Source"
    },
    {
      name: "",
    },
  ];

  const baseUrl =
    "https://tabsquareinfotech.com/App/Abinesh_be_work/tsit_prami/build";
  const tableContent = [
    {
      selectedSlot: "10.00 AM",
      appointmentDate: "10-12-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientName: "Mrs vijayalakshmi a",
      age: "23 Y female",
      patientMobile: "213123123",
      status: "started",
      doctor: "Dr Kumaran",
      treatmentType: "Consultation",
      physioAsset:"-",
      due: "23",
      appointmentType:"Follow Up",
      referalSource:"none",
      refresh: "",
      
    },
    {
      selectedSlot: "10.00 AM",
      appointmentDate: "10-12-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientName: "Mrs vijayalakshmi s",
      age: "23 Y female",
      patientMobile: "213123123",
      status: "started",
      doctor: "Dr Kumaran",
      treatmentType: "Consultation",
      physioAsset:"-",
      due: "23",
      appointmentType:"Follow Up",
      referalSource:"none",
      refresh: "",
    },
    {
      selectedSlot: "10.00 AM",
      appointmentDate: "08-27-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientName: "Mrs vijaya",
      age: "23 Y female",
      patientMobile: "213123123",
      status: "started",
      doctor: "Dr Karunakarn",
      treatmentType: "Asset Physiotherapy",
      physioAsset:"Needling Therapy",
      due: "23",
      appointmentType:"Follow Up",
      referalSource:"none",
      refresh: "",
    },
    {
      selectedSlot: "10.00 AM",
      appointmentDate: "09-25-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientName: "Mrs vijaya",
      age: "23 Y female",
      patientMobile: "213123123",
      status: "started",
      doctor: "Dr senthil",
      treatmentType: "Asset Physiotherapy",
      physioAsset:"Needling Therapy",
      due: "23",
      appointmentType:"Follow Up",
      referalSource:"none",
      refresh: "",
    },
    {
      selectedSlot: "10.00 AM",
      appointmentDate: "08-30-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientName: "Mrs vijaya",
      age: "23 Y female",
      patientMobile: "213123123",
      status: "started",
      doctor: "Dr senthil",
      treatmentType: "Physiotherapy",
      physioAsset:"Needling Therapy",
      due: "23",
      appointmentType:"Follow Up",
      referalSource:"none",
      refresh: "",
    },
    {
      selectedSlot: "10.00 AM",
      appointmentDate: "08-31-2024",
      checkin: (
        <div>
          <img
            style={{ width: "28px", height: "32px" }}
            src={`${baseUrl}/loginimages/out.png`}
          ></img>
        </div>
      ),
      token: "23",
      patientName: "Mrs vijaya",
      age: "23 Y female",
      patientMobile: "213123123",
      status: "started",
      doctor: "Dr senthil",
      treatmentType: "Physiotherapy",
      physioAsset:"Needling Therapy",
      due: "23",
      appointmentType:"Follow Up",
      referalSource:"none",
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
        item.doctor?.toLowerCase() === selectDoctor.toLowerCase());

    const isTreatment =
      selectTreatment === "All Treatment" ||
      (selectTreatment &&
        item.treatmentType?.toLowerCase() === selectTreatment.toLowerCase());

    const searchPatientName = searchpatient
      ? item.patientName?.toLowerCase().includes(searchpatient)
      : true;

    return isDoctor && isDateInRange && isTreatment && searchPatientName;
  });
  const RefreshHead = () => {
    return (
      <div className="table-head-refresh">
        <LuRefreshCw className="head-refresh-icon" /> Refresh
      </div>
    );
  };

  const handleSpecPatient = (specElement) => {
    setSpecificPatient(specElement ? specElement : "");
    setIsModalOpenReschedule(true)
  };

  const RefreshIcons = ({ element }) => {
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
        <div className="refresh-icons-div">
          <AiOutlineHistory
            style={{ height: "23px", width: "23px", color: "green" }}
            className="refresh-icon"
            onClick={() => handleSpecPatient(element)}
          />
        </div>
      </div>
    );
  };
  // console.log(...tableHeader);

  return (
    <div>
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
                   if (rowData === 'age' || rowData === 'due') {
                    return null; // Skip rendering this column
                  }
                  if (index === Object.keys(element).length - 1) { 
                    return <RefreshIcons element={element} />;
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
      {specificPatient && <RescheduleAppointment
        isModalOpenReschdule={isModalOpenReschdule}
        handleOkReschedule={handleOkReschedule}
        handleCancelReschedule={handleCancelReschedule}
        setIsModalOpenReschedule={setIsModalOpenReschedule}
        specificPatient={specificPatient}
      ></RescheduleAppointment> }
     
    </div>
  );
}
