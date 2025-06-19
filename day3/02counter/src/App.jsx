import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15;
  let [counter,setCounter]=useState(15)    //can't be const

  const addValue=()=>{
    if(counter>=20) return;   //counter cant go above 20
    // counter++;
    setCounter(counter+1)
    // console.log("clicked",counter);
  }
  const removeValue=()=>{
    if(counter<=0) return;    //counter cant go below 0
    setCounter(counter-1)
  }
 

  return (
    <>
    <h1>React loading...</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value{counter}</button>
    
    <br />
    <button onClick={removeValue}>Remove value{counter}</button>
    <p>Footer:{counter}</p>
    </>
  )
}

export default App
