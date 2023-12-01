import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllow, setNumAllowed] = useState(false)
  const [scAllow, setSCAllowed] = useState(false)
  const [password, setPassword] = useState("");

  //password reference

  const passwordRef =  useRef(null)

  const copyPasstoClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str+= "1234567890"
    if (scAllow) str+= ".,+!@#$%^&*(){}[]"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)


  }, [length, numAllow, scAllow, setPassword])
  
  useEffect(() => { 
    passwordGenerator()
  }, [length, numAllow, scAllow, passwordGenerator])


  return (
    <>
      <h1 className='text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl lg:leading-tight text-white font-serif	'>Password Generator</h1>
      <div className="w-fit mx-auto shadow-md  space-y-2 p-8 text-lg text-green-600 bg-gray-800 object-center my-2.5 rounded-md" >
        <div>
          <div className="object-center rounded-md p-4 m-2">
            <input type="text" value={password} placeholder='password' className="w-64 rounded-md text-lg font-serif p-4 m-2" readOnly ref={passwordRef}/>
            <button className="rounded-md text-lg font-serif p-4 bg-green-600 text-white m-2" onClick= {copyPasstoClip}>Copy</button>
          </div>
        </div>
        <div className='flex'>
          <div className='p-4 m-2'>
            <input type="range" min={8} max={50} value={length} className="cursor-pointer " onChange={(e) => setLength(e.target.value)}/>
            
            <label className="text-white text-lg p-2">Length: {length}</label>
          </div>
          <div className='p-4 m-2'>
            <input type="checkbox" className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-green-600 checked:border-green-600" defaultChecked={numAllow} onChange={() => { setNumAllowed((prev) => !prev ) }} />
            <label className="text-white text-lg p-2">Numbers</label>
          </div>
          <div className='p-4 m-2'>
            <input type="checkbox" className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-green-600 checked:border-green-600" defaultChecked={scAllow} onChange={() => { setSCAllowed((prev) => !prev ) }} />
            <label className="text-white text-lg p-2">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
