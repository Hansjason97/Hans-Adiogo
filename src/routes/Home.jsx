import React from 'react'
import Tabs from '../components/Tabs'
import { experience, featuredProjects } from '../data/data'
import FeaturedProjects from '../components/FeaturedProjects'
import jason from '../assets/jason.png'
import Reveal from '../components/Reveal'

import { useTranslation } from "react-i18next";

function home() {

  const { t } = useTranslation();
  const techs = ["NextJs", "React", "Javascript", "NodeJs"];

  return (
    <div>
      {/* First section ############################################################## */}
      <Reveal>
      <section id="home" className='min-h-[100vh] px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-5xl flex flex-col justify-center'>
        <p className='special mb-1'>{t('hi')}</p>
        <h2 className='lvlOne text-blanc'>
          Hans Adiogo.
        </h2>
        <h2 className='lvlOne'>
          {t('titleHome')}
        </h2>

        <p className='mt-5 max-w-lg'>
          {t('desc')}
        </p>
          <button className='mt-6 button-primary'>
            <a href="mailto:hansadiogo@gmail.com">{t('contactMe')}</a>
          </button>
      </section>
      </Reveal>
      {/**Second section #############################################################"" */}
      <Reveal>
      <section id='about' className='containerBase'>
        <h2 className='numbered-heading'>
          {t('aboutMe')}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-[50px]'>
          <div className='w-full flex flex-col gap-4 col-span-1 lg:col-span-2 order-2 lg:order-1'>
            <p>
              {t('aboutTxt1')}
            </p>
            <p>
            {t('aboutTxt2')}
            </p>
            <p>
            {t('aboutTxt3')}
            </p>
            <ul role='list' className='technologies'>
                {techs.map((x,i)=><li key={i}>{x}</li>)}
              </ul>
          </div>
            <img src={"/logo-white.jpg"} alt="me" className='max-w-[300px] w-full aspect-square h-auto object-cover order-1 lg:order-2' />
        </div>
      </section>
      </Reveal>
      {/**Third section ################################################################## */}
      <Reveal>
      <section id='experience' className='containerBase'>
        <h2 className='numbered-heading'>
          {t('expMe')}
        </h2>
        <Tabs content={experience} />
      </section>
      </Reveal>
      {/**Fourth Section ################################################################# */}
      <Reveal>
      <section id='work' className='containerBase'>
        <h2 className='numbered-heading lg:w-fit lg:max-w-5xl lg:mx-auto'>
          {t('projectsSection')}
        </h2>
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
            <a href="mailto:hansadiogo@gmail.com">{t('messageButton')}</a>
          </button>
      </section>
      </Reveal>
    </div>
  )
}

export default home