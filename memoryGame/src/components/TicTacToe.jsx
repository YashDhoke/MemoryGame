import React, { useEffect, useState } from "react";
import "./styles.css";
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";

const TicTacToe = () => {
  const [game, setGame] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState("");

  const handleClick = (index) => {
    const newArr = [...game];
    if (newArr[index] === "") {
      newArr[index] = turn;
      setTurn((prev) => (prev === 1 ? 0 : 1));
      setGame(newArr);
    }
  };

  useEffect(() => {
    calculateResult();
  }, [game]);

  const calculateResult = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (game[a] !== "" && game[a] === game[b] && game[a] === game[c]) {
        setWinner(turn === 1 ? 2 : 1);
        return;
      }
    }
  };

  const handleUndo = () => {
    setGame(Array(9).fill(""));
    setTurn(1);
    setWinner("");
  };

  return (
    <>
      <button className="btn" onClick={handleUndo}>
        UNDO
      </button>
      <div className="grid-2">
        {game.map((item, index) => (
          <div className="box-2" key={index} onClick={() => handleClick(index)}>
            {item === 1 ? (
              <ImCross className="icon-3" />
            ) : item === 0 ? (
              <FaRegCircle className="icon-2" />
            ) : null}
          </div>
        ))}
      </div>
      {winner && <p>Player {winner} won</p>}
    </>
  );
};

export default TicTacToe;
