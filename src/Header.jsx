import React, {useState} from 'react'

function Header() {

  const [visible, setVisible] = useState(false);

  let menuClass = 'h-full w-fit bg-secondaryDark fixed top-[80px] right-0 z-10 flex flex-col gap-12 py-8 font-mono text-center px-[70px] md:hidden transition-all duration-300 ease-in-out counterLink';
  if (!visible) menuClass='h-full w-fit bg-secondaryDark fixed top-[80px] right-[-100%] flex flex-col gap-12 py-8 font-mono text-center px-[70px] md:hidden z-10 transition-all duration-300 ease-in-out';

  return (
    <div>
      <div className='px-5 h-[80px] flex items-center justify-between lg:px-[50px] fixed top-0 left-0 w-full bg-secondary z-20 shadow-lg'>
          <nav>
          <a href="" className='w-fit px-3 text-xl text-primary font-semi-bold'>HA.</a>
          </nav>

          <div className={ visible ? `menuIcon menuIconActive` : `menuIcon`} onClick={()=>setVisible(!visible)}>
            <div></div>
          </div>
          {/**Mobile Menu */}
        <nav className={menuClass}>
            <a href='#about' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>About</a>
            <a href='#experience' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>Experience</a>
            <a href='#work' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>Projects</a>
            <a href='#contact' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Header