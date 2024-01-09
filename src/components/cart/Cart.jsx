import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useContext } from 'react';
import { Contexts } from '../context/Context';
import CartItem from './CartItem';
import { AiOutlineClose } from 'react-icons/ai';
import Img from '../Img';
const GetLocalQuantityMapItems = ()=>{
  let saveItems = localStorage.getItem('quantityMap');
  if(saveItems){
  return  JSON?.parse(localStorage.getItem('quantityMap'));
  }else{
    return {}
  }
}

const Cart = () => {
  const { isOpenCart, setIsOpenCart, addedItemToCarts,setAddedItemToCarts } = useContext(Contexts)
  const [ quantityMap, setQuantityMap] = useState(GetLocalQuantityMapItems());
  const [price, setPrice] = useState(0)
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    addedItemToCarts.forEach((item) => {
      const quantity = quantityMap[item.book_id] || 1;
      totalPrice += (item?.votes)?.toString()?.slice(2, -1) * quantity;
    });
    return totalPrice;
  };
  const RemoveItemFromCart = (id) => {
    const remainsCartItems = addedItemToCarts?.filter((item) => item?.book_id !== id);
    setAddedItemToCarts(remainsCartItems)
  };
  
  const handleIncrement = (id) => {
    setQuantityMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }))
    setPrice(calculateTotalPrice())
  };
  
  const handleDecrement = (id) => {
    setQuantityMap((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
    setPrice(calculateTotalPrice())
  };

  useEffect(() => {
    setPrice(calculateTotalPrice());
  }, [addedItemToCarts, quantityMap]);


  useEffect(()=>{
    localStorage.setItem('quantityMap', JSON.stringify(quantityMap))
  },[ quantityMap ])

  const cartItemCompo = useMemo(()=>{
    return(
      
    <CartItem addedItemToCarts={addedItemToCarts} RemoveItemFromCart={RemoveItemFromCart} handleDecrement={handleDecrement}  handleIncrement={handleIncrement} quantityMap={quantityMap}/>
    )
  },[addedItemToCarts, handleDecrement, handleIncrement, quantityMap])

  return (
    <>
      <div className={`overflow-x-hidden z-[45] flex justify-start items-start flex-col fixed top-0 h-screen w-64 pt-36 dark:bg-[#1E272E] bg-white dark:text-white transition-all duration-500 ${isOpenCart ? 'right-0' : 'right-[-300px]'
        }`}
      >
      <div className='dark:text-white text-black border border-gray-400 absolute top-0 left-0 p-2.5 cursor-pointer' onClick={() => setIsOpenCart(false)}>
            <span>
              <AiOutlineClose size={20} />
            </span>
          </div>
          <div className="">
            <h3 className='dark:text-white text-black font-extrabold text-3xl pl-2'>Cart</h3>
          </div>
          {addedItemToCarts?.length > 0 ?  (
            <>

          <div className="w-full overflow-x-hidden h-[1900px]">
            {cartItemCompo}
          </div>
          <div className="flex flex-col justify-around items-start pl-4 pt-3 pb-4">
            <div className="flex mb-2">
              <h4 className='pr-3 font-semibold'>Cart Total</h4>
              <p className='text-gray-600 dark:text-gray-300'>${price.toFixed(2)}</p>
            </div>
            <div className="flex ">
              <h4 className='pr-[60px] font-semibold text-black dark:text-white'>Tax</h4>
              <p className='text-gray-600 dark:text-gray-300'>$10.98</p>
            </div>
          </div>
          <hr className='w-full' />
          <div className="flex mt-2 pl-5 pr-14">
            <h4 className='pr-[60px] font-semibold'>SubTotal Price</h4>
            <p className='text-gray-600 dark:text-gray-300'>${(price + 10.98).toFixed(2)}</p>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <button className='py-2 px-4 dark:bg-black bg-gray-300 text-black dark:text-white rounded-md mt-3'>Checkout</button>
          </div>
            </>
          ) : (
            <div className="flex justify-center flex-col items-center">
              <img src="/images/emptyCart.png" alt="Empty Cart" className='w-full select-none h-full ' />
              <h4 className='font-extrabold text-xl'>Your Cart is Empty</h4>
            </div>
          )
          }
      </div>
    </>
  );
};

export default Cart;
