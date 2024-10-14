import React from "react";
import Table from "react-bootstrap/Table";

const PhysiotherapyTable = () => {
  const tableHeader = [
    {
      name: "Name",
    },
    {
      name: "Specialist",
    },
    {
      name: "Mobile Number",
    },
    {
      name: "Email Id",
    },
    {
      name: "Address",
    },
  ];

  const tableContent = [
    {
      name: "Dr Santhosh",
      Specialist: "leg",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A velacherry chennai",
    },
    {
      name: "Dr Santhosh",
      Specialist: "leg",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A velacherry chennai",
    },
    {
      name: "Dr kiran",
      Specialist: "hand",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A velacherry chennai",
    },
    {
      name: "Dr Kiran",
      Specialist: "hand",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A velacherry chennai",
    },
    {
      name: "Dr Gopal",
      Specialist: "hand",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A velacherry chennai",
    },
    {
      name: "Dr Gopal",
      Specialist: "fullBody",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A velacherry chennai",
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
};

export default PhysiotherapyTable;
