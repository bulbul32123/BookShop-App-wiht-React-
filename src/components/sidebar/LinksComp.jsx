import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Contexts } from '../context/Context'

export default function LinksComp() {
  const { selectFilterYear, selectFilterGenres } = useContext(Contexts)
  return (
    <>
         <div className="flex mx-auto w-full flex-col border-y-[0.2px] border-gray-400 py-3 dark:text-gray-300 text-gray-700">
          <NavLink to={`/category/nominees`} className='my-1 py-2 w-full pl-6 pr-9 hover:bg-[#2F3B43] hover:text-white  transition-all duration-500'>Nominated Books</NavLink>
          <NavLink to='/category/top' className='my-1 hover:bg-[#2F3B43] hover:text-white  transition-all duration-500 py-2 pl-6 w-full pr-9'>Awarded Books</NavLink>
          <NavLink to='/category/week' className='my-1 hover:bg-[#2F3B43] hover:text-white  transition-all duration-500  py-2 pl-6 pr-9 w-full'>Weekly Popular Books</NavLink>
          <NavLink to='/category/month' className='my-1 hover:bg-[#2F3B43] hover:text-white  transition-all duration-500  py-2 pl-6 pr-9 w-full'>Yearly Popular Books </NavLink>
        </div> 
         <div className="flex mx-auto flex-col border-b-[0.2px] w-full border-gray-400 py-3 dark:text-gray-300 text-gray-700">
          <NavLink to='/category/top_authors' className='my-1 py-2 pl-6 pr-9 w-full hover:bg-[#2F3B43] hover:text-white  transition-all duration-500'>Popular Authors</NavLink>
        </div> 
         <div className="flex mx-auto w-full flex-col border-b-[0.2px] border-gray-400 py-3 dark:text-gray-300 text-gray-700">
          <NavLink to='/' className='w-full my-1 py-2 pl-6 pr-9 hover:bg-[#2F3B43] hover:text-white  transition-all duration-500'>Home</NavLink>
          <NavLink to='/aboutus' className='w-full my-1 py-2 pl-6 pr-9 hover:bg-[#2F3B43] hover:text-white  transition-all duration-500'>About Us</NavLink>
          <NavLink to='/contactus' className='w-full my-1 py-2 pl-6 pr-9 hover:bg-[#2F3B43] hover:text-white  transition-all duration-500'>Contact Us</NavLink>
        </div> 
    </>
  )
}
