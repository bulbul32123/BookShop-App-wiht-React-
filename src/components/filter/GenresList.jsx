import React from 'react';
import { useContext } from 'react';
import { Contexts } from '../context/Context'

export default function GenresList() {
    const { setSelectFilterGenres } = useContext(Contexts)
  return (
    <>
       <ul className='absolute top-10  w-48 flex justify-start items-center flex-col h-[200px] text-center dark:bg-gray-700 border dark:border-gray-400 border-gray-400 bg-gray-200 dark:text-gray-300'>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white w-full' onClick={()=>setSelectFilterGenres('fantasy')}>Fantasy</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white   w-full' onClick={()=>setSelectFilterGenres('romance')}>Romance</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white   w-full ' onClick={()=>setSelectFilterGenres('fiction')}>Fiction</li>
            <li className='cursor-pointer py-2 hover:bg-black dark:hover:bg-gray-400 hover:text-white  w-full' onClick={()=>setSelectFilterGenres('horror')}>Horror</li>
        </ul>
    </>
  )
}
