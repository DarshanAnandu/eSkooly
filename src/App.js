import './App.css';
import { Navigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/Signup/Type-1/SignUp';
import React, { useEffect, useState } from 'react';
import Pages from './components/pages/Pages'
import DivertPages from './components/pages/DivertPages';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );
  console.log(process.env.kkk, 'env')
  useEffect(() => {
    const checkLoggedInStatus = () => {
      setLoggedIn(localStorage.getItem('loggedIn') === 'true');
    };

    checkLoggedInStatus();

    // const intervalId = setInterval(checkLoggedInStatus, 600);

    // return () => clearInterval(intervalId);
  }, [isLoggedIn]);
  return (
    <div className='overflow-auto w-full flex flex-col'>
      {/* <Home /> */}
      <div className='w-full flex h-full'>
        {/* <Routes> */}
        {!isLoggedIn && (
          <div className='w-full flex h-full'><DivertPages /></div>
        )}
        {/* {isLoggedIn && ( */}
        {/* <Route path='/eSkooly/pages' element={<Pages />} /> */}
        {/* )} */}
        {/* </Routes> */}
      </div>
      {isLoggedIn && (
        <div className='flex'>
          <Pages />
        </div>
      )}
    </div>
  );
}

// export default App; 
// {/* <Route path='/eSkooly/Signup' element={<SignUp />} /> */}

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/eSkooly/Signup" />} />
//       <Route path="/eSkooly" element={<Navigate to="/eSkooly/Signup" />} />
//       <Route path="/eSkooly/Signup" element={<SignUp />} />
//       <Route path="/eSkooly/pages" element={<Pages />} />
//     </Routes>
//   );
// };

export default App;