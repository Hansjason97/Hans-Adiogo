import React from 'react'
import{ TbBrandGithub } from 'react-icons/tb'
import { FaExternalLinkAlt } from 'react-icons/fa'

function FeaturedProjects(props) {
  return (
    <div className='flex gap-6 flex-wrap'>
        { props.data.map((project, index) =>(
            <div key={index} className='relative w-full'>
                <div className='flex flex-col top-0 left-0 px-5 py-[10vw]'>
                    <p className='special text-sm mb-1'>
                        Featured Project
                    </p>
                    <h3 className='mb-8'>
                        {project.title}
                    </h3>
                    <p className='text-sm'>
                        {project.description}
                    </p>
                    <div className='flex wrap gap-2 mt-6'>
                        { project.tags.map((tag, index)=>(
                            <span key={index} className='tracking-tighter font-mono text-sm'>{tag}</span>
                        )) }
                    </div>
                    <div className='flex gap-4 items-center mt-5'>
                        <a href={project.linkGithub} className='text-blanc hover:text-primary transition-all duration-150 ease-linear'><TbBrandGithub className='h-6 w-6' /></a>
                        <a href={project.linkPreview} className='text-blanc hover:text-primary transition-all duration-150 ease-linear'><FaExternalLinkAlt className="h-5 w-5"/></a>
                    </div>
                </div>
                <div className={`absolute top-[50%] translate-y-[-50%] z-[-1] h-[100%] w-full border border-primary opacity-20`}>
                    <div className='absolute w-full h-full bg-primary mix-blend-multiply z-[1]'></div>
                    <div style={{backgroundImage: `url(${project.image})`}} alt="" className='bg-cover bg-center w-full h-full grayscale contrast-100 brightness-[50%]'></div>
                </div>
            </div>
        )) }
    </div>
  )
}

export default FeaturedProjects