import React from 'react'
import Tabs from '../components/Tabs'
import { experience, featuredProjects } from '../data/data'
import FeaturedProjects from '../components/FeaturedProjects'

function home() {
  return (
    <div>
      {/* First section ############################################################## */}
      <section id="home" className='min-h-[100vh] px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-5xl flex flex-col justify-center'>
        <p className='special mb-1'>Hi my name is</p>
        <h2 className='lvlOne text-blanc'>
          Hans Adiogo.
        </h2>
        <h2 className='lvlOne'>
          I build things for the web.
        </h2>

        <p className='mt-5 max-w-lg'>
          I'm an IT engineer specializing in designing and building digital solutions.
           Currently focused on learning new tools and technologies to improve my skills.
        </p>
          <button className='mt-6 button-primary'>
            Contact me !
          </button>
      </section>
      {/**Second section #############################################################"" */}
      <section id='About' className='px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-5xl flex flex-col justify-center py-[60px] md:py-[100px]'>
        <h2 className='numbered-heading'>
          About me
        </h2>
        <div className='flex flex-col md:flex-row gap-[50px]'>
          <div className='lg:w-[512px] flex flex-col gap-4'>
            <p>
              Hi! My name is Hans, I like to create stuffs for the web from cool designs to web apps.
               Started with images 6 years ago and now I'm working on my way to UI/UX with <a href="" className='customLink'>figma</a>.
            </p>
            <p>
              Over the years, I've built various solutions for companies and businesses from business websites to web applications.
               Currently learning new tools and technologies to increase the range of my skills.
            </p>
            <p>
              Here are few technologies and tools I've worked with recently :
            </p>
            <ul role='list' className='technologies'>
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Figma</li>
              </ul>
          </div>
          <div>
            <img src="https://images7.alphacoders.com/129/1299888.png" alt="" className='max-w-[300px]' />
          </div>
        </div>
      </section>
      {/**Third section ################################################################## */}
      <section id='Experience' className='px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-5xl flex flex-col justify-center py-[60px] md:py-[100px]'>
        <h2 className='numbered-heading'>
          Where I've worked
        </h2>
        <Tabs content={experience} />
      </section>
      {/**Fourth Section ################################################################# */}
      <section id='work' className='px-5 md:px-[50px] lg:px-[100px] mx-auto max-w-6xl flex flex-col justify-center py-[60px] md:py-[100px]'>
        <h2 className='numbered-heading w-fit max-w-5xl mx-auto'>
          What I've done
        </h2>
        <FeaturedProjects data={featuredProjects} />
      </section>
    </div>
  )
}

export default home