import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import InstituteProfile from './components/pages/Pages'
// import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './components/pages/Home';
import Pages from './components/pages/Pages'

function App() {
  return (
    <div className='overflow-auto'>
      {/* <Home /> */}
      <Pages/>
      {/* <Routes> */}
            {/* <Route path='/Dashboard' Component={Dashboard} /> */}
            {/* <Route path='/General-Settings/Institute-Profile' component={GeneralSettings.InstitureProfile} />
            <Route path='/General-Settings/Fee-Particulars' component={Dashboard.FeeParticulars} /> */}
          {/* </Routes> */}
    </div>
  );
}

export default App;

