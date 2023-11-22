import React, {useState} from 'react'
import logo from './assets/logo.svg'
import { useTranslation } from "react-i18next";

function Header() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [visible, setVisible] = useState(false);

  let menuClass = 'h-full w-fit bg-secondaryDark fixed top-[80px] right-0 z-10 flex flex-col gap-12 py-8 font-mono text-center px-[70px] md:hidden transition-all duration-300 ease-in-out counterLink';
  if (!visible) menuClass='h-full w-fit bg-secondaryDark fixed top-[80px] right-[-100%] flex flex-col gap-12 py-8 font-mono text-center px-[70px] md:hidden z-10 transition-all duration-300 ease-in-out';

  let backdrop = 'w-[100vw] h-[100vh] block z-10 backdrop-blur-sm md:hidden fixed top-[80px] right-0 transition all duration-300 ease-in-out delay-200';
  if (!visible) backdrop = 'w-[100vw] h-[100vh] fixed hidden z-10 backdrop-filter-none top-[80px] right-[-100%]transition all duration-300 ease-in-out';

  return (
    <div>
      <div className='px-5 h-[80px] flex items-center justify-between lg:px-[50px] fixed top-0 left-0 w-full bg-secondary z-20 shadow-lg'>
          <nav>
          <a href="#"><img src={logo} alt="logo" className='w-8 h-8'/></a>
          </nav>

          <div className={ visible ? `menuIcon menuIconActive` : `menuIcon`} onClick={()=>setVisible(!visible)}>
            <div></div>
          </div>
          <nav className='menuTab'>
            <a href="#about" className='menuLink'>{t('about')}</a>
            <a href="#work" className='menuLink'>{t('projects')}</a>
            <a href="#contact" className='menuLink'>{t('contact')}</a>
            <span className='flex px-2 items-center justify-center'>
            { i18n.resolvedLanguage === "en" ? (
              <button onClick={()=> changeLanguage("fr")} className='special flex gap-2 items-center'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" alt="" className='w-5 h-5 bg-cover bg-center rounded-full' />
              FR</button>
            ) : (
              <button onClick={()=> changeLanguage("en")} className='special flex gap-2 items-center'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="" className='w-5 h-5 bg-cover bg-center rounded-full' />
              EN</button>
            ) }
            </span>
          </nav>
          {/**Mobile Menu */}
        <nav className={menuClass}>
            <a href='#about' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>{t('about')}</a>
            <a href='#work' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>{t('projects')}</a>
            <a href='#contact' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>{t('contact')}</a>
            <span className='flex px-2 items-center justify-center'>
            { i18n.resolvedLanguage === "en" ? (
              <button onClick={()=> changeLanguage("fr")} className='special flex gap-2 items-center'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" alt="" className='w-5 h-5 bg-cover bg-center rounded-full' />
              </button>
            ) : (
              <button onClick={()=> changeLanguage("en")} className='special flex gap-2 items-center'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="" className='w-5 h-5 bg-cover bg-center rounded-full' />
              </button>
            ) }
            </span>
        </nav>
      </div>
      <div className={backdrop} onClick={()=>setVisible(!visible)}></div>
    </div>
  )
}

export default Header