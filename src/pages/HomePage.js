import React from 'react';
import { FaMapMarkedAlt, FaFileAlt, FaCut } from 'react-icons/fa';
import FeatureCard from '../components/FeatureCard';

const HomePage = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">Welcome to LandNest Properties</h2>
    <p className="mb-8">Your one-stop solution for land sales, title deeds, and land division.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard icon={<FaMapMarkedAlt size={48} />} title="Land Sales" description="Find your perfect plot with our extensive land listings." />
      <FeatureCard icon={<FaFileAlt size={48} />} title="Title Deed Issuance" description="Secure your property with our efficient title deed services." />
      <FeatureCard icon={<FaCut size={48} />} title="Land Division" description="Expert land division services for all your needs." />
    </div>
  </div>
);

export default HomePage;