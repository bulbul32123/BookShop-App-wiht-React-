import React, { useContext, useEffect } from 'react'
import { Contexts } from '../context/Context'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const {setTitle } =  useContext(Contexts)
  const location = useLocation()
  useEffect(()=>{
       if(location.pathname === '/contactus'){
          setTitle('')
        }
  },[location.pathname])
  return (
    <div>
      Contact
    </div>
  )
}
