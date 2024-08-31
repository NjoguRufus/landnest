import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', size = 'medium' }) => {
  const baseStyles = 'font-bold rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-400',
  };

  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;