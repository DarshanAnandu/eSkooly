import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageNav from '../navbars/NavDashboard'
import SideNavPage from '../navbars/SideNavDashboard'
import Dashboard from './InsidePages/Dashboard/Dashboard'
import InstituteProfile from './InsidePages/GeneralSettings/InstituteProfile'
import FeeParticulars from './InsidePages/GeneralSettings/FeeParticulars'
import DetailsForFeeChallan from './InsidePages/GeneralSettings/DetailsForFeeChallan'
import RulesAndRegulations from './InsidePages/GeneralSettings/RulesAndRegulations'
import MarksGradings from './InsidePages/GeneralSettings/MarksGradings'
import ThemeAndLanguage from './InsidePages/GeneralSettings/ThemeAndLanguage'
import AccountSettings from './InsidePages/GeneralSettings/AccountSettings'
import AllClasses from './InsidePages/Classes/AllClasses'
import NewClasses from './InsidePages/Classes/NewClasses'
import EditORDelete from './InsidePages/Classes/EditORDelete'
import ClassesWithSubjects from './InsidePages/Subjects/ClassesWithSubjects'
import AssignSubjects from './InsidePages/Subjects/AssignSubjects'
import AllStudents from './InsidePages/Students/AllStudents'
import AddStudents from './InsidePages/Students/AddStudents'
import AdmissionLetter from './InsidePages/Students/AdmissionLetter'
import IDCard from './InsidePages/Students/IDCard'
import PrintBasicList from './InsidePages/Students/PrintBasicList'
import PromoteStudents from './InsidePages/Students/PromoteStudents'
import AllEmployees from './InsidePages/Employees/AllEmployees'
import AddEmployee from './InsidePages/Employees/AddEmployee'
import JobLetter from './InsidePages/Employees/JobLetter'
import ChartOfAccount from './InsidePages/Accounts/ChartOfAccount'
import AddIncome from './InsidePages/Accounts/AddIncome'
import AddExpense from './InsidePages/Accounts/AddExpense'
import AccountStatement from './InsidePages/Accounts/AccountStatement'
import GenerateBankChallan from './InsidePages/Fees/GenerateBankChallan'
import CollectFee from './InsidePages/Fees/CollectFee'
import FeeSlip from './InsidePages/Fees/FeeSlip'
import FeeDefaulters from './InsidePages/Fees/FeeDefaulters'
import PaySalary from './InsidePages/Salary/PaySalary'
import SalarySlip from './InsidePages/Salary/SalarySlip'
import MarkStudentsAttendance from './InsidePages/Attendance/MarkStudentsAttendance'
import MarkEmployeesAttendance from './InsidePages/Attendance/MarkEmployeesAttendance'
import ClassWiseReport from './InsidePages/Attendance/ClassWiseReport'
import StudentsAttendenceReport from './InsidePages/Attendance/StudentsAttendenceReport'
import EmployeeAttendenceReport from './InsidePages/Attendance/EmployeeAttendenceReport'
import HomeWork from './InsidePages/HomeWork/HomeWork'
import Messaging from './InsidePages/Messaging/Messaging'
import FreeSMSGateWay from './InsidePages/SMS_Services/FreeSMSGateWay'
import LiveClass from './InsidePages/LiveClass/LiveClass'
import CreateNewExam from './InsidePages/Exams/CreateNewExam'
import EditORDeleteExam from './InsidePages/Exams/EditORDeleteExam'
import AddORUpdateExam from './InsidePages/Exams/AddORUpdateExam'
import ResultCard from './InsidePages/Exams/ResultCard'
import CreateNewTest from './InsidePages/ClassTests/CreateNewTest'
import TestResults from './InsidePages/ClassTests/TestResults'
import StudentsReportCard from './InsidePages/Reports/StudentsReportCard'
import StudentInfoReport from './InsidePages/Reports/StudentInfoReport'
import ParentsInfoReport from './InsidePages/Reports/ParentsInfoReport'
import LeaveCertificate from './InsidePages/Certificates/LeaveCertificate'
import CharacterCertificate from './InsidePages/Certificates/CharacterCertificate'
import { useState, useEffect } from 'react';

// import SideNavItems from "./SideNavItems";

