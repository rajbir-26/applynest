import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Tips from './pages/Tips';
import TipDetails from './pages/TipDetails';
import About from './pages/About';
import Pricing from './pages/Pricing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/:id" element={<TipDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}