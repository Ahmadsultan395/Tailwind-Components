import React, { useState } from 'react'
import ENavLinks from './ENavLinks'
import EButton from './EButton'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";




const ENavbar = () => {

    const [isOpen , setIsOpen] = useState(false)

  return (
   <nav className=''>
     <div className='bg-white  flex justify-between items-center px-5 py-2'>
        <div className='flex justify-between items-center w-full md:w-auto' >
            <img src="/logo6.png" alt=""  width={'100rem'} />
            <div onClick={()=>setIsOpen(!isOpen)} className='md:hidden block'>
                {isOpen ? <IoMdClose/> : <FaBarsStaggered/>}
                
            </div>
        </div>
            <ul className='flex  flex-row gap-5 uppercase hidden md:flex r'>
                <li className='cursor-pointer hover:text-blue-700 text-[1rem] md:text-[1.1rem] font-semibold'>
                    Home
                </li>
                    <ENavLinks/>
            </ul>
        <div className='hidden md:block'>
            <EButton name="Get Started"/>
        </div>
    </div>
    {/* ======================================MOBILE ========================================= */}
    
    <ul className={`flex flex-col gap-10 uppercase block md:hidden bg-white px-5 py-16 top-[70px]  absolute left-0 w-full
    transition-all duration-500 ease-in-out
    ${isOpen ? 'left-0' : 'left-[-800px]'}`}>
                <li className='text-[1rem] md:text-[1.1rem] font-semibold' >
                 <Link to={'/'}>Home</Link>
                </li>
                    <ENavLinks/>
                    <div className='md:hidden block'>
            <EButton name="Get Started"/>
            
        </div>
            </ul>

   </nav>
  )
}

export default ENavbar