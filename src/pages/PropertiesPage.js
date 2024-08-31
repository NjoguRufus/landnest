import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button'; // Import the Button component

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    // ... your properties data
  ]);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full p-2 pl-10 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map(property => (
          <PropertyCard 
            key={property.id} 
            property={property}
            actionButton={ // Pass the Button component as a prop
              <Button 
                variant="primary" 
                size="medium"
                whatsapp={`Hi, I'm interested in the ${property.title} property. Can you provide more information?`}
              >
                Inquire 
              </Button>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
