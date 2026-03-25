import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Pages1 = () => {

    useEffect(() => {

        const data = gsap.utils.toArray('.box')

        data.forEach((el) => {

            return gsap.to(el, {
                x: 100,
                duration:3,
                scrollTrigger: {
                    trigger: el
                }
            });  
        }
        )
    }, [])
    return (

        <div className="bg-gray-300 w-screen h-[300vh] flex flex-col items-center gap-10 p-5">
            <div className="box bg-pink-900 h-52 w-52 flex justify-center items-center text-2xl text-white ">box 1</div>
            <div className="box bg-yellow-900 h-52 flex justify-center items-center text-2xl text-white w-52">box 2 </div>
            <div className="box bg-blue-900 h-52 flex justify-center items-center text-2xl text-white w-52">box 3</div>
            <div className="box bg-amber-300 h-52 flex justify-center items-center text-2xl text-white w-52">box 4</div>
            <div className="box bg-green-500 h-52 flex justify-center items-center text-2xl text-white w-52">box 5</div>
            <div className="box bg-orange-900 h-52 flex justify-center items-center text-2xl text-white w-52">box 6</div>
            <div className="box bg-gray-800 h-52 flex justify-center items-center text-2xl text-white w-52">box 7</div>
        </div>
    )
}

export default Pages1
