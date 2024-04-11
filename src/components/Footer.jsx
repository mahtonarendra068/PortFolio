import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
    return (
        <>    
        <br />
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
              

                <div>
                 

                   
                    <ul className='flex space-x-5 items-center justify-center '>
                        <a href="https://www.facebook.com/" target='_blank'> <li> <AiFillFacebook className='text-xl font-semibold cursor-pointer hover:scale-105 duration-200' /></li></a>
                        <a href="https://in.linkedin.com/" target='_blank'><li> < BsLinkedin className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li></a>
                        <a href="https://www.youtube.com/" target='_blank'>  <li><  BsYoutube className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li></a>
                        <a href="https://telegram.org/" target='_blank'>  <li><BsTelegram className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li></a>

                    </ul>

                    <div className=' border-gray-700 pt-8 flex flex-col items-center'>
                    <div className='w-[180px] border-gray-800 border-t'> </div>

                        <p> &copy; 2024 All copyrights are reserved from Naren Developer </p>
                        <p>Thanks for visting our site </p>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Footer
