
import React, { useState } from "react";
import "./App.css";
function App() {
  const [squares, setSquares] = useState(Array(100).fill(""));
  const [best, setBest] = useState('');
  const renderSquare = (i) => {
    return (
      <input
        className="square "
        onChange={(e) => handleClick(e,i)}
        value={squares[i]}
      ></input>
    );
  };
  const handleBest = () => {
    
    //graph alrgotithm will be implementd to find the minimimun shortest path
    setBest("Hotel1 is the best")
  }
  const handleClick = (event, i) => {
    console.log(i)
    
    var k = [...squares];
    k[i] = event.target.value;
    setSquares(k);
  };
  const board = [];
  for (let i = 0; i < 10; i++) {
    const squareRows = [];
    for (let j = 0; j < 10; j++) {
      squareRows.push(renderSquare(i * 10 + j));
    }
    board.push(<div className="board-row">{squareRows}</div>);
  }
  return <div className="parent">{board}
    <p>{best}</p>
    <button className="best" onClick={handleBest}>Find Best Hotel</button>
  </div>;
}

export default App;
