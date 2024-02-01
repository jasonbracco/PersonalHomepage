import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'

export function App() {
  return (
    <Router>
      <header className="navbar-container">
        <Navbar />
      </header>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/NavLink1"
          />
          <Route
            path="/NavLink2"
          />
          <Route
            path="/NavLink3"
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
