import React from 'react';
import { FaMapSigns, FaRuler, FaBuilding, FaFileAlt } from 'react-icons/fa'; // Importing icons
import Button from '../components/Button';

const LandDivisionPage = () => {
  // Function to open WhatsApp link
  const openWhatsApp = () => {
    const message = 'Hi, I am interested in your land division services. Can I get more information about it?';
    const url = `https://wa.me/254720259827?text=${encodeURIComponent(message)}`; // Correct link format
    window.open(url, '_blank'); // Opens WhatsApp in a new tab
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Land Division Services</h2>
      <p className="mb-8">We offer expert land division services to help you maximize your property's potential.</p>

      {/* Cards for Land Division Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:bg-gray-100 transition-all"
          onClick={openWhatsApp} // Calls the function when the card is clicked
        >
          <FaMapSigns className="text-4xl mb-4 text-blue-600" /> {/* Icon for Subdivision Planning */}
          <h3 className="text-xl font-semibold mb-2">Subdivision Planning</h3>
          <p className="text-sm text-gray-600">Create optimal lot layouts for residential or commercial development.</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:bg-gray-100 transition-all"
          onClick={openWhatsApp} // Calls the function when the card is clicked
        >
          <FaRuler className="text-4xl mb-4 text-blue-600" /> {/* Icon for Surveying */}
          <h3 className="text-xl font-semibold mb-2">Surveying</h3>
          <p className="text-sm text-gray-600">Accurate property measurements and boundary determinations.</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:bg-gray-100 transition-all"
          onClick={openWhatsApp} // Calls the function when the card is clicked
        >
          <FaBuilding className="text-4xl mb-4 text-blue-600" /> {/* Icon for Zoning Compliance */}
          <h3 className="text-xl font-semibold mb-2">Zoning Compliance</h3>
          <p className="text-sm text-gray-600">Ensure your land division meets local zoning regulations.</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:bg-gray-100 transition-all"
          onClick={openWhatsApp} // Calls the function when the card is clicked
        >
          <FaFileAlt className="text-4xl mb-4 text-blue-600" /> {/* Icon for Legal Documentation */}
          <h3 className="text-xl font-semibold mb-2">Legal Documentation</h3>
          <p className="text-sm text-gray-600">Prepare and file all necessary legal documents for land division.</p>
        </div>
      </div>

      {/* WhatsApp Contact Button */}
      <Button 
        variant="primary" 
        size="medium"
        onClick={openWhatsApp} // Same function as the cards
      >
        Inquire More
      </Button>
    </div>
  );
};

export default LandDivisionPage;
