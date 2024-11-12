import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkedAlt, FaFileAlt, FaCut } from 'react-icons/fa';
import FeatureCard from '../components/FeatureCard';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLandSalesClick = () => {
    navigate('/properties'); // Redirect to PropertiesPage
  };

  const handleTitleDeedsClick = () => {
    navigate('/titledeeds'); // Redirect to TitleDeedsPage
  };

  const handleLandDivisionClick = () => {
    navigate('/landdivision'); // Redirect to LandDivisionPage
  };

  return (
    <div
      className="text-center min-h-screen bg-cover bg-center"
      style={{
        //backgroundImage: 'url("/images/lande2.jpg")',
      }}
    >
      <h2 className="text-3xl font-bold mb-4">Welcome to LandNest Properties</h2>
      <p className="mb-8">Your one-stop solution for land sales, title deeds, and land division.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<FaMapMarkedAlt size={48} />} 
          title="Land Sales" 
          description="Find your perfect plot with our extensive land listings."
          onClick={handleLandSalesClick}  // Attach the handler for Land Sales
        />
        <FeatureCard 
          icon={<FaFileAlt size={48} />} 
          title="Title Deed Issuance" 
          description="Secure your property with our efficient title deed services." 
          onClick={handleTitleDeedsClick}  // Attach the handler for Title Deeds
        />
        <FeatureCard 
          icon={<FaCut size={48} />} 
          title="Land Division" 
          description="Expert land division services for all your needs." 
          onClick={handleLandDivisionClick}  // Attach the handler for Land Division
        />
      </div>
    </div>
  );
};

export default HomePage;
