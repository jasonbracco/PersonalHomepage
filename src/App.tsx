import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Goalpage from './Goalpage';
import Listpage from './Listpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export function App() {
  
  return (
    <Router>
      <div className="app-container">
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
              path="/Goals"
              element={<Goalpage />}
            />
            <Route
              path="/Lists"
              element={<Listpage />}
            />
            <Route
              path="/NavLink3"
            />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
