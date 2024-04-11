import React from 'react'

const Contact = () => {
    return (
        <>
            <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 mb-16'>

                <h1 className='font-bold text-3xl '>Contact me </h1>
                <p>
                    For any Qury Pls fill the below form to contact me
                </p>
                <div className='flex justify-center items-center gap-y-4 mt-4'>

           
                <form action="https://getform.io/f/pbmqmzob" method='POST'>
                <div className='w-[200px]  bg-gray-600 text-white rounded-md shadow '>
                    <h1 className=' text-white  ml-3 space-x-2'>Send Your Message</h1>

                
                        <div  className='flex flex-col m-3'>
                            <span>Full Name</span>
                            <input className=' text-black w-[160px] rounded-sm' type="text" placeholder='Enter YOUr full Name ' name='Name' width={50} />
                        </div>

                        <div className='flex flex-col m-3'>
                            <span>Email</span>
                            <input className=' text-black w-[160px] rounded-sm' type="text" placeholder='Enter YOUr email ' name='Email' width={50} />
                        </div>

                        <div className='flex flex-col m-3 '>
                            <span>Messege </span>
                            <input className=' text-black w-[160px] rounded-sm' type="text" placeholder='write messege ' name='Message' width={50} />
                        </div>
                       <div className='flex justify-center items-center'>
                       <button className='bg-blue-900 rounded-xl p-2 w-[100px]  ' type='submit'>Submit</button>
                       </div>
                    </div>
                    </form>
                    </div> 
            </div>
            <hr />
        </>
    )
}

export default Contact
