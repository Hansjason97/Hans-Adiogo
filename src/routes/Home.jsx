import React from 'react'
import FeaturedProjects from '../components/FeaturedProjects'
import Reveal from '../components/Reveal'
import { featuredProjects } from '../data/data'

import { useTranslation } from "react-i18next"

function home() {

  const { t } = useTranslation();

  return (
    <div>
      {/* First section ############################################################## */}
      <Reveal>
      <section id="home" className='min-h-[100vh] px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-5xl flex flex-col justify-center'>
        <p className='special mb-1'>{t('hi')}</p>
        <h2 className='lvlOne text-blanc'>
          KrestDev.
        </h2>
        <h2 className='lvlOne'>
          {t('titleHome')}
        </h2>

        <p className='mt-5 max-w-lg'>
          {t('desc')}
        </p>
          <button className='mt-6 button-primary'>
            <a href="mailto:gviche@krestholding.com">{t('contactMe')}</a>
          </button>
      </section>
      </Reveal>
      {/**Second section #############################################################"" */}
      <Reveal>
      <section id='about' className='containerBase'>
        <h2 className='numbered-heading'>
          {t('aboutMe')}
        </h2>
        <div className='flex flex-col md:flex-row gap-[50px]'>
          <div className='lg:w-[512px] flex flex-col gap-4'>
            <p>
              {t('aboutTxt1')}{/**<a href="" className='customLink'>figma</a>/
               */}
            </p>
            <p>
            {t('aboutTxt2')}
            </p>
             <p>
            {t('aboutTxt3')}
            </p>
            <ul role='list' className='technologies'>
                <li>Javascript</li>
                <li>React</li>
                <li>Figma</li>
                <li>Laravel</li>
                <li>Angular</li>
              </ul>
          </div>
          <div className='mx-auto sm:mx-0 relative top-0 max-h-[300px] w-fit cursor-pointer group transition-all duration-300 ease-in hover:top-[-7px]'>
            <div className='absolute h-full w-full z-[2] transition-all duration-150 ease-linear mix-blend-color hover:opacity-0'></div>
            <img src="/images/krestdev.png" alt="" className='max-w-[300px] object-cover contrast-50 group-hover:contrast-100 grayscale group-hover:grayscale-0 transition-all duration-150 ease-linear' />
          </div>
        </div>
      </section>
      </Reveal>
      {/**Third section ################################################################## */}
      {/* <Reveal>
      <section id='experience' className='containerBase'>
        <h2 className='numbered-heading'>
          {t('expMe')}
        </h2>
        <Tabs content={experience} />
      </section>
      </Reveal> */}
      {/**Fourth Section ################################################################# */}
      <Reveal>
      <section id='work' className='containerBase'>
        <h2 className='numbered-heading lg:w-fit lg:max-w-5xl lg:mx-auto'>
          {t('projectsSection')}
        </h2>
        <p className='max-w-sm text-xs'>{t('Added')}</p>
        <FeaturedProjects data={featuredProjects} />
      </section>
      </Reveal>
      {/**Contact Section ################################################################# */}
      <Reveal>
      <section id='contact' className='containerBase'>
        <p className='special text-center mb-1'>
          {t('contactTop')}
        </p>
        <h2 className='text-3xl sm:text-5xl leading-[110%] tracking-tight mb-8 text-blanc text-center'>
          {t('contactTitle')}
        </h2>
        <p className='mx-auto max-w-lg text-center'>
          {t('contactContent')}
        </p>
        <button className='my-10 button-primary mx-auto'>
            <a href="mailto:gviche@krestholding.com">{t('messageButton')}</a>
          </button>
      </section>
      </Reveal>
    </div>
  )
}

export default home