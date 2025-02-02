import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./components/ProjectReacta/ac/Activty";
import Contact from "./components/ProjectReacta/cont/contacet2";
import Hero from "./components/ProjectReacta/hero/Contact";
import Team from "./components/ProjectReacta/teams/teams";
import Login from "./components/ProjectReacta/log/signup";
import Signup from "./components/ProjectReacta/sing/login";
import Services from "./components/ProjectReacta/services/services";
// import History from './components/aboutus/history/history';
// import Vision from "./components/aboutus/Vision/vision";
import Dashboard from "./components/aboutus/dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/" element={<><Hero/><Activity/><Services/><Team/><Contact/>    </>} />
        <Route path="/dashboard" element={<Dashboard />} />

        
      </Routes>
    </Router>
  );
}

export default App;
