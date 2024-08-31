import React from 'react';
import Button from '../components/Button';

const LandDivisionPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Land Division Services</h2>
    <p className="mb-4">We offer expert land division services to help you maximize your property's potential.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Subdivision Planning</h3>
        <p>Create optimal lot layouts for residential or commercial development.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Surveying</h3>
        <p>Accurate property measurements and boundary determinations.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Zoning Compliance</h3>
        <p>Ensure your land division meets local zoning regulations.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Legal Documentation</h3>
        <p>Prepare and file all necessary legal documents for land division.</p>
      </div>
    </div>
    <Button 
      variant="primary" 
      size="medium"
      whatsapp="Hi, I'm interested in your land division services. Can you provide more information?"
    >
      Inquire About Land Division 
    </Button>
  </div>
);

export default LandDivisionPage;
