
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold">
        <span className="text-black">mr</span>
        <span className="text-mrxp-blue">xp</span>
      </div>
    </Link>
  );
};

export default Logo;
