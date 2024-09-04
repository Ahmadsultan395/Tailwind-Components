import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Navbar2 = () => {
    const [isOpen , setIsOpen] = useState(false);

    const handleMenuOpen =()=>{
        setIsOpen(!isOpen);
    }

  return (
    <>
    <div className='bg-gray-200 flex justify-between items-center py-2 px-5 static w-full' >
        <div className='flex justify-start '>
            <img src="/logo1.png" alt=""  className='w-14 md:w-20'/>
        </div>
      
       <ul className={`flex flex-col md:flex-row items-center md:bg-[transparent] bg-gray-200 justify-center -mx-5 md:mx-0  md:px-0 py-2 md:py-0 w-full md:w-auto absolute  md:static gap-5      
       ${isOpen ? 'top-[65px] transit duration-500 opacity-100' : 'top-[-400px] md:top-0 transit duration-500 md:opacity-100 opacity-0'}`}>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Home</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Services</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">About</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Contact</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Blogs</a></li>
        </ul>

        <button className=' md:hidden' onClick={handleMenuOpen}>
        { isOpen ? (<IoMdClose/>) : (<FaBars /> )}
        </button>
    </div>
    </>
  )
}

export default Navbar2