import "./style/page.css";
import React, { useRef, useState } from "react";
import HomePage from "./userstudy/homePage";
import InteractivePage from "./userstudy/articlePage";
import PublicityPage from "./demo/Demo"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<PublicityPage />} />
          {/* <Route path="/publicity" element={<PublicityPage />} /> */}
          <Route path="/interactive" element={<HomePage />} />
          <Route
            path="/interactive/:pageType/:pageId"
            element={<InteractivePage />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
