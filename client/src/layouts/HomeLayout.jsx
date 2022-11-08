import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from '../pages'
import ContactPage from '../pages/contact'
import ServicePage from '../pages/services'

export const HomeLayout = ({children}) => {
  return (
    <>
    <nav className="bg-slate-800 border-gray-200 px-2 sm:px-4 py-2.5 mb-10 dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
      </svg>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ExpressCheckpoint</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-slate-800 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:text-white md:hover:text-blue-700 md:p-0" aria-current="page" >HomePage</Link>
        </li>
        <li>
          <Link to="/services" className="block py-2 pr-4 pl-3 text-white rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:text-white md:hover:text-blue-700 md:p-0 " >OurServices</Link>
        </li>
        <li>
          <Link to="/contact" className="block py-2 pr-4 pl-3 text-white rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:text-white md:hover:text-blue-700 md:p-0 " >Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    {children}
    </>
  )
}
