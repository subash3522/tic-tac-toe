import React from "react";

function History({ index, historyHandler }) {
  return (
    <>
      <div className="go-back-list" onClick={()=>historyHandler(index)}>
        Go to move {index + 1}
      </div>
    </>
  );
}

export default History;
