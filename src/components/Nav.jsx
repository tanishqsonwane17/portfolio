import React from 'react'
import '../App.css'
const Nav = () => {
  return (
    <>
    <div className=' p-4 w-full bg-[#23212c]  '>
      <div className='flex items-center gap-2'>
        <div className='h-20 w-20 rounded-full border-white overflow-hidden'>
        <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div>
       <h5 className='text-white font-bold text-xl mb-1'>Tanishq Sonwane</h5>
      <p className='text-xs text-gray-300 '>@tanxocean</p>
      </div>
      </div>
      <h1 className='text-2xl text-white text-center -mt-8'>Lorem ipsum dolor sit amet.</h1>
    </div>
    </>
  )
}

export default Nav