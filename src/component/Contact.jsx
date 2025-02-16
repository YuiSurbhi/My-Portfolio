import React from 'react'

const Contact = () => {
  return (
    <div 
      id='say hi' 
      className='flex min-h-screen bg-white'
    >
      {/* Sidebar with Flower and "Say hi!" */}
      <div className='w-1/4 p-6 flex flex-col items-center justify-center relative'>
        {/* Flower Image Above */}
        <img src="/img/flowers.png" alt="Flower" className="w-40 mb-2 -mt-4" />

        {/* "Say hi!" "Text Design */}
        <h1 className="text-9xl font-extrabold relative left-25 leading-none mt-0 bottom-0">
          <span className='outline-text'>Say</span>
          <span className="text-gray-300 absolute left-65 top-3 z-10">hi!</span>
        </h1>
      </div>
      {/* Contact Form */}
      <div className='w-1/4 flex-1 p-50 border-l-8 border-black'>
        <form className="space-y-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b-2 border-black focus:outline-none py-2 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border-b-2 border-black focus:outline-none py-2 placeholder-gray-500"
          />
          <textarea
            placeholder="Message"
            className="w-full border-b-2 border-black focus:outline-none py-2 placeholder-gray-500"
          ></textarea>

          <button className="bg-rose-300 text-white rounded-full px-8 py-3 hover:bg-rose-400 transition">
            Say hi!
          </button>
        </form>
        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-600 space-y-2">
          <div>
            <strong>Contact:</strong> 
          </div>
          <div>
            <strong>Based in:</strong> Vaishali, Ghaziabad, Uttar Pradesh
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-black hover:text-rose-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-black hover:text-rose-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-black hover:text-rose-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
