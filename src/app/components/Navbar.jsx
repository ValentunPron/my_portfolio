'use client'
import Link from 'next/link'
import React from 'react'
import { headerNav } from '@/constants'
import Image from 'next/image'
import EmailGIF from '@/assets/email.gif';

function Navbar() {
    const [animateHeader, setAnimateHeader] = React.useState(false);
    const [linkActive, setLinkActive] = React.useState('home');

    React.useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        headerNav.forEach((nav) => {
          const section = document.getElementById(nav.title.toLowerCase());
          if (section) {
            const sectionTop = section.offsetTop-1;
            const sectionBottom = sectionTop + section.clientHeight-1;
  
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
              setLinkActive(nav.title.toLowerCase());
            }
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav className={`w-full p-2 bg-glassmorphism backdrop-blur-md fixed z-10 trasition ease-in-out duration-500 ${animateHeader && "shadow-xl"}`}>
        <div className='flex flex-wrap items-center justify-between mx-auto'>
            <Link href={'/'} className='hidden sm:block text-2xl text-white font-semibold textAnimationHover'>Portfolio</Link>
            
            <div className='flex justify-center w-full sm:w-auto md-:w-auto py-1 sm:py-4' id='navbar'>
                <ul className='flex items-center gap-6 md:gap-10'>
                    {
                        headerNav.map((link) => (
                            <li key={link.title} onClick={() => setLinkActive(link.title.toLowerCase())}>
                                <Link href={link.path} className={`headerLink ${linkActive === link.title.toLowerCase() ? 'scale-125 text-blue-700' : ''}`}>
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