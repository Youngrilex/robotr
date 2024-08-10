import React from "react";

const searchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search">
      <input
        className=" search p-3  bg-gray-200"
        type="search"
        placeholder="search for robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default searchBox;
