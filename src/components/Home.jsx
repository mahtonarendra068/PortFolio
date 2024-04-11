import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import pic from "../../public/develo.png"


const Home = () => {
    return (
        <>
        
            <div
             name="Home"
             className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20 '>
                <div className='flex flex-col md:flex-row '>

                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2  md:order-1 order-2'>
                        <span className='text-xl font-semibold'> Welcome in My Feed </span>
                        <div className='flex gap-2 font-bold text-2xl  md:text-4xl'>
                            <h1>Hello ,I'm a </h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}

                            <ReactTyped className='text-red-700 font-bold'
                                startWhenVisible
                                strings={[
                                    "Developer" ,"Coder", "Programmer",
                                ]}
                                // typeSpeed={400}
                                typeSpeed={300}
                                // loop={true}
                            />
                        </div>

                        <br />
                        <p className='text-justify text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur modi, aliquam incidunt qui commodi sit accusamus voluptatem veniam dicta, totam sequi obcaecati corrupti consequatur corporis beatae magnam placeat perspiciatis? Repudiandae porro voluptate vel, voluptatibus sed deserunt nemo? Debitis hic, eos saepe inventore corporis odio modi.</p>


                        <br />
                        {/* {social media icons } */}
                        <div className='flex justify-between md:flex-row flex-col  items-center space-y-7 md:space-y-0'>


                            <div className='space-y-2'>
                                <h1 className='text-2xl '>Available On </h1>
                                <ul className='flex space-x-5'>
                                    <a href="https://www.facebook.com/" target='_blank'> <li> <AiFillFacebook className='text-xl font-semibold cursor-pointer hover:scale-105 duration-200' /></li></a>
                                   <a href="https://in.linkedin.com/"  target='_blank'><li> < BsLinkedin className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li></a>
                                  <a href="https://www.youtube.com/" target='_blank'>  <li><  BsYoutube className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li></a> 
                                  <a href="https://telegram.org/" target='_blank'>  <li><BsTelegram className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li></a> 
                                </ul>
                            </div>

                            <div className='space-y-2'>
                                <h1 className='text-2xl '>Current Working on </h1>
                                <ul className='flex space-x-5'>
                                    <li><BiLogoMongodb className='text-xl font-bold cursor-pointer hover:scale-105 duration-200 ' /></li>
                                    <li> <SiExpress className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li>
                                    <li><BiLogoReact  className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li>
                                    <li><BiLogoNodejs className='text-2xl cursor-pointer hover:scale-105 duration-200' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className='md:h-1/2 ml-16  md:ml-48 md:mt-20 md:order-2 order-1 mt-5'> <img src={pic} alt="" className='rounded-full md:w-[450px] md:h-[450px]' /> </div>
                </div>
            </div>
            <hr />

        </>
    )
}

export default Home
