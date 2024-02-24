'use client'
import { projectData } from '@/constants'
import React from 'react'
import ProjectCard from './UI/ProjectCard'

function ProjectSection() {
  const [tag, setTag] = React.useState('All');

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  let filtedProject = projectData.filter((project) => {
    if(tag === 'All') {
      return projectData
    } else {
      return project.tag.includes(tag);
    }
  })

  return (
    <div id='project'>
      <h2 className='text-4xl font-bold text-white textAnimationHover mb-4'>My Project</h2>
      <div className='text-white text-xl font-semibold flex flex-row flex-wrap justify-center items-center gap-4 py-4'>
        <button className={`tags ${tag === 'All' && 'tagsActive'}`} onClick={(() => handleTagChange('All'))}>All</button>
        <button className={`tags ${tag === 'Full stack' && 'tagsActive'}`} onClick={(() => handleTagChange('Full stack'))}>Full stack</button>
        <button className={`tags ${tag === 'Front end' && 'tagsActive'}`} onClick={(() => handleTagChange('Front end'))}>Front end</button>
        <button className={`tags ${tag === 'SPA' && 'tagsActive'}`} onClick={(() => handleTagChange('SPA'))}>SPA</button>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
            filtedProject.map((project, index) => (
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