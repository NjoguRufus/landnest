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
      {/* Wrapper with Flexbox and full height */}
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        
        {/* Main content with flex-grow to take available space */}
        <main className="flex-grow container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            {/*nav*/}
            <Route path="/title-deeds" element={<TitleDeedsPage />} />
            <Route path="/land-division" element={<LandDivisionPage />} />
             {/*home*/}
            <Route path="/titledeeds" element={<TitleDeedsPage />} />
            <Route path="/landdivision" element={<LandDivisionPage />} />
          </Routes>
        </main>
        
        {/* Footer remains at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
