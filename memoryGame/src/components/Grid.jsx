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

  const [cards, setCards] = useState([]); /// this stores all the cards , according to the shuffled index
  const [matchedCards, setMatchedCards] = useState([]); // this stores all the matched cards and prevents them from flipping again
  const [flipped, setFlipped] = useState([]); // this stores the currently flipped cards ,

  useEffect(() => {
    setCards(shuffleArray(initialCards));
  }, []);

  const handleClick = (index) => {
    if (
      matchedCards.includes(index) ||
      flipped.includes(index) ||
      flipped.length === 2
    )
      return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <>
      <div className="grid">
        {cards.map((item, index) => (
          <div className="box" key={index} onClick={() => handleClick(index)}>
            {flipped.includes(index) || matchedCards.includes(index) ? (
              item
            ) : (
              <FaQuestion />
            )}
          </div>
        ))}
      </div>
      {matchedCards.length === 16 && (
        <h1 className="end">CONGRATULATIONS!!!</h1>
      )}
    </>
  );
};

export default Grid;
