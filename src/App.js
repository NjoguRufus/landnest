import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import TitleDeedsPage from './pages/TitleDeedsPage';
import LandDivisionPage from './pages/LandDivisionPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/title-deeds" element={<TitleDeedsPage />} />
            <Route path="/land-division" element={<LandDivisionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
