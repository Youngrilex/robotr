import React, { useState } from 'react';


const Card = ({ name, username, id, email }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front p-3 m-2 grow hover:scale-110 hover:transform hover:duration-300">
        <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
        <div>
          <h2>{name}</h2>
          <p>{username}</p>

        </div>
      </div>
      <div className="back">
        <h3>{name} Details</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
