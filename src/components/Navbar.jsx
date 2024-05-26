import React, { useState } from 'react'
import pic from "../../public/develo.png"
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-scroll"


const Navbar = () => {

    const [Menu, setmenu] = useState(false);
    const navItem = [

        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "Portfolio"
        },
        {
            id: 3,
            text: "About"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contacts"
        }
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white '>
                <div className='flex justify-between h-16 items-center '>
                    <div className='flex space-x-2'>
                        <div className='flex space-x-2' >
                            <img src={pic} className='w-12 h-12 rounded-full' alt="" />
                        </div>
                        <div className='font-semibold text-xl cursor-pointer '>
                            <h1 className='text-2xl font-bold '>Nare<span className='text-green-500'>n</span></h1>
                            <p className='font-bold'>Web Develpoer
                            </p>
                        </div>
                    </div>


                    <div> <ul className='hidden md:flex space-x-8 '>
                        {/* <li>Home</li>
                        <li>Porfolio</li>
                        <li>Experience</li>
                        <li>About</li>
                        <li>Contacts</li> */}

                        {
                            navItem.map(({ id, text }) => (
                                <li className='hover:scale-110 duration-200 cursor-pointer' key={id}>
                                    
                                    <Link to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    > 
                                    {text}
                                    </Link>
                                    
                                    </li>
                            ))
                        }
                    </ul>

                        <div className='md:hidden ' onClick={() => setmenu(!Menu )}> {Menu ?  <AiOutlineMenu size={26}/> :<RxCross2 size={26}  />}
                        
                        </div>
                    </div>

                </div>
            </div>

            {
                Menu && (
                    <div>
                        <ul className='md:hidden flex justify-center items-center flex-col h-screen relative top-2 font-semibold text-xl py-4'>
                            {/* <li>Home</li>
                            <li>Porfolio</li>
                            <li>Experience</li>
                            <li>About</li>
                            <li>Contacts</li> */}
                            {
                                navItem.map(({ id, text }) => (
                                    <li className='hover:scale-110 duration-200 cursor-pointer font-semibold text-2xl' key={id}>
                                       
                                    <Link to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    > 
                                    {text}
                                    </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }

        </>
    )
}

export default Navbar
