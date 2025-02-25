import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div 
      id='say-hi' 
      className='flex min-h-screen bg-white'
    >
      {/* Sidebar with Flower and "Say hi!" */}
      <div className='w-1/4 p-6 flex flex-col items-center justify-end relative'>
        {/* Flower Image Above */}
        <img src="/img/flowers.png" alt="Flower" className="w-80 mb-[-1rem] ml-[12rem] z-20" />

        {/* "Say hi!" Text Design */}
        <h1 className="text-9xl font-extrabold relative leading-none mt-0 top-[-1rem] left-40 z-10">
          <span className='outline-text'>Say</span>
          <span className="text-gray-300 absolute left-70 top-1 z-0">hi!</span>
        </h1>
      </div>

      {/* Contact Form */}
      <div className='flex-1 p-12 relative'>
        <div className='border-l-8 border-black h-132 absolute left-20 top-30'></div>
        <div className='border-t-8 border-black w-4/4 absolute top-30 left-20'></div>
        <form className="space-y-6 max-w-md mx-auto mt-35 ml-25">
          <input
            type="text"
            placeholder="Full Name"
            className="w-3/4 border-b-3 border-black focus:outline-none py-2 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-3/4 border-b-3 border-black focus:outline-none py-2 placeholder-gray-400"
          />
          <textarea
            placeholder="Message"
            className="w-3/4 border-b-3 border-black focus:outline-none py-2 placeholder-gray-400"
          ></textarea>

          <button className="bg-rose-300 text-white rounded-full px-8 py-3 hover:bg-rose-400 transition">
            Say hi!
          </button>
        </form>

        {/* Contact Info */}
        <div className="absolute top-48 right-20 text-sm text-gray-600 space-y-8">
        <div>
            <h3 className="font-medium text-black text-lg mb-2">Contact</h3>
            <p className="text-gray-400">pedinijayashree03@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium text-black text-lg mb-2">Based in</h3>
            <p className="text-gray-400">Vaishali, Ghaziabad<br/>Uttar Pradesh</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-black hover:text-rose-400">
             <FaTwitter size={24} />
            </a>
            <a href="#" className="text-black hover:text-rose-400">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-black hover:text-rose-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
