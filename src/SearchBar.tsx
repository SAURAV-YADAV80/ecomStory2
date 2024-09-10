import React, { ChangeEventHandler } from 'react';

// Define the props interface
interface SearchBarProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  query: string;
  className:string;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleChange, query }) => {
  return (
    <input
      className="w-full max-w-xs px-4 py-2 text-sm text-gray-700 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 placeholder-gray-400 transition duration-150 ease-in-out"
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}

export default SearchBar;