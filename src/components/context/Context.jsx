import { createContext, useEffect, useState } from "react";

export const  Contexts  = createContext()


const getLocalCartItems = ()=>{
  let items = localStorage.getItem('addedItemToCart');
  if(items){
    return  JSON?.parse(localStorage.getItem('addedItemToCart'));
  }else{
    return []
  }
}
const getLocalsCartItems = ()=>{
  let saveItems = localStorage.getItem('saveFavouriteList');
    if(saveItems){
    return  JSON?.parse(localStorage.getItem('saveFavouriteList'));
    }else{
      return []
    }
}
const GetLocalIsBgChangeItems = ()=>{
  let saveItems = localStorage.getItem('isSaveBgChange');
    if(saveItems){
    return  JSON?.parse(localStorage.getItem('isSaveBgChange'));
    }else{
      return []
    }
}

export const ContextApi = ( { children } )=>{
  const [ loading, setLoading ]  = useState(false);
  const [ cartSubCountTotal, setSubCartCountTotal ]  = useState(0)
  const [ addedItemToCarts, setAddedItemToCarts ]  = useState(getLocalCartItems())
  const [ title, setTitle ] = useState();
  const [isSaveBgChange, setIsSaveBgChange] = useState(GetLocalIsBgChangeItems());
  const [ isOpenCart, setIsOpenCart ] = useState(false);
  const [ saveFavouriteList, setSaveFavouriteList ] = useState(getLocalsCartItems());
  const [ selectFilterYear, setSelectFilterYear ] = useState(2023);
  const [ selectFilterGenres, setSelectFilterGenres ] = useState('fantasy');
  const [data, setData] = useState([]);

  const AddItemToCart = (name, votes, book_id,cover) => {
    let isPresent = false
    addedItemToCarts?.some((item) => {
      if (item?.book_id === book_id) {
        isPresent = true
      }
    })
    if (isPresent) {
      return
    }
    setAddedItemToCarts((pre) => {
      return [...pre, { name, votes, book_id, cover }]
    })
  }
  useEffect(()=>{
    localStorage.setItem('addedItemToCart', JSON.stringify(addedItemToCarts))
    localStorage.setItem('saveFavouriteList', JSON.stringify(saveFavouriteList))
    localStorage.setItem('isSaveBgChange', JSON.stringify(isSaveBgChange))
  },[addedItemToCarts, saveFavouriteList, isSaveBgChange])

   return(
    <Contexts.Provider value={{
      AddItemToCart,
        loading, setLoading,
        isSaveBgChange, setIsSaveBgChange,
        title, setTitle,
        data, setData,
        saveFavouriteList, setSaveFavouriteList,
        addedItemToCarts, setAddedItemToCarts,
        isOpenCart, setIsOpenCart,
        selectFilterYear, setSelectFilterYear,
        selectFilterGenres, setSelectFilterGenres,
        cartSubCountTotal, setSubCartCountTotal
    }
    }>{children}
    </Contexts.Provider>
   )


}