// const GeneralSettings = () => {
//   return (
//     <div className='w-full h-full'>
//       {/* <InstitureProfile /> */}
//       {/* <DetailsForFeeChallan /> */}
//       {/* <FeeParticulars /> */}
//       {/* <RulesAndRegulations /> */}
//       {/* <MarksGradings /> */}
//       {/* <ThemeAndLanguage /> */}
//       {/* <AccountSettings /> */}
//       {/* {subtab === 0 ? <InstitureProfile /> :
//         subtab === 1 ? <FeeParticulars /> :
//           subtab === 4 ? <DetailsForFeeChallan /> :
//             subtab === 5 ? <RulesAndRegulations /> :
//               subtab === 6 ? <MarksGradings /> :
//                 subtab === 7 ? <ThemeAndLanguage /> :
//                   subtab === 8 ? <AccountSettings /> :
//                     subtab === 9 ? null : null} */}
//       {/* <Routes>
//         <Route path='/Institute-Profile' element={<InstitureProfile />} />
//         <Route path='/General-Settings/Fee-Particulars' element={<FeeParticulars />} />
//       </Routes> */}
//     </div>
//   );
// }
// const Classes = () => {
//   return (
//     <div className='h-full w-full p-9'>
//       {/* <AllClasses /> */}
//       {/* <NewClasses /> */}
//       {/* <EditORDelete /> */}
//     </div>
//   );
// }

// const Subjects = () => {
//   return (
//     <div className='h-full w-full p-9'>
//       {/* <AssignSubjects /> */}
//       {/* <ClassesWithSubjects /> */}
//     </div>
//   );
// }
// const Students = () => {
//   return (
//     <div className='h-screen w-full overflow-auto p-9' style={{ backgroundColor: '#f3f3f3' }}>
//       {/* <AllStudents /> */}
//       {/* <AddNew /> */}
//       {/* <AdmissionLetter /> */}
//       <IDCard />
//     </div>
//   );
// }


