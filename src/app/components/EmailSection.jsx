"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailJs from 'emailjs-com';

const EmailSection = () => {

  const [toSend, setToSend] = React.useState({ from_email: '', from_subject: '', from_message: '' });
	const [activeEmail, setActiveEmail] = React.useState(false);

	function onSubmit(e) {
		e.preventDefault();

		let templateParams = {
			from_email: toSend.from_email,
      from_subject: toSend.from_subject,
      from_message: toSend.from_message,
		};

		emailJs.send(process.env.NEXT_PUBLIC_EmailJS_Service, process.env.NEXT_PUBLIC_EmailJS_Template, templateParams, process.env.NEXT_PUBLIC_EmailJS_PublicKey)
			.then((result) => {
				setActiveEmail(true);
			}, (error) => {
				alert('The email address is incorrect')
				console.log(error)
			});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};


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
        {activeEmail ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={onSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="from_email"
                value={toSend.from_email}
                type="email"
                onChange={handleChange}
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
                name="from_subject"
                value={toSend.from_subject}
                type="text"
                onChange={handleChange}
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
                name="from_message"
                value={toSend.from_message}
                type="text"
                onChange={handleChange}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
        )}
      </div>
    </section>
  );
};

export default EmailSection;