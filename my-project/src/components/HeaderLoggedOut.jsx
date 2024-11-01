// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function HeaderLoggedOut() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-100 rounded-xl container w-auto flex flex-col gap-4">
        <header className="bg-white dark:bg-gray-900 rounded-xl">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600 dark:text-teal-300" href="#">
                  <span className="sr-only">Home</span>

                  <svg className="h-8 fill-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185l0-121c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l320.4 0c35.5 0 64.2-28.8 64-64.3l-.7-160.2 32 0zM288 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM176 400c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16z" /></svg>
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Careers
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        History
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Services
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Projects
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                      href="#"
                    >
                      Login
                    </a>

                    <div className="hidden sm:flex">
                      <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Register
                      </a>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <button
                      className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default HeaderLoggedOut  