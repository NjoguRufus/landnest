import React from 'react';

const PropertyCard = ({ property, actionButton }) => (
  <div className="bg-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
    <p className="text-gray-600 mb-2">{property.location}</p>
    <p className="mb-2">Area: {property.area}</p>
    <p className="text-lg font-bold text-blue-600 mb-4">{property.price}</p>
    {actionButton}
  </div>
);

export default PropertyCard;