import "./customTheme.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./AppLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Patient from "./Patient";
import Preference from "./Preference";
import Login from "./Login";
// import Register from "./Register";
import Profile from "./Profile";
import Doctor from "./Doctor";
import Doctordetails from "./Doctordetails";
import AboutDoctor from "./AboutDoctor";
import Appointment from "./Appointment";
import ParameterModal from "./ParameterModal";
import Basicdetailmodal from "./Basicdetailmodal";
import SearchPatient from "./SearchPatient";
import PatientBooking from "./PatientBooking";
import PastRecords from "./PastRecords";
import MedicalHistory from "./MedicalHistory";
import Patientnotes from "./Patientnotes";
import LabTest from "./LabTest";
import PateientTreatment from "./PateientTreatment";
import PatientConsents from "./PatientConsents";
import PatientFurthercare from "./PatientFurthercare";
import ClinecsRegistration from "./ClinecsRegistration";
import Clinecs from "./Clinecs";
import Lab from "./Lab";
import LabRegistration from "./LabRegistration";
import Pharmacy from "./Pharmacy";
import PharmacyRegistration from "./PharmacyRegistration";
import BranchRegistration from "./BranchRegistration";
import AddNewDoctor from "./AddNewDoctor";
import Paymentmodal from "./Paymentmodal";
import IntroPage from "./IntroPage";
import DoctorFee from "./DoctorFee";
import AboutDoctorEdit from "./AboutDoctorEdit";
import AccessControl from "./AccessControl";
import AdminSetting from "./AdminSetting";
import AddProfileModal from "./AddProfileModal";
import { useState } from "react";
import RegisterPatient from "./RegisterPatient";
import NotesImg from "./NotesImg";
import BillingPage from "./BillingPage";
import MedicineMaster from "./MedicineMaster";
import AddPhysiotherapy from "./AddPhysiotherapy";
import MenuLab from "./MenuLab";
import MenuLabTestStatsModal from "./MenuLabTestStatsModal";
import PhysioMaster from "./PhysioMaster";
import InventoryPage from "./InventoryPage";
import LabTestPage from "./LabTestPage";
import LabTestPatientMoreBut from "./LabTestPatientMoreBut";
import RegistrationPage from "./RegistrationPage";
import HomeCareItem from "./HomeCareItem";
import PatientTreatpage from "./PatientTreatpage";
import { DataProvider } from "./Context/UserDataContext";
import RegistrationMoreDet from "./RegistrationMoreDet";
import RegistrationPatientEdit from "./RegistrationPatientEdit";

