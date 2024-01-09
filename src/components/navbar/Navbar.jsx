import React, { useContext, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { FaCartShopping } from "react-icons/fa6";
import { BsMoon } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { Contexts } from '../context/Context';

export default function Navbar() {
  const { addedItemToCarts, setIsOpenCart,title,saveFavouriteList } = useContext(Contexts)
  const navigate =  useNavigate()
  const [theme, setTheme] = useState('light')
  const [isMobile, setIsMobile] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [ searchValue, setSearchValue ] = useState()
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const screenSize = window.innerWidth
  window.addEventListener(('resize'), () => {
    if (screenSize < 320) {
      setIsMobile(true)
      console.log(isMobile);
    } else {
      setIsMobile(false)
    }
  })

  const reDirectToSearcResult = (e) =>{
    if(e.key === 'Enter' && searchValue?.length > 0){
      navigate(`/searchresult/${searchValue}`)
    }
  }

  return (
    <>
    {isOpenSearch &&
        <div className='absolute w-full top-10  h-14 border dark:border-gray-400 outline-none'>
            <input type="text" placeholder='Search' value={searchValue} className=' relative z-[27] bg-white dark:bg-[#2F3B43] sm:hidden inline text-black pr-20 dark:text-white outline-none  w-full h-full pl-4' onChange={(e)=>setSearchValue(e.target.value)} />
        <div className='text-white z-50 relative float-right cursor-pointer ' onClick={()=>setIsOpenSearch(false)}>
        <AiOutlineClose size={40} className='-mt-20 rounded-full bg-gray-200 dark:bg-[#202D2F] text-black dark:text-white p-3' />
        </div>
        <div className='text-white z-50 relative float-right mr-14 cursor-pointer ' onClick={()=>setSearchValue('')}>
        {searchValue?.length > 0 ? (
        <AiOutlineClose size={20} className='-mt-9 bg-[#202D2F] dark:bg-gray-100 text-white dark:text-black p-1' />
            ): ''
            }
        </div>
        </div>
    }
      <nav className={`z-20 flex justify-between items-center transition-all duration-300 h-24 mb-5 w-full bg-[#e2e7eb] dark:bg-[#202D2F]  sticky top-0`}>
        <div className="text-black dark:text-white">
          <h3 className='font-medium text-sm sm:text-xl sm:font-bold pl-20 md:pl-28'>{title}</h3>
        </div>
        <div className="flex justify-center items-center pr-3 sm:pr-14">
          <div className="relative">
            <input type="text" placeholder='Search' onKeyUp={reDirectToSearcResult} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className='py-2 pl-8 pr-6 rounded-sm  bg-white dark:bg-[#2F3B43] sm:inline hidden text-black dark:text-white border border-gray-400  dark:border-gray-400 outline-none ' />
            <span className='text-black sm:inline hidden dark:text-white absolute top-[13px] right-2 cursor-pointer' onClick={()=>setSearchValue('')} >
            {searchValue?.length > 0 ? (
            <AiOutlineClose />
            ): ''
            }
            </span>

            <span className='text-black sm:inline hidden dark:text-white absolute top-[13px] left-[8px] cursor-pointer'><BsSearch /></span>


            <div className='dark:text-white text-black  sm:hidden p-2.5 border border-gray-400  cursor-pointer' onClick={()=>setIsOpenSearch((pre)=> !pre)}><BsSearch size={20} /></div>


          </div>
          <div className='dark:text-white text-black bg-transparent dark:bg-transparent relative ml-3 border border-gray-400 p-2.5 cursor-pointer' onClick={()=>setIsOpenCart((pre)=> !pre)}><FaCartShopping size={20} />
            {
              addedItemToCarts?.length > 0 ? (
            <span className='absolute -top-4 dark:bg-slate-600 bg-slate-300 text-black dark:text-white -right-1 px-2 py-[2px] rounded-full text-sm'>
            {addedItemToCarts?.length}
          </span>
              ) : (
                ''
              )
              }
          </div>
          <Link to='/save' ><div className='relative dark:text-white text-black  ml-3 border border-gray-400 p-2.5 cursor-pointer'><BsHeart size={20} />
         {
          saveFavouriteList?.length > 0 ? (
          <span className='absolute -top-4 dark:bg-slate-600 bg-slate-300 text-black dark:text-white -right-1 px-2 py-[2px] rounded-full text-sm'>
            {saveFavouriteList?.length}
          </span>
         ): (
          ''
         )
          }
          </div>
          </Link>
          <button className='dark:text-white text-black ml-3 border border-gray-400 p-2.5 outline-none' onClick={handleTheme}>
            {theme === 'light' ? (
              <BsSun size={20} />
            ) : (
              <BsMoon size={20} />
            )
            }
          </button>
        </div>
      </nav>
    </>
  )
}
