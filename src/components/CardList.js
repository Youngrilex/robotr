import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div className="mt-4 sm:mt-8 grid grid-cols sm:grid-cols-3 place-content-center gap-4 sm:gap-8 mx-6 sm:mx-24">{cardComponent}</div>;
};

export default CardList;
