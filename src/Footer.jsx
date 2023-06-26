import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { RxLinkedinLogo } from 'react-icons/rx'
import { GrInstagram } from 'react-icons/gr'
import { FaBehance } from 'react-icons/fa'

function Footer() {
  return (
    <div className=''>
        <div className='flex gap-8 text-xl w-fit mx-auto px-5 z-20 items-center transition-all duration-100 ease-out
        md:fixed md:left-0 md:bottom-0 md:flex-col md:px-2 md:gap-4 md:py-0
        md:after:content-[""] md:after:block md:after:h-10 md:after:w-[1px] md:after:bg-blancDark
        lg:left-6'>
            <a href="https://github.com/Hansjason97" className='footerLink'><VscGithub /></a>
            <a href="https://www.linkedin.com/in/jason-adiogo-a12018199" className='footerLink'><RxLinkedinLogo /></a>
            <a href="https://www.instagram.com/jasonadiogo/" className='footerLink'><GrInstagram /></a>
            <a href="https://www.behance.net/hanspen" className='footerLink'><FaBehance /></a>
        </div>
        <div className='hidden z-20 px-5 pb-10 md:flex md:items-center transition-all duration-100 ease-out
        md:fixed md:right-1 md:bottom-0 md:flex-col md:px-2 md:gap-4 md:py-0
        md:after:content-[""] md:after:block md:after:h-10 md:after:w-[1px] md:after:bg-blancDark
        lg:right-7'>
            <a href="mailto:hansadiogo@gmail.com" className='footerMail'>hansadiogo@gmail.com</a>
        </div>
        <div className='flex py-5 justify-center gap-5 font-mono text-sm'>
          <a href="" className='transition-all duration-100 ease-linear hover:text-primary'>Built by Hans Adiogo</a> -
          <a href="" className='transition-all duration-100 ease-linear hover:text-primary'>Inspiration</a>
        </div>
    </div>
  )
}

export default Footer