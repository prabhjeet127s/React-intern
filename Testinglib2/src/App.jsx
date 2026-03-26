import './App.css'
import { useState } from 'react';
function App() {


  const [count, setcount] = useState(0);


  const decrement = () => {
    setcount(count - 1)

  }
  const increment = () => {
    setcount(count + 1)

  }
  const restart = () => {
    setcount(0)

  }
  return (
    <>
      <div className=' bg-amber-200 h-screen w-screen  flex justify-center items-center  '>
        <div className='border-2 w-2xl h-60 p-11  bg-pink-300        '       >
          <h1 className='text-center  text-5xl '   >{count}</h1>
          <div className='flex  gap-3'  >
            <button className=' rounded-xl p-2  border-2' onClick={decrement}   >Decrement</button>
            <button className=' rounded-xl p-2  border-2' onClick={restart}  >reset</button>
            <button className=' rounded-xl p-2  border-2' onClick={increment}   >Increment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
