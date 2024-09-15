import React, { memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

interface BackButtonProps {
  bgColor?: string;
  fontColor?: string; 
  fontSize?: 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
  children?: ReactNode;
}

const BackButton: React.FC<BackButtonProps> = ({ bgColor = '#ff0000', fontColor = '#ffffff', fontSize = 'text-base', children = 'Back' }) => {
  const buttonClasses = `back-button ${fontSize}`;

  return (
    <Link
      to="/"
      className={buttonClasses}
      style={{ backgroundColor: bgColor, color: fontColor }}
      aria-label="Go back to the previous page"
    >
      {children}
    </Link>
  );
};

export default memo(BackButton);