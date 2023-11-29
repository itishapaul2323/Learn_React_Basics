import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-8 mb-4'>Tailwind Basic</h1>
      <br/>
      <Card username = "user test" btnText="visit here"/>
      <Card username = "itisha" btnText = "click here"/>
    </>
  )
}

export default App


//props makes the component reusable
