import React, { useState } from 'react'
import Square from './Square'
import './App.css'

function Board() {

    const [arr,setArr]=useState(Array(9).fill(null));
   

    const clickHandler = (a)=>{
        const newArr = [...arr];
        newArr[a] = 'X'
        setArr(newArr);
        
    }
  return (
   <>
   
   <div className="board">
    {arr.map((value,index)=>
   <Square index = {index} clickHandler = {clickHandler} id = {index} value = {value}/>
    )
    }
   </div>
   </>
  )
}

export default Board