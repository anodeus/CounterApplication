
import './App.css';

import React, {useState} from 'react'

export default function App() {
  const [count, setCount]= useState(0)
  const incrementValue=()=>{
    setCount(count => count+1)
  }
  const decrementValue=()=>{
    setCount(count=>count-1)
  }
  const resetValue = () => {
    setCount(0); 
  };
  let myStyle={
    color: "green"
  }
  if(count>=5 && count<=9){
    myStyle ={
      color: "blue"
    }
  }
  if(count===10){
    myStyle={
      color: "red"
    }
  }
  return (
    <div>
      <h1 style={myStyle}>Counter</h1>
      <h1>{count}</h1>
      <button onClick={incrementValue} disabled={count >9 ? true : false}>+</button>
      <button onClick={decrementValue} disabled={count<1 ? true: false }>-</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  )
}

// export default App;
