import React from "react";

const searchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="p-2">
      <input
        className="p-3  bg-gray-200"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default searchBox;
