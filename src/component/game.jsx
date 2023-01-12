import { useState } from "react";
import Board from "./board";

function Game() {
  //const [xIsNext, setXisNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]); // array of length 9; each of the 9 elements are set to null >> [null, null, ..., null]
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    console.log('History:', nextHistory);
    console.log( currentMove);
   
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    //setXisNext(!xIsNext);
  }
  const historyMove = history.map((nextMove,move) => {
    const latestMove = nextMove.latestMove;
    console.log(latestMove)
    //console.log('Latest move: ' , latestMove)
    const col = 1+ latestMove % 3;
    const row = 1+ Math.floor(latestMove /3);
    //const asc = move ? console.log(`${col}, ${row}`) : '0 (0,0';
    //console.log(asc)
  })
  
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    //setXisNext(nextMove % 2 === 0);
  }


  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    console.log(move)
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
export default Game;
