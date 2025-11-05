// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';       
import { DonatePage } from './pages/DonatePage';   
import { JoinPage } from './pages/JoinPage';       

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;