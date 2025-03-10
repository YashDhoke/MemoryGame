import React from "react";
import Grid from "./components/Grid";
import "./App.css";
import TicTacToe from "./components/TicTacToe";

const App = () => {
  return (
    <div className="container">
      {/* <h1 className="heading">Memory Game</h1> */}
      <h1 className="heading">Tic Tac Toe</h1>
      {/* <Grid /> */}
      <TicTacToe />
    </div>
  );
};

export default App;
