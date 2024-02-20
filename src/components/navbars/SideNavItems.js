import { AiOutlineHome } from "react-icons/ai";
// import Dashboard from "../pages/Pages";

const SideNavItems = [
    {
        idx: 0,
        name: 'Dashboard',
        icon: <AiOutlineHome color='gray'/>,
        dropdown: false,
        Lock: false,
        goto: '/eSkooly',
    },
    {
        idx: 1,
        name: 'General Settings',
        icon: '',
        dropdown: true,
        drop: false,
        Lock: false,
        subItems: [
            { idx: 110, name: 'Institute Profile', goto: '/eSkooly/General-Settings/Institute-Profile', icon: '' },
            { idx: 111, name: 'Fee Particulars', goto: '/eSkooly/General-Settings/Fee-Particulars', icon: '' },
            { idx: 112, name: 'Fee Structure', icon: '' },
            { idx: 113, name: 'Discount Type', icon: '' },
            { idx: 114, name: 'Details for Fee challan', goto: '/eSkooly/General-Settings/Details-For-Fee-Challan', icon: '' },
            { idx: 115, name: 'Rules and Regulations', goto: '/eSkooly/General-Settings/Rules&Regulations', icon: '' },
            { idx: 116, name: 'Marks Grading', goto: '/eSkooly/General-Settings/Marks-Grading', icon: '' },
            { idx: 117, name: 'Theme & Language', goto: '/eSkooly/General-Settings/Theme&Language', icon: '' },
            { idx: 118, name: 'Account Settings', goto: '/eSkooly/General-Settings/Account-Settings', icon: '' },
            { idx: 119, name: 'Log out', icon: '' }
        ]
    },
    {
        idx: 2,
        name: 'Classes',
        icon: '',
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
        icon: '',
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
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Students', goto: '/eSkooly/Students/All-Students', icon: '' },
            { idx: 1, name: 'Add New', goto: '/eSkooly/Students/Add-Students', icon: '' },
            { idx: 2, name: 'Manage Families', icon: '' },
            { idx: 3, name: 'Active / Inactive', icon: '' },
            { idx: 4, name: 'Admission Letter', goto: '/eSkooly/Students/Admission-Letter', icon: '' },
            { idx: 5, name: 'Student ID Cards', goto: '/eSkooly/Students/Student-ID-Cards', icon: '' },
            { idx: 6, name: 'Print Basic List', goto: '/eSkooly/Students/Print-Basic-Lists', icon: '' },
            { idx: 7, name: 'Promote Students', goto: '/eSkooly/Students/Promote-Students', icon: '' }
        ]
    },
    {
        idx: 5,
        name: 'Employees',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Employees', goto: '/eSkooly/Employees/All-Employees', icon: '' },
            { idx: 1, name: 'Add New', goto: '/eSkooly/Employees/Add-Employee', icon: '' },
            { idx: 2, name: 'Staff ID Cards', goto: '/eSkooly/Employees/Staff-ID-Card', icon: '' },
            { idx: 3, name: 'Job Letter', goto: '/eSkooly/Employees/Job-Letter', icon: '' }
        ]
    },
    {
        idx: 6,
        name: 'Accounts',
        icon: '',
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
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Generate Bank Challan', goto: '/eSkooly/Fees/Generate-Bank-Challan', icon: '' },
            { idx: 1, name: 'Collect Fee', goto: '/eSkooly/Fees/Collect-Fee', icon: '' },
            { idx: 2, name: 'Fee Slip', goto: '/eSkooly/Fees/Fee-Slip', icon: '' },
            { idx: 3, name: 'Fees Defaulters', goto: '/eSkooly/Fees/Fee-Defaulters', icon: '' },
            { idx: 4, name: 'Fees Report', goto: '/eSkooly/Fees/Fee-Report', icon: '' },
            { idx: 5, name: 'Delete Fee', goto: '/eSkooly/Fees/Delete-Fee', icon: '' }
        ]
    },
    {
        idx: 8,
        name: 'Salary',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Pay Salary', goto: '/eSkooly/Salary/Pay-Salary', icon: '' },
            { idx: 1, name: 'Salary Slip', goto: '/eSkooly/Salary/Salary-Slip', icon: '' },
            { idx: 2, name: 'Salary Sheet', goto: '/eSkooly/Salary/Salary', icon: '' },
            { idx: 3, name: 'Salary Report', goto: '/eSkooly/Salary/Pay-Salary', icon: '' }
        ]
    },
    {
        idx: 9,
        name: 'Attendance',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Mark Structure Attendence', goto: '/eSkooly/Attendance/Mark-Student-Attendance', icon: '' },
            { idx: 1, name: 'Mark Employees Attedence', goto: '/eSkooly/Attendance/Mark-Employee-Attendance', icon: '' },
            { idx: 2, name: 'Class Wise Report', goto: '/eSkooly/Attendance/Mark-Student-Attendan', icon: '' },
            { idx: 3, name: 'Student Attendance Report', goto: '/eSkooly/Attendance/Student-Attendance-Report', icon: '' },
            { idx: 4, name: 'Employee Attendance Report', goto: '/eSkooly/Attendance/Employee-Attendance-Report', icon: '' }
        ]
    },
    {
        idx: 10,
        name: 'Timetable',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Weekdays', icon: '' },
            { idx: 1, name: 'Time Periods', icon: '' },
            { idx: 2, name: 'Class Rooms', icon: '' },
            { idx: 3, name: 'Create TimeTable', icon: '' },
            { idx: 4, name: 'Generate for Class', icon: '' },
            { idx: 5, name: 'Generate for Teacher', icon: '' }
        ]
    },
    { idx: 11, name: 'Homework', icon: '', goto: '/eSkooly/Homework', dropdown: false, Lock: false },
    {
        idx: 12,
        name: 'Behaviour & Skills',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Rate Behaviours', goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 1, name: 'Rate Skills', goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 2, name: 'Observations', goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 3, name: 'Affective Domain Rating Report', goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' },
            { idx: 4, name: 'Psycomotor Domain Rating Report', goto: '/eSkooly/Behaviour-&-Skills/Rate-Behaviours', icon: '' }
        ]
    },
    {
        idx: 13,
        name: 'Online Store & POS',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Store Analytics', icon: '' },
            { idx: 1, name: 'Product Categories', icon: '' },
            { idx: 2, name: 'Product Tax', icon: '' },
            { idx: 3, name: 'Products', icon: '' },
            { idx: 4, name: 'New Order', icon: '' },
            { idx: 5, name: 'All Orders', icon: '' }
        ]
    },
    { idx: 14, name: 'WhatsApp', icon: '', dropdown: false, Lock: false },
    { idx: 15, name: 'Messaging', icon: '', goto: '/eSkooly/Messaging', dropdown: false, Lock: false },
    {
        idx: 16,
        name: 'SMS Services',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Free SMS Gateway', goto: '/eSkooly/SMS-Services/Free-SMS-Gateway', icon: '' },
            { idx: 1, name: 'Branded SMS', icon: '' },
            { idx: 2, name: 'SMS Templates', icon: '' }
        ]
    },
    {
        idx: 17,
        name: 'Live Class',
        icon: '',
        goto: '/eSkooly/Live-Class',
        dropdown: false,
        Lock: false
    },
    {
        idx: 18,
        name: 'Question Paper',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Subject Chapters', icon: '' },
            { idx: 1, name: 'Question Bank', icon: '' },
            { idx: 2, name: 'Create Question Paper', icon: '' }
        ]
    },
    {
        idx: 19,
        name: 'Exams',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Create New Exam', goto: '/eSkooly/Exams/Create-New-Exam', icon: '' },
            { idx: 1, name: 'Edit OR Delete', goto: '/eSkooly/Exams/Edit-OR-Delete', icon: '' },
            { idx: 2, name: 'Add / Update Exam Marks', goto: '/eSkooly/Exams/Add-OR-Update-Exam-Marks', icon: '' },
            { idx: 3, name: 'Result Card', goto: '/eSkooly/Exams/Result-Card', icon: '' },
            { idx: 4, name: 'Blank Award List', goto: '/eSkooly/Exams/Blank-Award-List', icon: '' }
        ]
    },
    {
        idx: 20,
        name: 'Class Tests',
        icon: '',
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
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Student Report Card', goto: '/eSkooly/Reports/Student-Report-Card', icon: '' },
            { idx: 1, name: 'Student Info Report', goto: '/eSkooly/Reports/Student-Info-Report', icon: '' },
            { idx: 2, name: 'Parents Info Report', goto: '/eSkooly/Reports/Parents-Info-Report', icon: '' },
            { idx: 3, name: 'Students Monthly Attendance Report', icon: '' },
            { idx: 4, name: 'Staff Monthly Attendance Report', icon: '' },
            { idx: 5, name: 'Fee Collection Report', icon: '' },
            { idx: 6, name: 'Student Progress Report', icon: '' },
            { idx: 7, name: 'Accounts Report', icon: '' },
            { idx: 8, name: 'Customized Reports', icon: '' }
        ]
    },
    {
        idx: 22,
        name: 'Certificates',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Leave Certificate', goto: '/eSkooly/Certificates/Leave-Certificate', icon: '' },
            { idx: 1, name: 'Character Certificate', goto: '/eSkooly/Certificates/Character-Certificate', icon: '' },
            { idx: 2, name: 'Certificate Templates', icon: '' }
        ]
    }
];

export default SideNavItems;