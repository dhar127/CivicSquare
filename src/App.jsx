import React from 'react'
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import signuppage from "./LoginSignUp";
import LoginSignUp from './LoginSignUp';
const App = () => {
  return (
    // <Homepage />
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<LoginSignUp />} />
      </Routes>
      </Router>
  )
}

export default App;