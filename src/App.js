import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
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

    const intervalId = setInterval(checkLoggedInStatus, 60000);

    return () => clearInterval(intervalId);
  }, [isLoggedIn]);
  return (
    <div className='overflow-auto w-full'>
      {/* <Home /> */}
      <div className='w-full'>
        <Routes>
          <Route path='/eSkooly/Signup' element={!isLoggedIn ? <SignUp /> : <Navigate to="/eSkooly" />} />
          <Route path='/eSkooly' element={isLoggedIn ? <Pages /> : <Navigate to="/eSkooly/Signup" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

