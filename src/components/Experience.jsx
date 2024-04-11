import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import nodejs from "../../public/node.png"
import python from "../../public/python.webp"


const Experience = () => {
  return (
           <>
           <hr />
            <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mb-14'>

                <h1 className='font-bold text-2xl m-4 '>Experiences</h1>

                <div className='md:grid md:grid-cols-5 grid grid-cols-2 gap-5'>

           

                <div  className='cursor-pointer hover:scale-105 duration-150'>
               
                    <img className='rounded-full w-[200px] h-[200px] border-[2px] radius-[2px]' src={html} width={150} alt="" />
                    <h1 className="font-bold text-2xl">HTML </h1>
                </div>
                <div className='cursor-pointer hover:scale-105 duration-150'>
                    <img className='rounded-full w-[200px] h-[200px] border-[2px] radius-[2px]' src={css} width={150} alt="" />
                    <h1 className="font-bold text-2xl">CSS</h1>
                </div>
                <div className='cursor-pointer hover:scale-105 duration-150'>
                    <img className='rounded-full w-[200px] h-[200px] border-[2px] radius-[2px]' src={javascript} width={150} alt="" />
                    <h1 className="font-bold text-2xl">Java Script  </h1>
                </div>
                <div className='cursor-pointer hover:scale-105 duration-150'>
                    <img className='rounded-full w-[200px] h-[200px] border-[2px] radius-[2px]' src={reactjs} width={150} alt="" />
                    <h1 className="font-bold text-2xl">React Js</h1>
                </div>
                <div className='cursor-pointer hover:scale-105 duration-150'>
                    <img className='rounded-full w-[200px] h-[200px] border-[2px] radius-[2px]' src={nodejs} width={150} alt="" />
                    <h1 className="font-bold text-2xl">Node Js </h1>
                </div>
                <div className='cursor-pointer hover:scale-105 duration-150'>
                    <img className='rounded-full w-[200px] h-[200px] border-[2px] radius-[2px]' src={python} width={150} alt="" />
                    <h1 className="font-bold text-2xl">Python  </h1>
                </div>
                </div>
            </div>
            <hr />
           </>
  )
}

export default Experience
