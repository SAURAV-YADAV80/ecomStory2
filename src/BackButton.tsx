import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

interface BackButtonProps {
  bgColor?: 'bg-red' | 'bg-blue' | 'bg-green';
  fontSize?: 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
}

const BackButton: React.FC<BackButtonProps> = ({ bgColor = 'bg-red', fontSize = 'text-base' }) => {
  const buttonClasses = `back-button ${bgColor} ${fontSize}`;

  return (
    <Link
      to="/"
      className={buttonClasses}
      aria-label="Go back to the previous page"
    >
      Back
    </Link>
  );
};

export default memo(BackButton);