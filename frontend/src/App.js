import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormComponent from './components/forms/FormComponent';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
