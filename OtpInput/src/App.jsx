import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [otp, setotp] = useState(["", "", "", ""])
  const inputref=useRef([]);

  const handlechange=(e,index)=>{

    if(e.target.value && index<3){
      inputref.current[index+1].focus();
    }

  }
  const handlekeydown=(e,index)=>{
  
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputref.current[index - 1]?.focus();
        }
  }
  return (
    <div className='bg-gray-500 h-screen  flex justify-center items-center   '    >
      <div className='h-70 w-120 rounded-2xl shadow-2xl p-5  gap-5  bg-white'   >
        <div className='text-center ' >

          <h3 className='font-bold text-3xl mb-6'>Enter Your Otp Here</h3>
        </div>
        <div className='flex gap-6 justify-center' >
          {otp.map((e,index) => (
            <input 
            onKeyDown={(e)=>handlekeydown(e,index)}
            onChange={(e)=>handlechange(e,index)}
            ref={(el)=>(inputref.current[index]=el)}
            type="text" className='border-2  rounded-lg shadow-2xl bg-gray-200 w-15 h-15 text-2xl p-4 focus:outline-2 focus:outline-blue-400  ' />
          ))}
        </div>

        <button></button>



      </div>
    </div>

  )
}

export default App
