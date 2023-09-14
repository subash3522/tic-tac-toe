import React from 'react'
import './App.css'

function Square({index,clickHandler,value}) {
  return (
    <>
    <button className="square" onClick={()=>clickHandler(index)} >{value}</button>
    </>
  )
}

export default Square