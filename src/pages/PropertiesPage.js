

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [properties] = useState([
    // Properties data (same as before)
    {
      id: 1,
      title: '50 by 100 Plot Kimbimbi',
      price: '650,000',
      location: 'Kimbimbi',
      description: 'Exactly 200 meters from busy Embu highway.',
      images: ['/images/kimbimbi-image.jpg', '/images/kimbimbi-image2.jpg'],
    },
    {
      id: 2,
      title: '1 1/4 Acres Marurumo',
      price: '1,700,000',
      location: 'Marurumo',
      description: 'Next to Marurumo Primary School, touching the main road from Embu highway, about 15km away.',
      images: ['/images/marurumo-image.jpg'],
    },
    {
      id: 3,
      title: '1/4 Acre Komboini',
      price: '1,400,000',
      location: 'Komboini',
      description: 'Only 100 meters from Kangai Kimicha Tarmac, touching the main road to Komboini Primary School. Ideal for commercial, residential, or speculative purposes.',
      images: ['/images/komboini-image.jpg'],
    },
    {
      id: 4,
      title: '¼ Acre Kiamuthambi',
      price: '1,700,000',
      location: 'Kiamuthambi',
      description: 'Prime ¼ acre at the junction of Kiamuthambi and Njegas tarmac touching the tarmac. Very ideal for commercial, residential, or speculation. All documents are ready and clean.',
      images: [
        '/images/kiamuthambi1.jpg',
        '/images/kiamuthambi2.jpg',
        '/images/kiamuthambi3.jpg',
        '/images/kiamuthambi4.jpg',
      ],
    },
    {
      id: 5,
      title: '2¼ Acres Kiamiciri',
      price: '5,000,000',
      location: 'Kiamiciri',
      description: 'The shamba is exactly 1.9km from Kerugoya Kutus tarmac. Very fertile shamba with 1¼ acres under mature coffee and ¾ acres under rice plantation.',
      images: [
        '/images/kiamiciri.jpg',
        '/images/kiamiciri2.jpg',
        '/images/kiamiciri3.jpg',
        '/images/kiamiciri4.jpg',
        '/images/kiamiciri5.jpg',
      ],
    },
    // Additional properties from the uploaded images
    {
      id: 6,
      title: '¼ Acre Thumaita',
      price: '1,100,000',
      location: 'Thumaita',
      description: 'The shamba is neighbouring Thumaita Primary School.',
      images: ['/images/thumaita.jpg',
               '/images/thumaita2.jpg'
      ],
    },
    {
      id: 7,
      title: '¼ Acre Karie',
      price: '1,000,000',
      location: 'Karie',
      description: 'This ¼ acre is touching the Karie Kimbimbi Main road just after the Thiba river. Very prime Piece of Land.',
      images: ['/images/karie1.jpg',
               '/images/karie2.jpg'
      ],
    },
    {
      id: 8,
      title: '¼ Acre Along Mwea-Wanguru Tarmac',
      price: '1,400,000',
      location: 'Mwea-Wanguru',
      description: 'Very ideal for commercial activities.',
      images: ['/images/mwea-wanguru.jpg'],
    },
    {
      id: 9,
      title: '0.47 ha Mukithi',
      price: '3,100,000',
      location: 'Mukithi',
      description: 'The property is 2.6km from Kagio Kutus tarmac. There is plenty of water for farming. Electricity is available, The area is well served with well Graded Road Network',
      images: ['/images/mukithi.jpg'],
    },
    {
      id: 10,
      title: '50 by 100 Plots',
      price: '700,000',
      location: 'Mwea-Ndindiruku',
      description: 'The plots are touching Mwea-Ndindiruku tarmac. Very ideal for commercial or residential purposes.The area is Well served with electricity and Water. The price is slightly Negotiable',
      images: ['/images/mwea-ndindiruku.jpg'],
    },
    {
      id: 11,
      title: '1 Acre Gitooni',
      price: '3,200,000',
      location: 'Gitooni',
      description: 'The shamba is less than 100 meters from Kagio Tarmac.',
      images: ['/images/gitooni.jpg'],
    },
    ]);
    

    const filteredProperties = properties.filter(property =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleInquire = (property) => {
      const message = `
        Hi LandNest, I'm interested in the property: ${property.title}.
        Location: ${property.location}.
        Price: Ksh ${property.price}.
        Description: ${property.description}
       
      `;
      const url = `https://wa.me/254720259827?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
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
              property={{
                ...property,
                price: `Ksh ${property.price}`,
              }}
              actionButton={
                <Button 
                  variant="primary" 
                  size="medium"
                  onClick={() => handleInquire(property)} // Pass the property to the handler
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
