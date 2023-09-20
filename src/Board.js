import React, { useState } from "react";
import Square from "./Square";
import "./App.css";
import History from "./History.js";

function Board() {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const [history, setHistory] = useState([]);
  const [user1, setUser1] = useState("");
  const [user1Show, setUser1Show] = useState("");
  const [user2, setUser2] = useState("");
  const [user2Show, setUser2Show] = useState("");
  const [userCollaps, setUserCollaps] = useState(true);

  const clickHandler = (a) => {
    if (arr[a] || winner() || userCollaps === true) {
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
    setHistory([...history, newArr]);
  };
  const abcarr = [];

  const cdarr = [4, 5, 6];
  console.log([...abcarr, ...cdarr]);

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

  const historyHandler = (index) => {
    setArr(history[index]);
  };

  console.log(winner());
  const move = winner();
  let status;
  if (move) {
    status = "The Winner is:" + (next ? user2Show : user1Show);
  } else {
    status = "Next Move:" + (next ? user1Show : user2Show);
  }

  return (
    <>
      <div className="completeboard">
        <div className="statusbox">
        <div className="status">{status}</div>
        </div>
        <div className="wholebox">
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
          <div className="historytitle">
            <div className="title">History of moves</div>
            <div className="gohistory">
              {history.map((value, index) => {
                return (
                  <li>
                    <History
                      index={index}
                      id={index}
                      historyHandler={historyHandler}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </div>

        <div className={userCollaps ? "userDetails" : "collapsed"}>
          <div className="userinputs">
            <div className="user1">
              <p>User 1</p>
              <input
                type="text"
                className="user"
                value={user1}
                onChange={(e) => setUser1(e.target.value)}
              />
            </div>
            <div className="user2">
              <p>User 2</p>
              <input
                type="text"
                className="user"
                value={user2}
                onChange={(e) => setUser2(e.target.value)}
              />
            </div>
          </div>
          <div className="buttondiv">
            <button
              className="submit-button"
              onClick={() => {
                setUser2Show(user2);
                setUser2("");
                setUser1Show(user1);
                setUser1("");
                setUserCollaps(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className={winner() ? "win-popup" : "normal"}>
          <p>
            <div
              className="reset"
              onClick={() => {
                setArr(Array(9).fill(null));
                setHistory([]);
                setNext(true);
              }}
            >
              Restart
            </div>
          </p>
          <p>{status}</p>
        </div>
        <div className="change-user" onClick={() => setUserCollaps(true)}>
          C
        </div>

        <div
          className="reset"
          onClick={() => {
            setArr(Array(9).fill(null));
            setHistory([]);
            setNext(true);
          }}
        >
          R
        </div>
      </div>
    </>
  );
}

export default Board;
