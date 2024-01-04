import React from "react";



const Card = ({ name, username, id }) => {
  return (
    <div className="flex flex-col items-center bg-green-200 border-r-3 p-3 m-2 grow rounded-3xl shadow-xl hover:scale-110 hover:transform hover:duration-300">
      <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        
      </div>
    </div>
  );
};

export default Card;
