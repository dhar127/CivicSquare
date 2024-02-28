import React from 'react'
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import signuppage from "./LoginSignUp";
import LoginSignUp from './LoginSignUp';
import  DashBoard  from './DashBoard';
import Maps from './Maps';
import Feedback from './Feedback';
const App = () => {
  return (
    // <Homepage />
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/map" element={<Maps />}/>
        <Route path="/feedback" element={<Feedback />}/> 
      </Routes>
      </Router>
  )
}

export default App;