
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/db93376f-3a60-4953-b2dc-ff80d85e875f.png" 
        alt="mrxp" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
