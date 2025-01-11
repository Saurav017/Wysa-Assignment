import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="&#128269;"
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
    />
  );
}

export default SearchBar;
