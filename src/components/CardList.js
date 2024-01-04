import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
      />
    );
  });
  return <div className="mt-4 sm:mt-8 grid grid-cols-3 sm:grid-cols-6 place-content-center sm:gap-2 mx-2 sm:mx-24">{cardComponent}</div>;
}

export default CardList;
