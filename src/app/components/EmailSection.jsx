"use client";
import Link from "next/link";
import { useForm, ValidationError } from '@formspree/react';

const EmailSection = () => {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_EMAIL_ID || "local");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-[#18191E] border border-[#33353F] rounded-lg text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/50 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#2196F3"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
        <p className="text-gray-400 mb-8">
          Thank you! I received your letter and will respond shortly.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="text-sm text-blue-500 hover:text-blue-400 font-medium underline underline-offset-4 transition"
        >
          Send another message
        </button>
      </div >
    );
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-10 pt-16 pb-14 gap-4 relative"
    >
      <div className="blueGradientButton from-primary-900 to-transparent rounded-full h-40 w-40 sm:h-60 sm:w-60 z-10 blur-lg absolute bottom-10 -left-0 transform -translate-x-1/2 translate-y-1/2 animate-neon"></div>
      <div className="z-20 relative">
        <h5 className="text-4xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 textAnimationHover max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">

          </Link>
          <Link href="linkedin.com">

          </Link>
        </div>
      </div>
      <div className="z-5 relative">
        <form className="flex flex-col" action={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="valentunpron@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              type="text"
              className="bg-[#18191E] resize-none h-[125px] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="blueGradientButton hover:bg-primary-600 text-white font-medium py-2 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;