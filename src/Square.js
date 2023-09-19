import './App.css'

function Square({index,clickHandler,value}) {
 

  const colorChanger = ()=>{
    if(value === 'X'){
      return 'yellow'
    }
    if (value ==='O'){
      return 'blue'
  }
  else 
  return 'square'
}

console.log(colorChanger());

 
  
  return (
    <>
    <button className={colorChanger()} onClick={()=>clickHandler(index)} >{value}</button>
    </>
  )
}

export default Square