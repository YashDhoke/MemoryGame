import React, { useEffect, useState } from "react";
import "./styles.css";

const Grid = () => {
  const initialCards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(shuffleArray(initialCards));
  }, []);

  return (
    <div className="grid">
      {cards.map((item, index) => (
        <div className="box" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Grid;
