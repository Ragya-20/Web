import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Ragya",
    age:"19"
  }
  let myArr=[1,2,3]

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-3xl mb-4">Tailwind</h1>
      <Cards username="Lion"someObj={myObj} obj={myArr} paragraph="What is the difference between lions, tigers, panthers?"/>
      <Cards username="Roarrrr" paragraph="Lions are wild creatures."/> 
  
    </>
  )
}

export default App
