'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '@/assets/hero.png'
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2'>Hello, I'm {" "}</span> 
                    <TypeAnimation
                            sequence={[
                                'Valentyn',
                                3000,
                                'Full Stack Developer',
                                3000,
                                'Front-end Developer',
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
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam enim eum, maiores aliquam nesciunt quas quisquam harum hic, laudantium quam. Enim commodi fuga, atque laudantium omnis veniam dignissimos consectetur?
                </p>
                <div className='mt-4'>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-3 bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white'>Hire me</button>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 mx-auto'>
                <a href='https://github.com/ValentunPron' target='_blank'>
                    <div className='relative rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] transform transition duration-500 hover:scale-90'>
                        <Image 
                            src={heroImage}
                            alt='hero'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
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