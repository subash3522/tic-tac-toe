import './App.css'

function Square({index,clickHandler,value}) {
 

  const colorChanger = ()=>{
    if(value === 'X'){
      return 'bg-success'
    }
    if (value ==='O'){
      return 'bg-danger'
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