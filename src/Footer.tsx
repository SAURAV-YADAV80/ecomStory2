import React, { memo } from "react";
import './Footer.css'; // Import the CSS file

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  borderRadius?: string;
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = '#f9fafb',
  textColor = '#1f2937',
  fontSize = '0.875rem',
  borderRadius = '0px',
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
        <h1 className="footer-text">
          Copyright © 2022 | Saurav
        </h1>
        <h1 className="footer-text">
          Powered by Saurav Yadav
        </h1>
      </div>
    </div>
  );
}

const MemoizedFooter = memo(Footer);
export default MemoizedFooter;