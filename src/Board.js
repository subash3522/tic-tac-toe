import React, { useState } from "react";
import Square from "./Square";
import "bootstrap/dist/css/bootstrap.min.css";

// import './App.css'
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can use fetch or axios to send the form data to a server
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-evenly pt-5 pt-md-1">
        <div className="d-flex flex-column">
          <div className="statusbox text-center">Enjoy</div>
          <div className="wholebox border border-primary d-flex p-2">
            <div className="board " style={{minWidth:'180px'}}>
              {arr.map((value, index) => (
                <Square
                  index={index}
                  clickHandler={clickHandler}
                  key={index}
                  value={value}
                />
              ))}
            </div>
            <div className=" ps-4">
              <div className="text-center">History of moves</div>
              <div className="list-group list-unstyled">
                {history.map((value, index) => {
                  return (
                    <li className="py-1">
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
        </div>

        <div
          className={` ${userCollaps ? "container max-width-sm position-absolute d-flex flex-column border border-danger z-1 " : "d-none"}`} style={{maxWidth: '570px'}}
        >
          <div className="w-100 w-lg-75 border border-danger bg-success-subtle rounded">
            <div className="d-flex my-3 justify-content-evenly align-cente">
              <p className="btn btn-primary w-25">User 1</p>
              <input
                type="text"
                className="form-control shadow border border-danger w-50"
                value={user1}
                onChange={(e) => setUser1(e.target.value)}
              />
            </div>
            <div className="d-flex my-3 justify-content-evenly align-center">
              <p className="btn btn-primary w-25  "> User 2</p>
              <input
                type="text"
                className="form-control shadow border border-danger w-50"
                value={user2}
                onChange={(e) => setUser2(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success text-center w-25"
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
        <div className={winner() ? "d-flex z-3 justify-content-evenly align-item=center shadow flex-column position-absolute bg-warning rounded w-75 h-25" : "d-none"} style = {{maxWidth:'570px'}}>
          <p>
            <div
              className="text-center w-100 btn btn-primary"
              onClick={() => {
                setArr(Array(9).fill(null));
                setHistory([]);
                setNext(true);
              }}
            >
              Restart
            </div>
          </p>
          <p className="text-center w-100 btn btn-primary ">{status}</p>
        </div>
        <div className=" d-flex flex-column position-absolute  p-3 boxp ">
          <div className="btn btn-warning mb-3 " onClick={() => setUserCollaps(true)}>
            C
          </div>

          <div
            className="btn btn-danger"
            onClick={() => {
              setArr(Array(9).fill(null));
              setHistory([]);
              setNext(true);
            }}
          >
            R
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
