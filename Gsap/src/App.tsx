import gsap from "gsap";
import './App.css'
import { useEffect } from "react";

function App() {


  useEffect(() => {

    gsap.to(".box1",
      {
        x: 900,
        duration: 2

      });
    gsap.to(".box1", { y: 5000,x:-500,duration: 30,delay:2 });

  }, []);

  return (
    <>
      <div className=' bg-blue-300 w-screen h-screen ' >
        <div className="flex gap-5 justify-center h-full  items-center "  >
          <div className='  box1   bg-pink-900 h-52 w-52'></div>
          <div className='  box2   bg-amber-900 h-52 w-52'></div>
          <div className='  box3   bg-amber-900 h-52 w-52'></div>
          <div className='  box4   bg-amber-900 h-52 w-52'></div>
          <div className='  box5   bg-amber-900 h-52 w-52'></div>

        </div>
      </div>

    </>
  )
}

export default App
