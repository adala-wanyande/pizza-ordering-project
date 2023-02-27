import React from "react";
import RatingCard from "./RatingCard";

function RateCardCollection({ faveItems, addLikes, count }) {
  const faveMenuItem = faveItems.map((pizza) => {
    return (
      <RatingCard
        count={count}
        key={pizza.id}
        pizza={pizza}
        handleClick={addLikes}
      />
    );
  });

  return <>{faveMenuItem}</>;
}

export default RateCardCollection;
