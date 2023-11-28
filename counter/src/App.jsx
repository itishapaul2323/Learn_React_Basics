import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //useState - used to propogte changes in the DOM 
  let [counter, setCounter] = useState(15)

  const addValue = () => {

    setCounter(counter+1)

  }

  const removeValue = () => {
    setCounter(counter -1)
  }

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
