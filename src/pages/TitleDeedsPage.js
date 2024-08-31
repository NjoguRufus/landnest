import React from 'react';
import Button from '../components/Button';

const TitleDeedsPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Title Deed Services</h2>
    <p className="mb-4">Our title deed services ensure secure and efficient property ownership transfer.</p>
    <ul className="list-disc pl-5 mb-4">
      <li>Title search and verification</li>
      <li>Deed preparation and filing</li>
      <li>Legal consultation on property rights</li>
      <li>Title insurance</li>
    </ul>
    <Button 
      variant="primary" 
      size="medium"
      whatsapp="Hi, I'm interested in your title deed services. Can you provide more information?"
    >
      Request Title Deed Service 
    </Button>
  </div>
);

export default TitleDeedsPage;
