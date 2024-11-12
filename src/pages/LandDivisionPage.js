import React from 'react'; 
import Button from '../components/Button';

const LandDivisionPage = () => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">Land Division Services</h2>
    <p className="mb-8">We offer expert land division services to help you maximize your property's potential.</p>

    {/* Cards for Land Division Services */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white p-6 rounded-full shadow-md flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Subdivision Planning</h3>
        <p>Create optimal lot layouts for residential or commercial development.</p>
      </div>
      
      <div className="bg-white p-6 rounded-full shadow-md flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Surveying</h3>
        <p>Accurate property measurements and boundary determinations.</p>
      </div>

      <div className="bg-white p-6 rounded-full shadow-md flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Zoning Compliance</h3>
        <p>Ensure your land division meets local zoning regulations.</p>
      </div>

      <div className="bg-white p-6 rounded-full shadow-md flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Legal Documentation</h3>
        <p>Prepare and file all necessary legal documents for land division.</p>
      </div>
    </div>

    {/* Inquire Button Redirect to WhatsApp with Custom Message */}
    <Button 
      variant="primary" 
      size="medium"
      onClick={(e) => {
        e.preventDefault(); // Prevent any default behavior (form submission, etc.)
        const message = 'Hi, I am interested in your land division services. Can I get more information about it?';
        const url = `https://wa.me/c/254791155856?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank'); // Open WhatsApp link in a new tab
      }}
    >
      Inquire About Land Division
    </Button>
  </div>
);

export default LandDivisionPage;
