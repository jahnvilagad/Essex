import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Dashboard from './Page/Dashboard'
import Patients from './Page/Patients'
import Gps from './Page/Gps';
import Appointments from './Page/Appointments'
import Letters from './Page/Letters'
import Approved from './Page/Approved-letters-list-sent-email'
import Consultant from './Page/Consultant';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/patients' element={<Patients />}></Route>
          <Route path='/list-generalpractitioner' element={<Gps />}></Route>
          <Route path='/calender-appointment' element={<Appointments />}></Route>
          <Route path='/all-letter-list' element={<Letters />}></Route>
          <Route path='/approved-letters-list-sent-email' element={<Approved />}></Route>
          <Route path='/list-consultant' element={<Consultant />}></Route>          
        </Routes>
      </BrowserRouter>
    </>
  );
}

