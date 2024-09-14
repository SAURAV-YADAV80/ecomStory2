import React, { ChangeEvent, memo } from 'react';

interface DropdownProps {
  sort: string;
  handleSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ handleSortChange, sort }) => {

  return (
    <div className="relative inline-block w-full max-w-xs">
      <select 
        className="block w-full px-4 py-2 text-sm text-gray-700 bg-gradient-to-r from-red-100 to-red-200 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:border-red-400 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 ease-in-out cursor-pointer"
        name="sort" 
        id="def-sorting" 
        onChange={handleSortChange} 
        value={sort}
      >
        <option value="default">Default sorting</option>
        <option value="title">Sort by Name</option>
        <option value="lowToHigh">Price: low to high</option>
        <option value="highToLow">Price: high to low</option>
      </select>
    </div>
  );
};

const MemoizedDropdown = memo(Dropdown);
export default MemoizedDropdown;