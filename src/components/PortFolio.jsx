import React from 'react'
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import mongodb from "../../public/mongodb.jpg"
import node_ from "../../public/node.png"
import python from "../../public/python.webp"
import reactjs from "../../public/reactjs.png"
import oracle from "../../public/oracle.png"

const PortFolio = () => {

    const itemsCard  =[

        {
            id:1,
            logo:"mongodb",
            name:"MongoDb"

        },
        {
            id:2,
            logo:"java",
            name:"javA"
        },
        {
            id:3,
            logo:"javaScript",
            name:"JavaScript"
        },

        {
            id:4,
            logo:"reactjs",
            name:"REactjs"
        },{
            id:5,
            logo:"Python",
            name:"python"
        }
    ]
  return (
        <>
       <div
       name="Portfolio"
       className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>

        <div>
            <h1 className='text-3xl  font-bold '>PortFolio</h1>
            <span className='underline font-semibold space-y-4'>Featured Projects </span>
          </div>
          <br />

     <div className='md:grid-cols-4 grid grid-cols-1 gap-4'>

        <div className='cursor-pointer hover:scale-105 duration-200 rounded-xl border-slate-300 border-[2px] md:w-[300px] md:h-[300px] '>

                <div className='flex items-center justify-center mt-5'> <img className='border-[3px] rounded-full' src={java} alt="" width={140} /></div>
                 <div className='pl-3'>
                 <h1 className='font-bold text-xl '>Java</h1>
                <p>Lorem ipsum dolor fugiat velit ipsum! Numquam, commodi magni.</p>
                 
                 <div className=' flex gap-3 mt-2'>

                 <button className='bg-blue-700 w-[100px] h-fit shadow  rounded-sm p-1 '>Video</button>

                <button className=' bg-green-600 w-[100px] h-fit shadow  rounded-sm p-1 space-y-7 '>        Source Code</button>
                 </div>
                 </div> 
        </div>
        <div className='cursor-pointer hover:scale-105 duration-200 rounded-xl border-slate-300 border-[2px] md:w-[300px] md:h-[300px] '>

                <div className='flex items-center justify-center mt-5'> <img className='border-[3px] rounded-full' src={javascript} alt="" width={140} /></div>
                 <div className='pl-3'>
                 <h1 className='font-bold text-xl '>Java Scprit </h1>
                <p>Lorem ipsum dolor fugiat velit ipsum! Numquam, commodi magni.</p>
                 
                 <div className=' flex gap-3 mt-2'>

                 <button className='bg-blue-700 w-[100px] h-fit shadow  rounded-sm p-1 '>Video</button>

                <button className=' bg-green-600 w-[100px] h-fit shadow  rounded-sm p-1 space-y-7 '>        Source Code</button>
                 </div>
                 </div> 
        </div>
        <div className='cursor-pointer hover:scale-105 duration-200 rounded-xl border-slate-300 border-[2px] md:w-[300px] md:h-[300px] '>

                <div className='flex items-center justify-center mt-5'> <img className='border-[3px] rounded-full' src={mongodb} alt=""width={140} /></div>
                 <div className='pl-3'>
                 <h1 className='font-bold text-xl '>Mongo Db</h1>
                <p>Lorem ipsum dolor fugiat velit ipsum! Numquam, commodi magni.</p>
                 
                 <div className=' flex gap-3 mt-2'>

                 <button className='bg-blue-700 w-[100px] h-fit shadow  rounded-sm p-1 '>Video</button>

                <button className=' bg-green-600 w-[100px] h-fit shadow  rounded-sm p-1 space-y-7 '>        Source Code</button>
                 </div>
                 </div> 
        </div>
        <div className='cursor-pointer hover:scale-105 duration-200 rounded-xl border-slate-300 border-[2px] md:w-[300px] md:h-[300px] '>

                <div className='flex items-center justify-center mt-5'> <img className='border-[3px] rounded-full' src={node_} alt="" width={140} /></div>
                 <div className='pl-3'>
                 <h1 className='font-bold text-xl '>Node Js</h1>
                <p>Lorem ipsum dolor fugiat velit ipsum! Numquam, commodi magni.</p>
                 
                 <div className=' flex gap-3 mt-2'>

                 <button className='bg-blue-700 w-[100px] h-fit shadow  rounded-sm p-1 '>Video</button>

                <button className=' bg-green-600 w-[100px] h-fit shadow  rounded-sm p-1 space-y-7 '>   Source Code</button>
                 </div>
                 </div> 
        </div>
        <div className='cursor-pointer hover:scale-105 duration-200 rounded-xl border-slate-300 border-[2px] md:w-[300px] md:h-[300px] '>

                <div className='flex items-center justify-center mt-5'> <img className='border-[3px] rounded-full' src={python} alt="" width={140} /></div>
                 <div className='pl-3'>
                 <h1 className='font-bold text-xl '>Python </h1>
                <p>Lorem ipsum dolor fugiat velit ipsum! Numquam, commodi magni.</p>
                 
                 <div className=' flex gap-3 mt-2'>

                 <button className='bg-blue-700 w-[100px] h-fit shadow  rounded-sm p-1 '>Video</button>

                <button className=' bg-green-600 w-[100px] h-fit shadow  rounded-sm p-1 space-y-7 '>        Source Code</button>
                 </div>
                 </div> 
        </div>
        <div className='cursor-pointer hover:scale-105 duration-200 rounded-xl border-slate-300 border-[2px] md:w-[300px] md:h-[300px] '>

                <div className='flex items-center justify-center mt-5'> <img className='border-[3px] rounded-full' src={reactjs} alt="" width={140} /></div>
                 <div className='pl-3'>
                 <h1 className='font-bold text-xl '>React js </h1>
                <p>Lorem ipsum dolor fugiat velit ipsum! Numquam, commodi magni.</p>
                 
                 <div className=' flex gap-3 mt-2'>

                 <button className='bg-blue-700 w-[100px] h-fit shadow  rounded-sm p-1 '>Video</button>

                <button className=' bg-green-600 w-[100px] h-fit shadow  rounded-sm p-1 space-y-7 '>        Source Code</button>
                 </div>
                 </div> 
        </div>
        <div className='cursor-pointer hover:scale-105 duration-200 rounded-xl border-slate-300 border-[2px] md:w-[300px] md:h-[300px] '>

                <div className='flex items-center justify-center mt-5'> <img className='border-[3px] rounded-full' src={oracle} alt="" width={140} /></div>
                 <div className='pl-3'>
                 <h1 className='font-bold text-xl '>Oracle</h1>
                <p>Lorem ipsum dolor fugiat velit ipsum! Numquam, commodi magni.</p>
                 
                 <div className=' flex gap-3 mt-2'>

                 <button className='bg-blue-700 w-[100px] h-fit shadow  rounded-sm p-1 '>Video</button>

                <button className=' bg-green-600 w-[100px] h-fit shadow  rounded-sm p-1 space-y-7 '>        Source Code</button>
                 </div>
                 </div> 
        </div>
      </div>
        <br />


       </div>
        </>
  )
}

export default PortFolio
