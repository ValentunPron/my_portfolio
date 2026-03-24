'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '@/assets/hero.png'
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {
    return (
        <section>
            <div className='md:pt-[60px] pt-[10px] grid grid-cols-1 md:grid-cols-12 gap-2 justify-center' id='home'>
                <div className='col-span-6 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
                        <span className='text-transparent bg-clip-text textAnimationHover blueGradientText mb-2'>Hello, I&#39;m {" "}</span>
                        <TypeAnimation
                            sequence={[
                                'Valentyn',
                                3000,
                                'Cybersecurity specialist',
                                3000,
                                'Full Stack Developer',
                                3000,
                                'Front-end Developer',
                                3000,
                                'Back-end Developer',
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl textAnimationHover'>
                        My name is Valentyn. I am a Cybersecurity Specialist with a year of commercial experience as an IT & Security Engineer at &quot;Prykarpatenergotreyd&quot;. I specialize in Infrastructure Defense and Network Security, with a deep understanding of the OSI model and TCP/IP stack.
                    </p>
                    <p className='text-[#ADB7BE] pt-7 text-base sm:text-lg lg:text-xl textAnimationHover'>
                        What sets me apart is the combination of Enterprise Administration (Active Directory, GPO, Linux hardening) and Full-stack development (React, Node.js). This allows me to see security as a holistic system — from hardware diagnostics and network routing to code-level vulnerabilities and JWT security. I am an active CTF participant (HackTheBox, GUR) and proficient in English (B1), which I use daily for technical documentation and research.
                    </p>
                    <div className='mt-4'>
                        <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-3 blueGradientButton hover:bg-slate-300 text-white'>
                            <a href="#contact">My contacts</a>
                        </button>
                        <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-4'>
                            <a href="./files/CV_Pron.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                        </button>
                    </div>
                </div>
                <div className='col-span-6 mx-auto  md:block hidden '>
                    <div className='relative z-5 rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[325px] md:h-[325px] lg:w-[400px] lg:h-[400px]'>
                        <div className='absolute blueGradientText blur-md w-full h-full animate-pulse rounded-full' />
                        <Image
                            src={heroImage}
                            alt='hero'
                            className='absolute z-5  w-[200%] h-[150%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={700}
                            height={700}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection