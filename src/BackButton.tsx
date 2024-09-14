import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  bgColor?: string;
  fontSize?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ bgColor, fontSize }) => {
  const buttonClasses = `${bgColor || 'bg-red-500'} ${fontSize || 'text-base'} px-3 py-1 rounded-md text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400`;

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

const MemoizedBackButton = memo(BackButton);

export default MemoizedBackButton;