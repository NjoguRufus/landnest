import React from 'react';

const FeatureCard = ({ icon, title, description, onClick }) => (
  <div 
    className="bg-white p-6 rounded-lg shadow-md cursor-pointer" 
    onClick={onClick}
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureCard;
