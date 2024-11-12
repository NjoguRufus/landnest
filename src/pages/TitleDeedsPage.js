import React from 'react';
import { FaSearch, FaFileAlt, FaGavel, FaShieldAlt } from 'react-icons/fa'; // Importing icons
import Button from '../components/Button';

const TitleDeedsPage = () => {
  const services = [
    { 
      title: 'Title Search and Verification', 
      description: 'We conduct thorough title searches to ensure the authenticity of ownership.',
      icon: <FaSearch className="text-3xl mb-2 text-blue-500" />,
    },
    { 
      title: 'Deed Preparation and Filing', 
      description: 'We prepare and file title deeds for efficient property transfers.',
      icon: <FaFileAlt className="text-3xl mb-2 text-blue-500" />,
    },
    { 
      title: 'Legal Consultation on Property Rights', 
      description: 'Expert legal advice on your property rights and ownership matters.',
      icon: <FaGavel className="text-3xl mb-2 text-blue-500" />,
    },
    { 
      title: 'Title Insurance', 
      description: 'We provide insurance to protect you against unforeseen property title issues.',
      icon: <FaShieldAlt className="text-3xl mb-2 text-blue-500" />,
    },
  ];

  const openWhatsApp = () => {
    const message = 'Hi, I am interested in your Titledeed services. Can I get more information about it?';
    const url = `https://wa.me/254720259827?text=${encodeURIComponent(message)}`; // Correct link format
    window.open(url, '_blank'); // Opens WhatsApp in a new tab
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Title Deed Services</h2>
      <p className="mb-4">Our title deed services ensure secure and efficient property ownership transfer.</p>

      {/* Cards for Title Deed Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-all"
            onClick={openWhatsApp} // Calls the function when the card is clicked
          >
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
        onClick={openWhatsApp} // Same function as the cards
      >
        Inquire More
      </Button>
    </div>
  );
};

export default TitleDeedsPage;
