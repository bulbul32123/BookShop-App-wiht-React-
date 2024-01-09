import React from 'react';
import { useContext } from 'react';
import { Contexts } from '../context/Context'

export default function YearLists() {
    const { setSelectFilterYear } = useContext(Contexts)
  return (
    <>
       <ul className='absolute border dark:border-gray-400 border-gray-400 top-10  w-48 flex justify-start items-center flex-col h-[244px] text-center dark:bg-gray-700 dark:text-gray-300 bg-gray-200'>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white  w-full ' onClick={()=>setSelectFilterYear(2018)}>2018</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white   w-full' onClick={()=>setSelectFilterYear(2019)}>2019</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white   w-full' onClick={()=>setSelectFilterYear(2020)}>2020</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white   w-full' onClick={()=>setSelectFilterYear(2021)}>2021</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white   w-full' onClick={()=>setSelectFilterYear(2022)}>2022</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white   w-full' onClick={()=>setSelectFilterYear(2023)}>2023</li>
        </ul>
    </>
  )
}
