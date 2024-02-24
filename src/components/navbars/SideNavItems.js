import { AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { TfiRulerPencil } from "react-icons/tfi";
import { GoBook } from "react-icons/go";
import { SlUser } from "react-icons/sl";
import { TfiBriefcase } from "react-icons/tfi";
import { LuWallet } from "react-icons/lu";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdCreditCard } from "react-icons/md";
import { TfiHandOpen } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { LuSlice } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { TfiShoppingCart } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { TfiVideoCamera } from "react-icons/tfi";
import { TfiFiles } from "react-icons/tfi";
import { TfiWrite } from "react-icons/tfi";
import { TfiMedall } from "react-icons/tfi";

// import Dashboard from "../pages/Pages";

const SideNavItems = [
    {
        idx: 0,
        name: 'Dashboard',
        normal_Icon: <AiOutlineHome color='#222' size='14px'/>,
        hovered_Icon: <AiOutlineHome color='#5e81f4'/>,
        dropdown: false,
        Lock: false,
        goto: '/eSkooly/Dashboard',
    },
    {
        idx: 1,
        name: 'General Settings',
        normal_Icon: <CiSettings color="#222" size='18px' />,
        hovered_Icon: <CiSettings color="#5e81f4" size='18px' />,
        dropdown: true,
        drop: false,
        Lock: false,
        subItems: [
            { idx: 110, name: 'Institute Profile', goto: '/eSkooly/General-Settings/Institute-Profile', icon: '' },
            { idx: 111, name: 'Fee Particulars', goto: '/eSkooly/General-Settings/Fee-Particulars', icon: '' },
            { idx: 112, name: 'Fee Structure', Lock: true, icon: '' },
            { idx: 113, name: 'Discount Type', Lock: true, icon: '' },
            { idx: 114, name: 'Details for Fee challan', goto: '/eSkooly/General-Settings/Details-For-Fee-Challan', icon: '' },
            { idx: 115, name: 'Rules and Regulations', Lock: true, goto: '/eSkooly/General-Settings/Rules&Regulations', icon: '' },
            { idx: 116, name: 'Marks Grading', goto: '/eSkooly/General-Settings/Marks-Grading', icon: '' },
            { idx: 117, name: 'Theme & Language', Lock: true, goto: '/eSkooly/General-Settings/Theme&Language', icon: '' },
            { idx: 118, name: 'Account Settings', goto: '/eSkooly/General-Settings/Account-Settings', icon: '' },
            { idx: 119, name: 'Log out', goto: '/eSkooly/General-Settings/Log-out', icon: '' }
        ]
    },
    {
        idx: 2,
        name: 'Classes',
        normal_Icon: <TfiRulerPencil color="#222" size='14px' />,
        hovered_Icon: <TfiRulerPencil color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Classes', goto: '/eSkooly/Classes/All-Classes', icon: '' },
            { idx: 1, name: 'New Class', goto: '/eSkooly/Classes/New-Class', icon: '' },
            { idx: 2, name: 'Edit OR Delete', goto: '/eSkooly/Classes/Edit-Or-Delete', icon: '' }
        ]
    },
    {
        idx: 3,
        name: 'Subjects',
        normal_Icon: <GoBook color="#222" size='14px' />,
        hovered_Icon: <GoBook color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Classes with Subjects', goto: '/eSkooly/Subjects/Classes-With-Subjects', icon: '' },
            { idx: 1, name: 'Assign Subjects', goto: '/eSkooly/Subjects/Assign-Subjects', icon: '' }
        ]
    },
    {
        idx: 4,
        name: 'Students',
        normal_Icon: <SlUser color="#222" size='14px' />,
        hovered_Icon: <SlUser color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Students', goto: '/eSkooly/Students/All-Students', icon: '' },
            { idx: 1, name: 'Add New', goto: '/eSkooly/Students/Add-Students', icon: '' },
            { idx: 2, name: 'Manage Families', Lock: true, icon: '' },
            { idx: 3, name: 'Active / Inactive', Lock: true, icon: '' },
            { idx: 4, name: 'Admission Letter', goto: '/eSkooly/Students/Admission-Letter', icon: '' },
            { idx: 5, name: 'Student ID Cards', goto: '/eSkooly/Students/Student-ID-Cards', icon: '' },
            { idx: 6, name: 'Print Basic List', goto: '/eSkooly/Students/Print-Basic-Lists', icon: '' },
            { idx: 7, name: 'Promote Students', goto: '/eSkooly/Students/Promote-Students', icon: '' }
        ]
    },
    {
        idx: 5,
        name: 'Employees',
        normal_Icon: <TfiBriefcase color="#222" size='14px' />,
        hovered_Icon: <TfiBriefcase color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Employees', goto: '/eSkooly/Employees/All-Employees', icon: '' },
            { idx: 1, name: 'Add New', goto: '/eSkooly/Employees/Add-Employee', icon: '' },
            { idx: 2, name: 'Staff ID Cards', Lock: true, goto: '/eSkooly/Employees/Staff-ID-Card', icon: '' },
            { idx: 3, name: 'Job Letter', goto: '/eSkooly/Employees/Job-Letter', icon: '' }
        ]
    },
    {
        idx: 6,
        name: 'Accounts',
        normal_Icon: <LuWallet color="#222" size='14px' />,
        hovered_Icon: <LuWallet color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Chart Of Account', goto: '/eSkooly/Accounts/Chart-Of-Account', icon: '' },
            { idx: 1, name: 'Add Income', goto: '/eSkooly/Accounts/Add-Income', icon: '' },
            { idx: 2, name: 'Add Expense', goto: '/eSkooly/Accounts/Add-Expense', icon: '' },
            { idx: 3, name: 'Account Statement', goto: '/eSkooly/Accounts/Account-Statement', icon: '' }
        ]
    },
    {
        idx: 7,
        name: 'Fees',
        normal_Icon: <FaRegMoneyBill1 color="#222" size='14px' />,
        hovered_Icon: <FaRegMoneyBill1 color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Generate Bank Challan', goto: '/eSkooly/Fees/Generate-Bank-Challan', icon: '' },
            { idx: 1, name: 'Collect Fee', goto: '/eSkooly/Fees/Collect-Fee', icon: '' },
            { idx: 2, name: 'Fee Slip', goto: '/eSkooly/Fees/Fee-Slip', icon: '' },
            { idx: 3, name: 'Fees Defaulters', goto: '/eSkooly/Fees/Fee-Defaulters', icon: '' },
            { idx: 4, name: 'Fees Report', Lock: true, goto: '/eSkooly/Fees/Fee-Report', icon: '' },
            { idx: 5, name: 'Delete Fee', Lock: true, goto: '/eSkooly/Fees/Delete-Fee', icon: '' }
        ]
    },
    {
        idx: 8,
        name: 'Salary',
        normal_Icon: <MdCreditCard color="#222" size='14px' />,
        hovered_Icon: <MdCreditCard color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Pay Salary', goto: '/eSkooly/Salary/Pay-Salary', icon: '' },
            { idx: 1, name: 'Salary Slip', goto: '/eSkooly/Salary/Salary-Slip', icon: '' },
            { idx: 2, name: 'Salary Sheet', Lock: true, goto: '/eSkooly/Salary/Salary', icon: '' },
            { idx: 3, name: 'Salary Report', Lock: true, goto: '/eSkooly/Salary/Salary-Report', icon: '' }
        ]
    },
    {
        idx: 9,
        name: 'Attendance',
        normal_Icon: <TfiHandOpen color="#222" size='14px' />,
        hovered_Icon: <TfiHandOpen color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Mark Structure Attendence', goto: '/eSkooly/Attendance/Mark-Student-Attendance', icon: '' },
            { idx: 1, name: 'Mark Employees Attedence', goto: '/eSkooly/Attendance/Mark-Employee-Attendance', icon: '' },
            { idx: 2, name: 'Class Wise Report', goto: '/eSkooly/Attendance/Class-Wise-Report', icon: '' },
            { idx: 3, name: 'Student Attendance Report', goto: '/eSkooly/Attendance/Student-Attendance-Report', icon: '' },
            { idx: 4, name: 'Employee Attendance Report', goto: '/eSkooly/Attendance/Employee-Attendance-Report', icon: '' }
        ]
    },
    {
        idx: 10,
        name: 'Timetable',
        normal_Icon: <CiCalendar color="#222" size='14px' />,
        hovered_Icon: <CiCalendar color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Weekdays', Lock: true, icon: '' },
            { idx: 1, name: 'Time Periods', Lock: true, icon: '' },
            { idx: 2, name: 'Class Rooms', Lock: true, icon: '' },
            { idx: 3, name: 'Create TimeTable', Lock: true, icon: '' },
            { idx: 4, name: 'Generate for Class', Lock: true, icon: '' },
            { idx: 5, name: 'Generate for Teacher', Lock: true, icon: '' }
        ]
    },
    { idx: 11, name: 'Homework', normal_Icon: <LuSlice color="#222" size='14px' />, hovered_Icon: <LuSlice color="#5e81f4" size='14px' />, goto: '/eSkooly/Homework', dropdown: false, Lock: false },
    {
        idx: 12,
        name: 'Behaviour & Skills',
        normal_Icon: <FaRegEye color="#222" size='14px' />,
        hovered_Icon: <FaRegEye color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Rate Behaviours', Lock: true, goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 1, name: 'Rate Skills', Lock: true, goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 2, name: 'Observations', Lock: true, goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 3, name: 'Affective Domain Rating Report', Lock: true, goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 4, name: 'Psycomotor Domain Rating Report', Lock: true, goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' }
        ]
    },
    {
        idx: 13,
        name: 'Online Store & POS',
        normal_Icon: <TfiShoppingCart color="#222" size='14px' />,
        hovered_Icon: <TfiShoppingCart color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Store Analytics', Lock: true, icon: '' },
            { idx: 1, name: 'Product Categories', Lock: true, icon: '' },
            { idx: 2, name: 'Product Tax', Lock: true, icon: '' },
            { idx: 3, name: 'Products', Lock: true, icon: '' },
            { idx: 4, name: 'New Order', Lock: true, icon: '' },
            { idx: 5, name: 'All Orders', Lock: true, icon: '' }
        ]
    },
    { idx: 14, name: 'WhatsApp', normal_Icon: <FaWhatsapp color="#222" size='14px' />, hovered_Icon: <FaWhatsapp color="#5e81f4" size='14px' />, dropdown: false, Lock: true },
    { idx: 15, name: 'Messaging', normal_Icon: <TfiCommentAlt color="#222" size='14px' />, hovered_Icon: <TfiCommentAlt color="#5e81f4" size='14px' />, goto: '/eSkooly/Messaging', dropdown: false, Lock: false },
    {
        idx: 16,
        name: 'SMS Services',
        normal_Icon: <MdOutlineEmail color="#222" size='14px' />,
        hovered_Icon: <MdOutlineEmail color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Free SMS Gateway', goto: '/eSkooly/SMS-Services/Free-SMS-Gateway', icon: '' },
            { idx: 1, name: 'Branded SMS', Lock: true, icon: '' },
            { idx: 2, name: 'SMS Templates', Lock: true, icon: '' }
        ]
    },
    {
        idx: 17,
        name: 'Live Class',
        normal_Icon: <TfiVideoCamera color="#222" size='14px' />,
        hovered_Icon: <TfiVideoCamera color="#5e81f4" size='14px' />,
        goto: '/eSkooly/Live-Class',
        dropdown: false,
        Lock: false
    },
    {
        idx: 18,
        name: 'Question Paper',
        normal_Icon: <TfiFiles color="#222" size='14px' />,
        hovered_Icon: <TfiFiles color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Subject Chapters', Lock: true, icon: '' },
            { idx: 1, name: 'Question Bank', Lock: true, icon: '' },
            { idx: 2, name: 'Create Question Paper', Lock: true, icon: '' }
        ]
    },
    {
        idx: 19,
        name: 'Exams',
        normal_Icon: <TfiWrite color="#222" size='14px' />,
        hovered_Icon: <TfiWrite color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Create New Exam', goto: '/eSkooly/Exams/Create-New-Exam', icon: '' },
            { idx: 1, name: 'Edit OR Delete', goto: '/eSkooly/Exams/Edit-OR-Delete', icon: '' },
            { idx: 2, name: 'Add / Update Exam Marks', goto: '/eSkooly/Exams/Add-OR-Update-Exam-Marks', icon: '' },
            { idx: 3, name: 'Result Card', goto: '/eSkooly/Exams/Result-Card', icon: '' },
            { idx: 4, name: 'Blank Award List', goto: '/eSkooly/Exams/Blank-Award-List', Lock: true, icon: '' }
        ]
    },
    {
        idx: 20,
        name: 'Class Tests',
        normal_Icon: <TfiFiles color="#222" size='14px' />,
        hovered_Icon: <TfiFiles color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Create New Test', goto: '/eSkooly/Class-Test/Create-Class-Test', icon: '' },
            { idx: 1, name: 'Test Result', goto: '/eSkooly/Class-Test/Test-Results', icon: '' }
        ]
    },
    {
        idx: 21,
        name: 'Reports',
        normal_Icon: <TfiFiles color="#222" size='14px' />,
        hovered_Icon: <TfiFiles color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Student Report Card', goto: '/eSkooly/Reports/Student-Report-Card', icon: '' },
            { idx: 1, name: 'Student Info Report', goto: '/eSkooly/Reports/Student-Info-Report', icon: '' },
            { idx: 2, name: 'Parents Info Report', goto: '/eSkooly/Reports/Parents-Info-Report', icon: '' },
            { idx: 3, name: 'Students Monthly Attendance Report', Lock: true, icon: '' },
            { idx: 4, name: 'Staff Monthly Attendance Report', Lock: true, icon: '' },
            { idx: 5, name: 'Fee Collection Report', Lock: true, icon: '' },
            { idx: 6, name: 'Student Progress Report', Lock: true, icon: '' },
            { idx: 7, name: 'Accounts Report', Lock: true, icon: '' },
            { idx: 8, name: 'Customized Reports', Lock: true, icon: '' }
        ]
    },
    {
        idx: 22,
        name: 'Certificates',
        normal_Icon: <TfiMedall color="#222" size='14px' />,
        hovered_Icon: <TfiMedall color="#5e81f4" size='14px' />,
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Leave Certificate', goto: '/eSkooly/Certificates/Leave-Certificate', icon: '' },
            { idx: 1, name: 'Character Certificate', goto: '/eSkooly/Certificates/Character-Certificate', icon: '' },
            { idx: 2, name: 'Certificate Templates', Lock: true, icon: '' }
        ]
    }
];

export default SideNavItems;