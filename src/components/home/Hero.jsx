import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Img from '../Img';
import { Contexts } from '../context/Context';

export default function Hero() {
  const {setTitle } =  useContext(Contexts)
  const location = useLocation()
  useEffect(()=>{
       if(location.pathname === '/'){
          setTitle()
        }
  },[location.pathname])
  return (
    <div className='flex justify-center flex-col md:flex-row items-start transition-all duration-300 h-screen w-full dark:bg-[#202D2F] bg-slate-200'>
          <img src="/images/Books.jpeg" alt="" className='w-full h-full
           select-none  absolute object-cover z-0'/>
     <div className="flex justify-around items-center md:pr-40 pt-20 z-10">
        <div className="text-white mr-5">
         <h1 className='font-bold text-[50px] mb-3 leading-[60px]'>Let's <span className='text-red-600'>Read</span><br />Together.</h1>
         <p className='dark:text-gray-300 text-gray-400 text-sm mb-3'>Let your child open the magic world of books, full of good <br /> miracles, bright adventures, brave heroes and real friendship. <br /> Receive the fresh news, add offers, book reviews and hot <br /> sales right into your inbox. Your email is a simple key to <br /> order the best books for your kid.</p>
         <div className="">
         <div className="relative">
         <input type="email" className='pl-4 pr-24 w-[300px] outline-none rounded-3xl py-3 dark:bg-[#1E272E] bg-white dark:text-white text-black border border-gray-400' placeholder='Email' />
         <Link to='/contactus' className='dark:text-white text-black  right-[313px] bg-gray-200 dark:bg-[#202D2F] top-[6px] py-[10px] px-4 text-sm rounded-3xl -ml-[90px]' >Contact</Link>
         <div className="pt-5">
         <Link to='/category/nominees' className='dark:text-white text-black  bg-gray-200 dark:bg-[#1E272E] top-[6px] py-2 px-7 text-sm rounded-md border border-gray-400' >Explore</Link>
         </div>
         </div>
         </div>
        </div>
     </div>
    </div>
  )
}