function App() {
  const [docDetailData, setDocDetailData] = useState();
  const [introData, setIntroData] = useState("");

  const getDataFromDocDetail = (dataFromDocDetail) => {
    setDocDetailData(dataFromDocDetail);
  };

  const getDetailFromIntro = (dataFromIntro) => {
    setIntroData(dataFromIntro);
  };

  const [adminFieldChoose, setAdminFieldChoose] = useState();

  const adminChoose = (btnName) => {
    setAdminFieldChoose(btnName);
  };

  const baseUrl = "https://tabsquareinfotech.com/TSIT_Clients/vprami";

  console.log(adminFieldChoose);
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <IntroPage
                getDetailFromIntro={getDetailFromIntro}
                baseUrl={baseUrl}
              />
            }
          />
          <Route
            path="/login"
            element={<Login introData={introData} baseUrl={baseUrl} />}
          />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route
            path="/home/dashboard"
            element={
              <AppLayout>
                <HomePage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/patient"
            element={
              <AppLayout>
                <Patient />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/preference"
            element={
              <AppLayout>
                <Preference />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/profile"
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            }
          />
          <Route
            path="/home/admin/accesscontrol"
            element={
              <AppLayout>
                <AccessControl />
              </AppLayout>
            }
          />
          <Route
            path="/home/admin/adminsetting"
            element={
              <AppLayout>
                <AdminSetting adminChoose={adminChoose} />
              </AppLayout>
            }
          />
          <Route
            path="/home/clinics/registration"
            element={
              <AppLayout>
                <ClinecsRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/clinics"
            element={<AppLayout>{/* <Clinecs /> */}</AppLayout>}
          ></Route>
          <Route
            path="/home/doctor"
            element={
              <AppLayout>
                <Doctor />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/edit"
            element={
              <AppLayout>
                <AboutDoctorEdit />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/fees"
            element={
              <AppLayout>
                <DoctorFee />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/details"
            element={
              <AppLayout>
                <Doctordetails getDataFromDocDetail={getDataFromDocDetail} />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/about"
            element={
              <AppLayout>
                <AboutDoctor />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/appointment"
            element={
              <AppLayout>
                <Appointment />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/billing"
            element={
              <AppLayout>
                <BillingPage />
              </AppLayout>
            }
          ></Route>
          <Route path="/home/parameter" element={<ParameterModal />}></Route>
          <Route
            path="/home/basicdetail"
            element={<Basicdetailmodal />}
          ></Route>
          <Route path="/home/searchpatient" element={<SearchPatient />}></Route>
          <Route
            path="/home/patientbooking"
            element={<PatientBooking />}
          ></Route>
          <Route path="/home/addnewdoctor" element={<AddNewDoctor />}></Route>
          <Route path="/home/payment" element={<Paymentmodal />}></Route>
          <Route path="/home/addprofile" element={<AddProfileModal />}></Route>

          <Route
            path="/home/patientadmission"
            element={
              <AppLayout>
                <RegisterPatient></RegisterPatient>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/register/moredetail"
            element={ <AppLayout><RegistrationMoreDet></RegistrationMoreDet></AppLayout>}
          ></Route>
           <Route
            path="/home/register/edit"
            element={ <AppLayout><RegistrationPatientEdit></RegistrationPatientEdit></AppLayout>}
          ></Route>
          <Route
            path="home/patient/pastrecords"
            element={
              <AppLayout>
                <PastRecords />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/medicalhistory"
            element={
              <AppLayout>
                <MedicalHistory />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/notes"
            element={
              <AppLayout>
                <Patientnotes />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/notesimg"
            element={
              <AppLayout>
                <NotesImg />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/labtest"
            element={
              <AppLayout>
                <LabTest />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/medicine"
            element={
              <AppLayout>
                <PateientTreatment />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/consents"
            element={
              <AppLayout>
                <PatientConsents />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/furthercare"
            element={
              <AppLayout>
                <PatientFurthercare />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/template/lab"
            element={
              <AppLayout>
                <MenuLab />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/lab/registration"
            element={
              <AppLayout>
                <LabRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/template/medicine"
            element={
              <AppLayout>
                <MedicineMaster />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/pharmacy"
            element={<AppLayout>{/* <Pharmacy /> */}</AppLayout>}
          ></Route>
          <Route
            path="/home/pharmacy/registration"
            element={
              <AppLayout>
                <PharmacyRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/branch"
            element={
              <AppLayout>
                <BranchRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/physiotheray/registration"
            element={
              <AppLayout>
                <AddPhysiotherapy />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/menumodal"
            element={
              <AppLayout>
                <MenuLabTestStatsModal />
              </AppLayout>
            }
          ></Route>

          <Route
            path="home/template/Physiotherapy"
            element={
              <AppLayout>
                <PhysioMaster />
              </AppLayout>
            }
          ></Route>

          <Route
            path="home/inventory"
            element={
              <AppLayout>
                <InventoryPage />
              </AppLayout>
            }
          ></Route>

          <Route
            path="home/labtest"
            element={
              <AppLayout>
                <LabTestPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/lab/moredetail"
            element={
              <AppLayout>
                <LabTestPatientMoreBut />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/registration"
            element={
              <AppLayout>
                <RegistrationPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/template/homecare"
            element={
              <AppLayout>
                <HomeCareItem />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/treatment"
            element={
              <AppLayout>
                <PatientTreatpage />
              </AppLayout>
            }
          ></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
