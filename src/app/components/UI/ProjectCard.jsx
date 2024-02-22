import React from 'react'
import Image from 'next/image'
import { CodeBracketIcon, EyeIcon} from '@heroicons/react/24/outline';

function ProjectCard({ imgUrl, title, desc, siteUrl, codeUrl,}) {
  return (
    <div>
        <div className='relative h-50 md:h-72 group'>
          <Image src={imgUrl} alt={title} className='h-50 md:h-72 rounded-xl object-cover object-top'/>
          <div className='overlay gap-5 items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
            <a href={siteUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
              <CodeBracketIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white'/>
            </a>
            <a href={codeUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
              <EyeIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white'/>
            </a>
          </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard