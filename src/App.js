import './App.css';
import { Navigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/Signup/Type-1/SignUp';
import React, { useEffect, useState } from 'react';
import Pages from './components/pages/Pages'

// function App() {
// const [isLoggedIn, setLoggedIn] = useState(
//   localStorage.getItem('loggedIn') === 'true'
// );
// useEffect(() => {
//   const checkLoggedInStatus = () => {
//     setLoggedIn(localStorage.getItem('loggedIn') === 'true');
//   };

//   checkLoggedInStatus();

//   // const intervalId = setInterval(checkLoggedInStatus, 600);

//   // return () => clearInterval(intervalId);
// }, [isLoggedIn]);
//   return (
//     <div className='overflow-auto w-full'>
//       {/* <Home /> */}
//       <div className='w-full'>
//         {/* <Routes> */}
//           {/* {!isLoggedIn && ( */}
//           {/* <Route path='/eSkooly/Signup' element={<SignUp />} /> */}
//           {/* )} */}
//           {/* {isLoggedIn && ( */}
//             {/* <Route path='/eSkooly/pages' element={<Pages />} /> */}
//           {/* )} */}
//         {/* </Routes> */}
//       </div>
//       <div>
//         <Pages />
//       </div>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/eSkooly/Signup" />} />
      <Route path="/eSkooly/Signup" element={<SignUp />} />
      <Route path="/eSkooly/pages" element={<Pages />} />
    </Routes>
  );
};

export default App;