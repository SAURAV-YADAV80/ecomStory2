import React, { memo } from "react";
import './Footer.css';

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  borderRadius?: string;
  titleText?: string;  // New prop for the main text
  subtitleText?: string;  // New prop for the subtitle
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = '#f9fafb',
  textColor = '#1f2937',
  fontSize = '0.875rem',
  borderRadius = '0px',
  titleText = "Copyright © 2022 | Saurav",  // Default title text
  subtitleText = "Powered by Saurav Yadav",  // Default subtitle text
}) => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor,
        borderRadius,
      }}
    >
      <div
        className="footer-content"
        style={{
          fontSize,
          color: textColor,
        }}
      >
        <h1 className="footer-text">{titleText}</h1>  {/* Display custom or default title */}
        <h1 className="footer-text">{subtitleText}</h1>  {/* Display custom or default subtitle */}
      </div>
    </div>
  );
};

const MemoizedFooter = memo(Footer);
export default MemoizedFooter;