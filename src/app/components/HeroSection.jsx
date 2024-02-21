'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '@/assets/hero.png'
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
                    <span className='text-transparent bg-clip-text textAnimationHover blueGradientText mb-2'>Hello, I'm {" "}</span> 
                    <TypeAnimation
                            sequence={[
                                'Valentyn',
                                3000,
                                'Full Stack Developer',
                                3000,
                                'Front-end Developer',
                                3000,
                                'Back-end Developer',
                                3000,
                                'Node.js Developer',
                                3000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'block' }}
                            repeat={Infinity}
                        />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl textAnimationHover'>
                    My name is Valentyn. I am Full stack web developer with a passion for creating interactive and responsive web applications. I am to develop in the of full stack, I quickly correct errors, I read and understand technical tasks in English.
                </p>
                <div className='mt-4'>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-3 blueGradientButton hover:bg-slate-300 text-white'>Hire me</button>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 mx-auto'>
                <a href='https://github.com/ValentunPron' target='_blank'>
                    <div className='relative rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] transform transition duration-500 hover:scale-90'>
                        <Image 
                            src={heroImage}
                            alt='hero'
                            className='absolute w-[200px] h-[200px] md:w-[270px] md:h-[270px] lg:w-[320px] lg:h-[320px]  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={320}
                            height={320}
                        />
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default HeroSection