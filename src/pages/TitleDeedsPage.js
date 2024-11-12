import React from 'react';
import { FaSearch, FaFileAlt, FaGavel, FaShieldAlt } from 'react-icons/fa'; // Importing icons
import Button from '../components/Button';

const TitleDeedsPage = () => {
  const services = [
    { 
      title: 'Title Search and Verification', 
      description: 'We conduct thorough title searches to ensure the authenticity of ownership.',
      icon: <FaSearch className="text-3xl mb-2 text-blue-500" /> // Added blue color here
    },
    { 
      title: 'Deed Preparation and Filing', 
      description: 'We prepare and file title deeds for efficient property transfers.',
      icon: <FaFileAlt className="text-3xl mb-2 text-blue-500" /> // Added blue color here
    },
    { 
      title: 'Legal Consultation on Property Rights', 
      description: 'Expert legal advice on your property rights and ownership matters.',
      icon: <FaGavel className="text-3xl mb-2 text-blue-500" /> // Added blue color here
    },
    { 
      title: 'Title Insurance', 
      description: 'We provide insurance to protect you against unforeseen property title issues.',
      icon: <FaShieldAlt className="text-3xl mb-2 text-blue-500" /> // Added blue color here
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Title Deed Services</h2>
      <p className="mb-4">Our title deed services ensure secure and efficient property ownership transfer.</p>

      {/* Cards for Title Deed Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            {service.icon} {/* Display the icon */}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* WhatsApp Contact Button */}
      <Button 
        variant="primary" 
        size="medium"
        onClick={(e) => {
          e.preventDefault(); // Prevents form submission if this is inside a form
          const message = 'Hi, I am interested in your Titledeed services. Can I get more information about it?';
          const url = `https://wa.me/254714748299?text=${encodeURIComponent(message)}`; // Correct link format
          window.open(url, '_blank'); // Opens WhatsApp in a new tab
        }}
      >
        Inquire More
      </Button>
    </div>
  );
};

export default TitleDeedsPage;
