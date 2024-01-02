import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className=" bg-green-200 dib border-r-3 p-3 m-2 grow rounded-3xl shadow-xl">
      <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        
      </div>
    </div>
  );
};

export default Card;
