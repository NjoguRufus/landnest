import React from 'react';

const FeatureCard = ({ icon, title, description, onClick }) => (
  <div 
    className="bg-white p-6 rounded-lg shadow-md cursor-pointer" 
    onClick={onClick}  // Ensures the onClick handler is triggered when the card is clicked
  >
    <div className="text-blue-600 mb-4">{icon}</div>  {/* Icon color styling */}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>  {/* Title styling */}
    <p>{description}</p>  {/* Description styling */}
  </div>
);

export default FeatureCard;
