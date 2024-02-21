'use client'
import Link from 'next/link'
import React from 'react'
import { headerNav } from '@/constants'
import Image from 'next/image'
import EmailGIF from '@/assets/email.gif';

function Navbar() {
    const [animateHeader, setAnimateHeader] = React.useState(false);
    
    React.useEffect(() => {
      const listener = () => {
        if (window.scrollY > 140) {
          setAnimateHeader(true);
        } else setAnimateHeader(false);
      };
      window.addEventListener("scroll", listener);
  
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }, []);

  return (
    <nav className={`w-full p-2 bg-glassmorphism backdrop-blur-md fixed z-10 trasition ease-in-out duration-500 ${animateHeader && "shadow-xl"}`}>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={'/'} className='hidden sm:block text-2xl text-white font-semibold textAnimationHover'>Portfolio</Link>
            
            <div className='flex justify-center w-full sm:w-auto md-:w-auto py-1 sm:py-4' id='navbar'>
                <ul className='flex items-center gap-4 md:gap-8'>
                    {
                        headerNav.map((link) => (
                            <li key={link.title}>
                                <Link href={link.path} className='headerLink'>
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <a href='mailto:valentunpron@gmail.com' className='hidden sm:block'>
                <Image 
                    src={EmailGIF}
                    alt='gif email'
                    width={52}
                    height={52}
                    className='object-contain mb-4 transform transition duration-300 hover:scale-125'
                />
            </a>
        </div>
    </nav>
  )
}

export default Navbar