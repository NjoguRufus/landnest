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
  onClick={() => window.open('https://wa.me/c/254720259827?text=Hi,%20I%27m%20interested%20in%20your%20title%20deed%20services.%20Can%20you%20provide%20more%20information?', '_blank')}
>
  Request Title Deed Service
</Button>

  </div>
);

export default TitleDeedsPage;
