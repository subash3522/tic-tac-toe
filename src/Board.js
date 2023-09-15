import React, { useState } from "react";
import Square from "./Square";
import "./App.css";
import History from './History.js'

function Board() {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const [history, setHistory] = useState([])

  const clickHandler = (a) => {
    if (arr[a] || winner()) {
      return;
    }
    
    const newArr = [...arr];
    if (next) {
      newArr[a] = "X";
    } else {
      newArr[a] = "O";
    }
    setArr(newArr);
    setNext(!next);
    setHistory([...history,newArr])
  };
  const abcarr = []

  const cdarr = [4,5,6]
  console.log([...abcarr,...cdarr]);

  const winner = () => {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];

      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
    
  };

  const historyHandler = (index)=>{
    setArr(history[index]);
  }

  console.log(winner());
  const move = winner();
  let status;
  if (move) {
    status = "The Winner is:" + move;
  } else {
    status = "Next Move:" + (next ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {arr.map((value, index) => (
          <Square
            index={index}
            clickHandler={clickHandler}
            key={index}
            value={value}
          />
        ))}
      </div>
      <div className="gohistory">
        {history.map((value,index)=>{
          
           return (<li>
            <History index = {index} id = {index} historyHandler = {historyHandler}/>
          </li>)
        }
        )}
      </div>
    </>
  );
}

export default Board;
