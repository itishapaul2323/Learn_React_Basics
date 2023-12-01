import { useState } from 'react'

import './App.css'

function App() {
  const[colour, colourSetter] = useState("hsl(78, 47%, 70%)")
  return (
    <>
      <h1 className ='mt-8 max-w-4xl text-3xl  text-center font-bold tracking-tight text-black md:text-4xl lg:text-6xl'>Colour Changer</h1>
      <div>
        <div className="flex flex-wrap h-[200px] w-[200px]items-center justify-center rounded-full border border-gray-300 hover:border-gray-400"
        style={{backgroundColor: colour}}
        >
          <div className= "fixed flex flex-wrap justify-center bottom-12 insert-x-2">
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2" style={{backgroundColor:'lavender'}}>
              <button onClick= {()=> colourSetter("hsl(300, 24%, 79%)")} >Lavender</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2" style={{backgroundColor:'#add8e6'}}>
              <button onClick= {()=> colourSetter("hsl(197, 53%, 73%)")} >Blue</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2" style={{backgroundColor:'#ffb6c1'}}>
              <button onClick= {()=> colourSetter("hsl(348, 100%, 86%)")} >Pink</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2" style={{backgroundColor:'#98fb98'}}>
              <button onClick= {()=> colourSetter("hsl(120, 93%, 79%)")} >Green</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2" style={{backgroundColor:'#e6e6fa'}}>
              <button onClick= {()=> colourSetter("hsl(240, 67%, 94%)")} >Purple</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2" style={{backgroundColor:'#fffacd'}}>
              <button onClick= {()=> colourSetter("hsl(56, 100%, 90%)")} >Yellow</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2" style={{backgroundColor:'#ffb347'}}>
              <button onClick= {()=> colourSetter("hsl(34, 100%, 67%)")} >Orange</button>
            </div>
          </div>
        </div>
      </div>     
    </>
  )
}

export default App
