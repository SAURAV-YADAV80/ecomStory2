import React from "react";

interface PagenoProps {
  onClick: () => void; 
  no: number;          
}

const Pageno: React.FC<PagenoProps> = ({ onClick, no }) => {
  return (
    <button 
      className="flex h-8 w-8 bg-red-600 justify-center items-center text-xs text-white border-2 border-red-600 hover:bg-white hover:text-red-600"
      onClick={onClick}
    >
      {no}
    </button>
  );
}

export default Pageno;
