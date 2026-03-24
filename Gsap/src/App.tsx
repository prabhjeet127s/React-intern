import gsap from "gsap";
import './App.css'
import { useEffect } from "react";
import scroll

function App() {

  useEffect(() => {

    /**  gsap.to(".box1",{x: 900, duration: 2});
     gsap.to(".box1", { y: 5000,x:-500,duration: 30,delay:2 }); */

    /** const t1 = gsap.timeline()
     t1.to('.box1', { x: 100, duration: 4 }).
       to(".box1", { y: 100, duration: 4 })
       */
    /** 
        const t1 = gsap.timeline()
        t1.from('.box1', {
    
          x: -200,
    
          duration: 2
    
    
        }).to('.box', {
          y: -100,
          stagger: 0.4
        })
    
          .to('.box', {
            x: -100,
            stagger: 0.4,
    
          }).to('.box', {
            y: 100,
            stagger: 0.4
          })
          .to('.box', {
            y: -100,
            stagger: 0.4
          }).to('.box1', {
            x: -300,
            y: -50,
            duration: 2,
            //  ease: "bounce.out"
            //ease: "elastic.out(1, 0.3)"
            repeat: -1,
    
            //yoyo: true
    
    
    
          })
    
        gsap.fromTo(".box1",
          { x: -200, opacity: 0 },   // start
          { x: 200, opacity: 1 }     // end
        );
    
    
    */

    // const tl = gsap.timeline();

    // tl.from(".box1", {
    //   x: -100,
    //   opacity: 0
    // })
    //   .to(".box2", {
    //     y: -100
    //   })
    //   .fromTo(".box3",
    //     { scale: 0 },
    //     { scale: 1.2 }
    //   );


    // const t1 = gsap.timeline()


    // t1.from('.box1', {

    //   y: 200,
    //   duration: 2,
    //   stagger: 0.3
    // }).to('.box2', {
    //   x: 300,
    //   duration: 2,
    //   stagger: 0.3

    // }).fromTo('.box4',
    //   { y: 0 },     // start
    //   { y: 100 }    // end
    // );






  }, []);



  return (
    <>
      <div className=' bg-blue-300 w-screen min-h-screen ' >
        <div className="flex flex-col  gap-5 justify-end h-full  items-center "  >
          <div className='  box1 box   bg-pink-900 h-52 w-52'></div>
          <div className='  box2 box  bg-yellow-900 h-52 w-52'></div>
          <div className='  box3 box  bg-blue-900 h-52 w-52'></div>
          <div className='  box4 box  bg-amber-300 h-52 w-52'></div>
          <div className='  box5 box  bg-green-500 h-52 w-52'></div>
          <div className='  box6 box  bg-orange-900 h-52 w-52'></div>
          <div className='  box7 box  bg-gray-800 h-52 w-52'></div>
          <div className='  box8 box  bg-red-900 h-52 w-52'></div>
          <div className='  box9 box  bg-amber-900 h-52 w-52'></div>
          <div className='  box10 box  bg-amber-900 h-52 w-52'></div>
          <div className='  box11 box  bg-amber-900 h-52 w-52'></div>
          <div className='  box12 box  bg-amber-900 h-52 w-52'></div>

        </div>
      </div>
    </>
  )
}

export default App
