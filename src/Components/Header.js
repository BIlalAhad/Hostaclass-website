import React from 'react'

export default function Header() {
  function hamburger(){
   let nav=document.getElementById("nav")
        nav.classList.toggle("hidden");
  }
  return (


    <>
    <ul className='grid gap-1 sm:hidden p-5' onClick={hamburger}>
        <li className='w-10 h-2 rounded-2xl bg-black'></li>
        <li className='w-10 h-2  rounded-2xl bg-black'></li>
        <li className='w-10 h-2 rounded-2xl bg-black'></li>
    </ul>
    <section className='px-7 hidden sm:grid ' id='nav'>
        
        <nav className='flex flex-col sm:flex-row justify-between py-5 gap-3 sm:gap-0 bg-white items-center' >
         <ul className='flex flex-col sm:flex-row gap-6 text-sm justify-between  items-center'>
            <h1 className='sm:flex hidden text-2xl'>Hostaclass.com</h1>
            <li className='hover:text-[#2C5F2D] cursor-pointer'>Features</li>
            <li  className='hover:text-[#2C5F2D] cursor-pointer'>Pricing</li>
            <li  className='hover:text-[#2C5F2D] cursor-pointer'>About US</li>
         </ul>
         <div className='flex flex-col sm:flex-row items-center gap-6'>
            <button>Login</button>
            <button className='bg-[#2C5F2D]  px-4 py-2 text-white hover:brightness-75 rounded-md'>Join for free</button>
         </div>
        </nav>
    </section>

    </>
  )
}
