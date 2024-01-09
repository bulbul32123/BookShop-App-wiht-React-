import React, { useState, useMemo } from 'react';
import LinksComp from './LinksComp';
import Img from '../Img';
import Hamburger from 'hamburger-react';

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const memoizedLinksComp = useMemo(() => <LinksComp />, []);

  return (
    <>
      <span className="z-[26] fixed top-[26px] dark:text-green-500 text-gray-500 ml-4 border dark:border-gray-400 border-gray-700 cursor-pointer">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </span>
      <div
        className={`z-[25] flex justify-start items-center flex-col fixed top-0 h-full w-56 pt-36 dark:bg-[#1E272E] bg-white dark:text-white transition-all duration-500 ${isOpen ? 'left-0' : 'left-[-300px]'
          }`}
      >
        <Img src="/images/heroimg.jpeg" alt="" className="rounded-full h-16 w-16 object-cover" />
        <span className="mb-10 text-gray-500 dark:text-gray-200">Bulbul Islam</span>
        {memoizedLinksComp}
      </div>
    </>
  );
};

export default SideBar;
