import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Img from '../Img'
  const CartItem = ({ addedItemToCarts, handleDecrement, handleIncrement, quantityMap,RemoveItemFromCart })=>{
  return (
     <>
          {addedItemToCarts?.map((item) => (
              <React.Fragment key={item?.book_id}>
                <div className="my-5 w-full px-4">
                  <div className="relative w-full h-full bg-gray-300 text-black dark:bg-gray-700 flex  items-center rounded-r-2xl dark:text-white">
                    <div onClick={()=>RemoveItemFromCart(item?.book_id)}>
                      <span className='absolute -top-2 p-2 dark:bg-slate-950 dark:text-white bg-slate-100 text-black cursor-pointer rounded-full -left-2'>
                        <AiOutlineClose size={7} />
                        {console.log(item)}
                      </span>
                      <Img src={item?.cover} alt={item?.name} className='w-20 h-20 object-cover' />
                    </div>
                    <div className="pl-5">
                      <h3 className='mb-[2px]  font-bold dark:text-white text-black'>{item?.name}</h3>
                      <p className='mb-[2px]  dark:text-gray-200  text-sm text-black'>Price: ${(item?.votes)?.toString()?.slice(2, -1)}</p>
                      <div className="flex mb-2">
                        <button className='border dark:border-white  border-black px-2 mr-2 outline-none' onClick={() => handleIncrement(item?.book_id)}>+</button>
                        <p>{quantityMap[item?.book_id] || 1}
                        </p>
                        <button className='border dark:border-white border-black px-2 ml-2 outline-none' onClick={() => handleDecrement(item?.book_id)}>-</button>
                      </div>
                    </div>
                  </div>
                </div>

              </React.Fragment>
            ))
            }
    </>
  )
}


export default CartItem
