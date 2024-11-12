import React, { useState } from 'react';

const PropertyCard = ({ property, actionButton }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % property.images.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + property.images.length) % property.images.length
    );
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      {/* Slideshow */}
      <div className="relative">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
          onClick={() => openModal(currentImageIndex)}  // Open modal on image click
        />
        {/* Slideshow Controls */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded"
            >
              Next
            </button>
          </>
        )}
      </div>
      
      {/* Property Details */}
      <h3 className="text-lg font-bold">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-gray-800 font-semibold">Ksh {property.price}</p>
      <p className="text-gray-500">{property.description}</p>

      {/* Inquire Button */}
      <div className="mt-4">
        {actionButton}
      </div>

      {/* Modal for Image Pop-up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-5xl">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full max-h-[80vh] object-cover"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
              &#60;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
              &#62;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
