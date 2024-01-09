import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Contexts } from '../context/Context';
import Img from '../Img';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function SaveItems() {
    const { saveFavouriteList, setSaveFavouriteList,setIsSaveBgChange, AddItemToCart } = useContext(Contexts)
    console.log(saveFavouriteList);
    const deleteItemsFromSave = (id)=>{
        setSaveFavouriteList((pre)=> pre.filter((item)=> (item?.book_id || item?.author_id) !== id ))
        setIsSaveBgChange((pre)=> pre.filter((preId)=> preId !== id ))
        
    }
    console.log(saveFavouriteList)
  return (
    <>
      <Link to='/category/nominees' className="text-left dark:text-black text-white shadow-lg flex justify-center items-center h-9 w-24 ml-4 px-8 py-2 rounded-3xl dark:bg-slate-200 bg-black">
        <span className='mr-2'><AiOutlineArrowLeft /></span>
        Back
      </Link>
      <div className='flex justify-start mt-32 sm:mt-20 items-center h-full flex-col w-full pl-5 pr-5'>
        {saveFavouriteList?.length > 0 ? (
            <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          {saveFavouriteList?.map((item) => (
            <div className="flex justify-start transition-all duration-300 items-start flex-col w-full h-full dark:bg-[#273138] bg-white text-black dark:text-white p-5 rounded-[10px]" key={item?.book_id || item?.author_id}>
                <div className="">
                <div className='text-white z-40 relative float-right cursor-pointer ' onClick={()=>deleteItemsFromSave(item?.book_id || item?.author_id)}>
             <AiOutlineClose size={40} className='-mt-10 -mr-6 rounded-full bg-gray-200 dark:bg-[#121617] text-black dark:text-gray-200 p-3' />
        </div>
              <Link to={`/booksreview/${item?.book_id || item?.author_id}`}>
                  <Img src={item?.cover || item?.image} className='rounded-md select-none hover:scale-110 transition-all duration-500 object-cover h-full w-48' alt="" />
              </Link>
              {/* Price: ${(item?.votes).toString().slice(2, -1)} */}
                </div>
              <h1 className=' pl-2 pt-2 capitalize'>{item?.name}</h1>
              <p className='dark:text-gray-400 text-gray-600 text-[15px] pl-2 capitalize'>{`${item?.votes ? `Price: $${(item?.votes).toString().slice(2, -1)}` : `Popular Book name: ${item?.popular_book_title}` ? '' : '' } `}</p>
              <p className='dark:text-gray-400 text-gray-600 text-[15px] pl-2 capitalize'>{`${item?.votes ? `Votes: ${item?.votes}` : `Published Book: ${item?.number_published_books}` ? '' : '' } `}</p>
              <div className="flex gap-3 mt-2">
              {item?.book_id ? (
                <button className='border dark:border-white  border-black hover:bg-black hover:text-white  dark:hover:bg-slate-200 dark:hover:text-gray-800 transition-all duration-300 py-1 px-3 text-[13px]' onClick={() => AddItemToCart(item?.name, item?.votes, item?.book_id,item?.cover,)}>Add to cart</button>
              ): ''
              }
              </div>
            </div>
          ))

          }

        </div>
        ) : (
            <div className="text-black dark:text-white">
            <img src="/images/savesNotfound.png" alt="" className='w-full h-full mb-2'/>
            <h3>You Do Not Save Any Books</h3>
             </div>
        )
        }
      </div>
    </>
  )
}
