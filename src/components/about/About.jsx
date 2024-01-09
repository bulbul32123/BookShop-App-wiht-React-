import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Contexts } from '../context/Context';

export default function About() {
    const {setTitle } =  useContext(Contexts)
    const location = useLocation()
    useEffect(()=>{
         if(location.pathname === '/aboutus'){
            setTitle('')
          }
    },[location.pathname])
  return (
    <div>
      About
    </div>
  )
}
