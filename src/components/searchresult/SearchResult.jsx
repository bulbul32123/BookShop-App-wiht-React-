import React, { useState } from 'react'

export default function SearchResult() {
  const [isSaveBgChange, setIsSaveBgChange] = useState([]);

  const handlebutton = (id) => {
    const isAlreadySaved = isSaveBgChange.includes(id);
    setIsSaveBgChange((prev) =>
    isAlreadySaved ? prev.filter((savedId) => savedId !== id): [...prev, id]
  );
}
console.log(isSaveBgChange);
  return (
    <div>
      <button onClick={()=>handlebutton(5)} className={`${isSaveBgChange.includes(5) ? 'bg-white text-black' :  'text-red-600'}`}>CLick me to get Id</button>
      <button onClick={()=>handlebutton(54)} className={`${isSaveBgChange.includes(54) ? 'bg-white text-black' :  'text-red-600'}`}>CLick me to get Id</button>
      <button onClick={()=>handlebutton(545)} className={`${isSaveBgChange.includes(545) ? 'bg-white text-black' :  'text-red-600'}`}>CLick me to get Id</button>
      <button onClick={()=>handlebutton(345)} className={`${isSaveBgChange.includes(345) ? 'bg-white text-black' :  'text-red-600'}`}>CLick me to get Id</button>
      <button onClick={()=>handlebutton(455)} className={`${isSaveBgChange.includes(455) ? 'bg-white text-black' :  'text-red-600'}`}>CLick me to get Id</button>
    </div>
  )
}
