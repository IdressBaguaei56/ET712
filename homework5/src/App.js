import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import Origins from './pages/Origins';
import Villains from './pages/Villains';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">Batman Chronicles</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/origins">Origins</Link></li>
            <li><Link to="/villains">Villains</Link></li>
            <li><Link to="/test-404">404 Page</Link></li>
          </ul>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/origins" element={<Origins />} />
            <Route path="/villains" element={<Villains />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        <footer className="footer">
          <p>© 2025 Batman Chronicles | Homework 5: React Router Application</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;