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
const App = () => {
  return (
    // <Homepage />
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<DashBoard />}/>
      </Routes>
      </Router>
  )
}

export default App;