import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './Pages/components/Navbar1/Navbar1'
import Navbar2 from './Pages/components/Navbar2/Navbar2'
import ENavbar from './Pages/components/EcommerceNavbar/ENavbar'


function App() {
 

  return (
    <>
    <div className='-z-20 bg-[url(bg2.jpg)] bg-cover bg-no-repeat object-cover bg-center h-screen w-full'>
    <div>
       {/* <h1 className='text-red-600 text-6xl'>app</h1> */}
     {/* <Navbar1/> */}
     {/* <Navbar2/> */}
     <ENavbar/>
    </div>
    </div>

    </>
  )
}

export default App
