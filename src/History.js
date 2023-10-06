import React from "react";

function History({ index, historyHandler }) {
  return (
    <>
      <div className="list-group-item active list-unstyled" onClick={()=>historyHandler(index)}>
        Go to move {index + 1}
      </div>
    </>
  );
}

export default History;
