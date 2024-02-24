'use client'
import Lottie from "lottie-react";
import * as telegramAnimation from '@/assets/social/telegram.json';
import * as githubAnimatiom from '@/assets/social/github.json';
import * as instagramAnimation from '@/assets/social/instagram.json'

const FooterSection = () => {

  return (
    <footer className='footer flex justify-center relative'>
    <div className="animation absolute w-full h-1 bottom-0 top-0 left-0 my-auto animate-gradientAnimation"></div>
        <div className="flex justify-center items-center relative z-10 bg-[#121212]">
            <a href="https://github.com/ValentunPron" target="_blank"><Lottie className="w-16 h-16 transition duration-300 hover:scale-125 z-5" animationData={githubAnimatiom} /></a>
            <a href="https://t.me/contrapunk" target="_blank"><Lottie className="w-24 h-24 transition duration-300 hover:scale-125 z-5" animationData={telegramAnimation} /></a>
            <a href="https://www.instagram.com/valentun.pro" target="_blank"><Lottie className="w-16 h-16 transition duration-300 hover:scale-125 z-5" animationData={instagramAnimation} /></a>
        </div>
    </footer>
  )
}

export default FooterSection