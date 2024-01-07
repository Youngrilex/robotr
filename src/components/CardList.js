import React, { useState } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const [newName, setNewName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newCards, setNewCards] = useState([]);

  const handleAddCard = () => {
    if (newName.trim() !== '' && newUsername.trim() !== '') {
      // Create a new card object
      const newCard = {
        id: Math.random(), // You might want to use a better method for generating unique IDs
        name: newName,
        username: newUsername
      };

      // Update the newCards state by adding the new card to the beginning
      setNewCards(prevNewCards => [newCard, ...prevNewCards]);

      // Clear the input fields
      setNewName('');
      setNewUsername('');
    }
  };

  // Merge existing cards with newCards
  const allCards = [...newCards, ...robots];

  const cardComponents = allCards.map((user) => (
    <Card key={user.id} id={user.id} name={user.name} username={user.username} />
  ));

  return (
    <div className="mt-4 sm:mt-8 grid grid-cols-3 sm:grid-cols-6 place-content-center sm:gap-2 mx-2 sm:mx-24">
      <div className="card-input bg-green-200 border-r-3 p-3 m-2 grow rounded-3xl shadow-xl hover:scale-110 hover:transform hover:duration-300 p-4">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-12 my-2 w-full"
        />
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2 mb-2 w-full"
        />
        <button onClick={handleAddCard} className="bg-green-400 border border-gray-300 rounded-md p-2 mr-2 mt-2 w-full hover:scale-110 hover:bg-green-500 hover:transform hover:duration-300">Add Card</button>
      </div>
      {cardComponents}
    </div>
  );
}

export default CardList;

// import React from "react";
// import Card from "./Card";

// const CardList = ({ robots }) => {
//   const cardComponent = robots.map((user, i) => {
//     return (
//       <Card
//         key={i}
//         id={robots[i].id}
//         name={robots[i].name}
//         username={robots[i].username}
//       />
//     );
//   });
//   return <div className="mt-4 sm:mt-8 grid grid-cols-3 sm:grid-cols-6 place-content-center sm:gap-2 mx-2 sm:mx-24">{cardComponent}</div>;
// }

// export default CardList;
