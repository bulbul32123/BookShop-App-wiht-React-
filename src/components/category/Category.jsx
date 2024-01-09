import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchingApiData } from '../api/fetchingData';
import { Contexts } from '../context/Context';
import { useContext } from 'react';
import FilterBar from '../filter/FilterBar';
import Img from '../Img';
import { loadingSkeleton } from '../utils/data';
import { BsFillHeartFill } from 'react-icons/bs';
export default function Category() {
  const { loading, setData, data,setTitle, AddItemToCart, setLoading, selectFilterYear, selectFilterGenres, isSaveBgChange, setIsSaveBgChange, saveFavouriteList, setSaveFavouriteList } = useContext(Contexts)
   const { id } = useParams()
   const fetchingData = () => {
    if(id == 'top'){
      fetchingApiData(`/${id}/${selectFilterYear}`).then((res) => {
        setData(res)
        setLoading(true)
      })
    }
    if(id == 'nominees'){
      fetchingApiData(`/${id}/${selectFilterGenres}/${selectFilterYear}`).then((res) => {
        setData(res)
        setLoading(true)
      })
    }
    if(id == 'month'){
      fetchingApiData(`/${id}/${selectFilterYear}/12`).then((res) => {
        setData(res)
        setLoading(true)
      })
    }
    if(id == 'week'){
      fetchingApiData(`/${id}/${selectFilterGenres}/10`).then((res) => {
        setData(res)
        setLoading(true)
      })
    }
    if(id == 'top_authors'){
      fetchingApiData(`/${id}`).then((res) => {
        setData(res)
        setLoading(true)
      })
    }
  }
  useEffect(()=>{
    fetchingData()
  },[id, selectFilterGenres, selectFilterYear])
  
  useEffect(() => {
    if(id === 'nominees'){
      setTitle('Nominees Books')
    }
    else if(id === 'top'){
      setTitle('Awarded Books')
    }
    else if(id === 'week'){
      setTitle('Popular Books')
    }
    else if(id === 'top_authors'){
      setTitle('Popular Authors')
    }
  }, [id])


  const handleFavouriteList = (id,item) => {
    const isAlreadySaved = isSaveBgChange.includes(id);
    setSaveFavouriteList((prev) => 
    isAlreadySaved ? prev?.filter((savedId) => (savedId?.book_id || savedId?.author_id) !== id) :[...prev, item])

    setIsSaveBgChange((prev) =>
      isAlreadySaved ? prev.filter((savedId) => savedId !== id) : [...prev, id]
    );
  };


  console.log('saveFavouriteList', saveFavouriteList);
  console.log('isSaveBgChange', data);
  return (
    <>
      {loading === true ? (
      <>
      <div className="flex justify-end sm:flex-row flex-col fixed right-0">
        <FilterBar />
      </div>
      <div className='flex justify-start mt-32 sm:mt-20 items-center h-full flex-col w-full pl-5 pr-5'>
        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          {data?.map((item) => (
            <div className="flex justify-start transition-all duration-300 items-start flex-col w-full h-full dark:bg-[#273138] bg-white text-black dark:text-white p-5 rounded-[10px]" key={item?.book_id || item?.author_id}>
              <Link to={`/booksreview/${item?.book_id || item?.author_id}`}>
                <div className="">
                  <Img src={item?.cover || item?.image} className='rounded-md select-none hover:scale-110 transition-all duration-500 object-cover h-full w-48' alt={item?.name} />
                </div>
              </Link>
              {console.log(item)}
              {/* number_published_books */}
              <h1 className=' pl-2 pt-2 capitalize'>{item?.name}</h1>
              <p className='dark:text-gray-400 text-gray-600 text-[15px] pl-2 capitalize'>{`${item?.author ? `Author: ${item?.author}` : `Popular Book name: ${item?.popular_book_title}` ? 'df' : 'dfd' } `}</p>
              <p className='dark:text-gray-400 text-gray-600 text-[15px] pl-2 capitalize'>{`${item?.votes ? `Price: $${(item?.votes)?.toString().slice(2, -1)}` : '' }`}</p>
              <p className='dark:text-gray-400 text-gray-600 text-[15px] pl-2 capitalize'>{`${item?.votes ? `Votes: ${item.votes}` : `Published Books: ${item?.number_published_books}` } `}</p>
              <div className="flex gap-3 mt-2">
              { item?.book_id ? (
                <button className='border dark:border-white  border-black hover:bg-black hover:text-white  dark:hover:bg-slate-200 dark:hover:text-gray-800 transition-all duration-300 py-1 px-3 text-[13px]' onClick={() => AddItemToCart(item?.name, item?.votes, item?.book_id, item?.cover)}>Add to cart</button>
              ) : ('')
              }
                <button onClick={()=>handleFavouriteList((item?.book_id || item?.author_id) , item)}><span className={`dark:text-white text-black cursor-pointer`}><BsFillHeartFill
                  size={20} className={`${
                    isSaveBgChange.includes(item?.book_id || item?.author_id) ? 'text-red-600' : 'text-black dark:text-white'
                  }`}  /></span></button>
              </div>
            </div>
          ))

          }

        </div>
      </div>
      </>
     ): 
     <div className='flex justify-start mt-32 sm:mt-20 items-center h-full flex-col w-full pl-5 pr-5'>
         <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">        
         {loadingSkeleton?.map((item)=>(
           <div className="h-80 w-56  pt-4 pl-4 pr-4 dark:bg-[#273138] transition-all duration-300 rounded-md bg-white" key={item?.id}>
         <SkeletonTheme baseColor='#2F3B43' highlightColor='#ffffff'>
         <div className='h-[250px] w-full rounded-md'><Skeleton className='w-full h-full'/></div>
          <h2 className='w-[85%] h-4 mt-2 rounded-xl '><Skeleton count={1} height={15} borderRadius={10}/></h2>
           <p className='w-[85%] h-2 mt-1 rounded-xl '><Skeleton count={1} height={12} borderRadius={10} /></p>
         </SkeletonTheme>
         </div>
         ))

         }
         </div>
         </div>
     }
     </>
  )
}