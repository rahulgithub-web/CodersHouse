import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import React from "react";
import './App.css';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
