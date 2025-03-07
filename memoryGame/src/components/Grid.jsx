import React, { useEffect, useState } from "react";
import "./styles.css";
import { FaQuestion } from "react-icons/fa";

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

  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    setCards(shuffleArray(initialCards));
  }, []);

  const handleClick = (index) => {
    if (flipped.includes(index)) return;
    if (flipped.length === 2) return;

    setFlipped([...flipped, index]);
  };

  console.log(flipped);

  return (
    <div className="grid">
      {cards.map((item, index) => (
        <div className="box" key={index} onClick={() => handleClick(index)}>
          {flipped.includes(index) ? item : <FaQuestion />}
        </div>
      ))}
    </div>
  );
};

export default Grid;
