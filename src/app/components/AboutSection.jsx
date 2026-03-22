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
        <div className="relative textAnimationHover hover:rotate-1">
          <Image
            src={ImageAbout}
            alt="image"
            width={400}
            height={400}
            className='rounded-lg relative z-20 border w-[300px] md:w-auto md:h-auto mx-auto'
          />
          <div className="neonImage absolute top-0 h-full inset-1 rounded-md blur-md blueGradientText animate-neon z-10"></div>
        </div>
        <div className='mt-6 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>My skills</h2>
          <p className='text-base lg:text-base text-[#ADB7BE] textAnimationHover'>
            My technical expertise is centered on Cybersecurity, combining offensive security proficiency with advanced systems administration. I am experienced in using tools such as Nmap, Metasploit, and Kali Linux, with practical skills honed through CTF challenges (HackTheBox, GUR) and incident response. My background includes expert-level management of Windows Server and Linux environments, specifically Active Directory (GPO/IAM) and VPN configurations, all supported by a deep understanding of the OSI model and TCP/IP stack. Additionally, I focus on AppSec, securing RESTful APIs and JWT authentication through automation with Python, Bash, and PowerShell. I am fully capable of working with complex technical documentation thanks to my B1 English proficiency, and I am currently improving my A2 Czech skills for better local integration.
          </p>
          <div className='flex flex-row mt-8 gap-3 sm:gap-4'>
            <button
              onClick={() => handleTabChange('cybersecurity')}
              className={`tabs ${tab === 'cybersecurity' && 'tabsActive'}`}>
              Cybersecurity
            </button>
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