'use client'
import React from 'react'
import Image from 'next/image'
import ImageAbout from '@/assets/about.jpg';
import { tabData } from '@/constants';

function AboutSection() {
  const [tab, setTab] = React.useState('front-end');
  const [isPending, startTransition] = React.useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <section className='text-white' id="about">
      <div className='md:grid md:grid-cols-2 gap-12 md:gap-8 items-center py-8 xl:gap-16 sm:py-16'>
        <div class="relative textAnimationHover hover:rotate-3">
          <Image 
            src={ImageAbout}
            alt="image"
            width={500}
            height={500}
            className='rounded-lg relative z-20 border w-[320px] md:w-auto md:h-auto mx-auto'
          />
          <div class="neonImage absolute top-0 h-full inset-1 rounded-md blur-md blueGradientText animate-neon z-10"></div>
        </div>
        <div className='mt-6 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About</h2>
          <p className='text-base lg:text-base text-[#ADB7BE] textAnimationHover'>
            I am a Full Stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Next.js, Node.js, Express, MongoDB, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row mt-8 gap-3 sm:gap-4'>
            <button
              onClick={() => handleTabChange('front-end')}  
              className={`tabs ${tab === 'front-end' && 'tabsActive'}`}>
                Front-end
            </button>
            <button
              onClick={() => handleTabChange('back-end')}  
              className={`tabs ${tab === 'back-end' && 'tabsActive'}`}>
                Back-end
            </button>
            <button
              onClick={() => handleTabChange('language')} 
              className={`tabs ${tab === 'language' && 'tabsActive'}`}>
                Language
            </button>
          </div>
          <div className='mt-8'>{tabData.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection