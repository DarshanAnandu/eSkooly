import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/Signup/Type-1/SignUp';
import React, { useEffect, useState } from 'react';
import Pages from './components/pages/Pages'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );
  useEffect(() => {
    const checkLoggedInStatus = () => {
      setLoggedIn(localStorage.getItem('loggedIn') === 'true');
    };

    checkLoggedInStatus();

    // const intervalId = setInterval(checkLoggedInStatus, 600);

    // return () => clearInterval(intervalId);
  }, [isLoggedIn]);
  return (
    <div className='overflow-auto w-full'>
      {/* <Home /> */}
      <div className='w-full'>
        <Routes>
          {/* {!isLoggedIn && ( */}
          <Route path='/eSkooly/Signup' element={<SignUp />} />
          {/* )} */}
          {isLoggedIn && (
            <Route path='/eSkooly/pages' element={<Pages />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;

