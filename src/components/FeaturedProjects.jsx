import React from 'react'
import{ TbBrandGithub } from 'react-icons/tb'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiFolder } from 'react-icons/fi'

function FeaturedProjects(props) {
  return (
    <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3 my-6'>
        { props.data.map((project, index) =>(
            <a href={project.linkGithub} key={index} className='mx-auto group'>
                <div className='flex flex-col px-5 py-10 relative bg-secondaryDark rounded-md h-full top-0 shadow-sm
                hover:top-[-7px] transition-all duration-150 ease-in'>
                    <div className='flex justify-between pb-6 items-center'>
                        <FiFolder className="h-8 w-8 text-primary"/>
                        <div className='flex gap-4 items-center'>
                            {project.linkGithub != null ?
                            (<a href={project.linkGithub} className='hover:text-primary transition-all duration-150 ease-linear'><TbBrandGithub className='h-6 w-6' /></a>) : null}
                            {project.linkPreview != null ?
                            (<a href={project.linkPreview} className='hover:text-primary transition-all duration-150 ease-linear'><FaExternalLinkAlt className="h-5 w-5"/></a>) : null}
                            
                        </div>
                    </div>
                    <h4 className='group-hover:text-primary transition-all duration-75 ease-linear'>
                        {project.title}
                    </h4>
                    <p className='text-sm p-0 my-5'>
                        {project.description}
                    </p>
                    <div className='flex wrap gap-2'>
                        { project.tags.map((tag, index)=>(
                            <span key={index} className='tracking-tighter font-mono text-sm'>{tag}</span>
                        )) }
                    </div>
                </div>
            </a>
        )) }
    </div>
  )
}

export default FeaturedProjects