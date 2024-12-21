import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";  // Ensure the correct import

const App = () => {
  return (
    <Router basename="/cgibyanton">
      <Routes>
        {/* Direct the root (/) to the Hero component */}
        <Route path="/" element={<Hero />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
