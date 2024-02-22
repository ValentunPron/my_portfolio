import { projectData } from '@/constants'
import React from 'react'
import ProjectCard from './UI/ProjectCard'

function ProjectSection() {
  return (
    <div>
      <h2 className='text-4xl font-bold text-white mb-4'>My Project</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
            projectData.map((project, index) => (
                <ProjectCard 
                    key={`${project.title}_${index}`} 
                    imgUrl={project.imgUrl} 
                    title={project.title} 
                    desc={project.desc} 
                    siteUrl={project.siteUrl}
                    codeUrl={project.codeUrl}
                />
            ))
        }
      </div>
    </div>
  )
}

export default ProjectSection