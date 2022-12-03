import React from 'react'
import { Link } from 'react-router-dom'


function Navbar () {
  return (
  <div>
     <header aria-label="Site Header" className="bg-black">
  <div
    className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
  >
 <li>
                  
                   
  
                    <span class="relative -mr-2 mb-4 flex h-5 w-5">
                      <span
                        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"
                      ></span>
                      <span
                        class="relative inline-flex h-2 w-2 rounded-full bg-blue-500"
                      ></span>
                    </span>
                 
                </li>


{/* tombol */}
    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Site Nav" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
        <li>
          <Link  className="mt-3 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" to={'/about'}>About</Link>
          </li>

          <li>
          <Link  className="mt-3 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" to={'/cv'}>CV</Link>
          </li>

          <li>
          <Link  className="mt-3 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" to={'/favorit'}>Rating</Link>
          </li>

       
        </ul>
        
      </nav>

      <div className="flex items-center gap-4">
        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

        </div>
  )
}

export default Navbar