const Pages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState(null);
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  const handleResize = () => {
    setSideBar(window.innerWidth > 990);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // const [selectedTabName, setSelectedTabName] = useState("");
  // const handleTabChange = (tabIndex, tabName) => {
  //   setSelectedTab(tabIndex);
  //   setSelectedTabName(tabName);
  // };
  const handleTabChange = (tabIndex, subTabIndex) => {
    setSelectedTab(tabIndex);
    setSelectedSubTab(subTabIndex);
    // setSelectedTabName(tabName);
  };
  return (
    <div className='bg-gray-100 w-full overflow-hidden'>
      <PageNav sideBar={sideBar} toggle={toggleSideBar} />
      <div className='flex h-screen w-full'>
        {sideBar ? <SideNavPage selectedTab={selectedTab} selectedSubTab={selectedSubTab} onTabChange={handleTabChange} /> : null}
        {/* {SideNavItems.map((items) => (
        <div key={items.idx === selectedTab}>
          {items.goto}
        </div>
      ))} */}
        {/* {console.log(selectedTabName)} */}
        {/* {selectedTabName} */}
        {/* <Dashboard /> */}
        {/* <InstitureProfile /> */}
        {/* <DetailsForFeeChallan /> */}
        {/* <FeeParticulars /> */}
        {/* <GeneralSettings /> */}
        {/* <Classes /> */}
        {/* <Subjects /> */}
        <div className='flex flex-col flex-grow w-full'>
          {/* <Students /> */}
          {/* <Switch>
            <Route path="/general-settings/institute-profile" component={GeneralSettings.InstitureProfile} />
            <Route path="/general-settings/fee-particulars" component={GeneralSettings.FeeParticulars} />
          </Switch> */}
          <Routes>
            {/* <Route path='/eSkooly/Signup' element={<SignUp />} defaultValue /> */}
            <Route path='/eSkooly/Dashboard' element={<Dashboard />} />
            <Route path='/eSkooly/General-Settings/Institute-Profile' element={<InstituteProfile />} />
            <Route path='/eSkooly/General-Settings/Fee-Particulars' element={<FeeParticulars />} />
            <Route path='/eSkooly/General-Settings/Details-For-Fee-Challan' element={<DetailsForFeeChallan />} />
            <Route path='/eSkooly/General-Settings/Rules&Regulations' element={<RulesAndRegulations />} />
            <Route path='/eSkooly/General-Settings/Marks-Grading' element={<MarksGradings />} />
            <Route path='/eSkooly/General-Settings/Theme&Language' element={<ThemeAndLanguage />} />
            <Route path='/eSkooly/General-Settings/Account-Settings' element={<AccountSettings />} />
            <Route path='/eSkooly/Classes/All-Classes' element={<AllClasses />} />
            <Route path='/eSkooly/Classes/New-Class' element={<NewClasses />} />
            <Route path='/eSkooly/Classes/Edit-Or-Delete' element={<EditORDelete />} />
            <Route path='/eSkooly/Subjects/Classes-With-Subjects' element={<ClassesWithSubjects />} />
            <Route path='/eSkooly/Subjects/Assign-Subjects' element={<AssignSubjects />} />
            <Route path='/eSkooly/Students/All-Students' element={<AllStudents />} />
            <Route path='/eSkooly/Students/Add-Students' element={<AddStudents />} />
            <Route path='/eSkooly/Students/Admission-Letter' element={<AdmissionLetter />} />
            <Route path='/eSkooly/Students/Student-ID-Cards' element={<IDCard />} />
            <Route path='/eSkooly/Students/Print-Basic-Lists' element={<PrintBasicList />} />
            <Route path='/eSkooly/Students/Promote-Students' element={<PromoteStudents />} />
            <Route path='/eSkooly/Employees/All-Employees' element={<AllEmployees />} />
            <Route path='/eSkooly/Employees/Add-Employee' element={<AddEmployee />} />
            {/* <Route path='/eSkooly/Employees/Staff-ID-Card' element={<AllEmployees />} /> */}
            <Route path='/eSkooly/Employees/Job-Letter' element={<JobLetter />} />
            <Route path='/eSkooly/Accounts/Chart-Of-Account' element={<ChartOfAccount />} />
            <Route path='/eSkooly/Accounts/Add-Income' element={<AddIncome />} />
            <Route path='/eSkooly/Accounts/Add-Expense' element={<AddExpense />} />
            <Route path='/eSkooly/Accounts/Account-Statement' element={<AccountStatement />} />
            <Route path='/eSkooly/Fees/Generate-Bank-Challan' element={<GenerateBankChallan />} />
            <Route path='/eSkooly/Fees/Collect-Fee' element={<CollectFee />} />
            <Route path='/eSkooly/Fees/Fee-Slip' element={<FeeSlip />} />
            <Route path='/eSkooly/Fees/Fee-Defaulters' element={<FeeDefaulters />} />
            <Route path='/eSkooly/Salary/Pay-Salary' element={<PaySalary />} />
            <Route path='/eSkooly/Salary/Salary-Slip' element={<SalarySlip />} />
            <Route path='/eSkooly/Attendance/Mark-Student-Attendance' element={<MarkStudentsAttendance />} />
            <Route path='/eSkooly/Attendance/Mark-Employee-Attendance' element={<MarkEmployeesAttendance />} />
            <Route path='/eSkooly/Attendance/Class-Wise-Report' element={<ClassWiseReport />} />
            <Route path='/eSkooly/Attendance/Student-Attendance-Report' element={<StudentsAttendenceReport />} />
            <Route path='/eSkooly/Attendance/Employee-Attendance-Report' element={<EmployeeAttendenceReport />} />
            <Route path='/eSkooly/Homework' element={<HomeWork />} />
            <Route path='/eSkooly/Messaging' element={<Messaging />} />
            <Route path='/eSkooly/SMS-Services/Free-SMS-Gateway' element={<FreeSMSGateWay />} />
            <Route path='/eSkooly/Live-Class' element={<LiveClass />} />
            <Route path='/eSkooly/Exams/Create-New-Exam' element={<CreateNewExam />} />
            <Route path='/eSkooly/Exams/Edit-OR-Delete' element={<EditORDeleteExam />} />
            <Route path='/eSkooly/Exams/Add-OR-Update-Exam-Marks' element={<AddORUpdateExam />} />
            <Route path='/eSkooly/Exams/Result-Card' element={<ResultCard />} />
            <Route path='/eSkooly/Class-Test/Create-Class-Test' element={<CreateNewTest />} />
            <Route path='/eSkooly/Class-Test/Test-Results' element={<TestResults />} />
            <Route path='/eSkooly/Reports/Student-Report-Card' element={<StudentsReportCard />} />
            <Route path='/eSkooly/Reports/Student-Info-Report' element={<StudentInfoReport />} />
            <Route path='/eSkooly/Reports/Parents-Info-Report' element={<ParentsInfoReport />} />
            <Route path='/eSkooly/Certificates/Leave-Certificate' element={<LeaveCertificate />} />
            <Route path='/eSkooly/Certificates/Character-Certificate' element={<CharacterCertificate />} />
          </Routes>
        </div>

        {/* {selectedSubTab !== null ? (
          selectedTab === 1 ? (
            <GeneralSettings subtab={selectedSubTab} />
          ) : null
        ) : (
          selectedTab === 0 ? <Dashboard /> : (
            selectedTab === 11 ? <Homework /> : null
          )
        )} */}
      </div>
    </div>
  )
}

export default Pages;
export { Dashboard };