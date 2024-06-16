import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gemini from "./components/Gemini";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import FindMentors from "./components/FindMentors";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Gemini" element={<Gemini />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/FindMentors" element={<FindMentors />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* <Sidebar/>
      <Main/>   */}
    </>
  );
};

export default App;
