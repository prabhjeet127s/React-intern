



















import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";


const Home = () => {
      const navigate =useNavigate();

      
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

    gsap.to(".box1,.box2,.box3,.box4,.box5", {

      x: 100,
      duration: 3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".box1",
      }
    });
  }, []);

    
  return (

    <div className="bg-blue-300 w-screen h-[300vh] flex flex-col items-center gap-10 pt-20">
      <button  onClick={()=>navigate('/page1')} className="bg-black text-white border-2 p-2.5 border-gray-400 shadow-2xl" >Go To Page 1</button>

      <div className="box bg-pink-900 h-520 w-52"></div>
      <div className="box bg-yellow-900 h-52 w-52"></div>
      <div className="box bg-blue-900 h-52 w-52"></div>
      <div className="box bg-amber-300 h-52 w-52"></div>
      <div className="box bg-green-500 h-52 w-52"></div>
      <div className="box bg-orange-900 h-52 w-52"></div>
      <div className="box bg-gray-800 h-200 w-52"></div>
    </div>

  )
}

export default Home
