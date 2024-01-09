import React, { useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import GenresList from './GenresList';
import YearLists from './YearLists';

export default function FilterBar() {
    const [isYearBarOpen, setIsYearBarOpen] = useState(false);
    const [isGenresOpen, setIsGenresOpen] = useState(false);
    return (
        <>
            <div className="relative z-40 mb-3 ">
                <div className='flex justify-between border dark:border-gray-400 mr-8 sm:mr-14 border-gray-400  items-center bg-white text-black dark:text-white dark:bg-[#2F3B43] w-48 h-10 relative'>
                    <p className='pl-4'>Genres</p>
                    <div className="mr-3 p-3 cursor-pointer">
                        <BsArrowDown size={15} onClick={()=>setIsYearBarOpen(!isYearBarOpen)} />
                    </div>
                </div>
                {isYearBarOpen &&
                <GenresList />
                }
            </div>
            <div className="relative z-20">
                <div className='flex justify-between mr-14 items-center  bg-white border border-gray-400   dark:border-gray-400 text-black dark:text-white dark:bg-[#2F3B43] w-48 h-10 relative'>
                    <p className='pl-4'>Years</p>
                    <div className="mr-3 p-3 cursor-pointer">
                        <BsArrowDown size={15} onClick={()=>setIsGenresOpen(!isGenresOpen)} />
                    </div>
                </div>
                {isGenresOpen &&
                <YearLists />
                }
            </div>
        </>
    )
}
