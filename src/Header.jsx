import React from 'react'
import logo from './assets/logo.svg'

function Header() {
  return (
    <div className='px-5 h-[100px] flex items-center justify-between lg:px-[50px] fixed top-0 left-0 w-full'>
        <nav>
           <img src={logo} alt="logo" className='h-[40px]' /> 
        </nav>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary lg:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
    </div>
  )
}

export default Header