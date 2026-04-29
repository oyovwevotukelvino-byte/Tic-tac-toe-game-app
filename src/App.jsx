
import './App.css'

import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    <button className={`square ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}


export default function App() {
  return (
    <div className="game">
      <div className="game-header">
        <h1>Tic-Tac-Toe</h1>
      </div>
      <Board />
    </div>
  );
}

function Board(){

  const [isXNext, setIsXNext] = useState(true);

  const [squaresValue, setSquaresValue] = useState(Array(9).fill(null));

  const winner = determineWinner(squaresValue);
  const isBoardFull = !squaresValue.includes(null);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (isBoardFull) {
    status = 'Draw!';
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  function handleClick(i){
    if(squaresValue[i] || winner){
      return;
    }

    const newSquares = squaresValue.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquaresValue(newSquares);
    setIsXNext(!isXNext);
  }

  function handleReset() {
    setSquaresValue(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <>
      <div className="status">{status}</div>
      <button className="reset" onClick={handleReset}>
        New Game
      </button>

      <div className="board-row">
        <Square value={squaresValue[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squaresValue[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squaresValue[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squaresValue[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squaresValue[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squaresValue[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squaresValue[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squaresValue[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squaresValue[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function determineWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}




 
  






















 
