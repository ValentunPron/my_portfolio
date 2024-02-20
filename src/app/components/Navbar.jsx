import Link from 'next/link'
import React from 'react'
import { headerNav } from '@/constants'

function Navbar() {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={'/'} className='text-5xl text-white font-semibold'>Logo</Link>
            
            <div className='menu hidden md:block md-:w-auto' id='navbar'>
                <ul className='flex items-center gap-8'>
                    {
                        headerNav.map((link) => (
                            <Link key={link.title} href={link.path} className='headerLink'>
                                {link.title}
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar