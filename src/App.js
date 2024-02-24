import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/Signup/Type-1/SignUp';
import React, { useState } from 'react';
// import InstituteProfile from './components/pages/Pages'
// import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './components/pages/Home';
import Pages from './components/pages/Pages'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );
  return (
    <div className='overflow-auto w-full'>
      {/* <Home /> */}
      <div className='w-full'>
        <Routes>
          <Route path={`${isLoggedIn ? '/eSkooly' : '/eSkooly/Signup' }`} element={isLoggedIn ? <Pages /> : <SignUp />} defaultValue />
        </Routes>
      </div>
      <div className='hidden'><Pages /></div>
      {/* <Routes> */}
      {/* <Route path='/Dashboard' Component={Dashboard} /> */}
      {/* <Route path='/General-Settings/Institute-Profile' component={GeneralSettings.InstitureProfile} />
            <Route path='/General-Settings/Fee-Particulars' component={Dashboard.FeeParticulars} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;

