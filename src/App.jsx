import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BooksReview from './components/bookreview/BooksReview';
import SideBar from './components/sidebar/SideBar';
import Hero from './components/home/Hero';
import Category from './components/category/Category';
import SearchResult from './components/searchresult/SearchResult';
import Cart from './components/cart/Cart';
import { Contexts } from './components/context/Context';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import SaveItems from './components/saveItems/SaveItems';

export default function App() {
  console.log('rendering App');
  return (
    <div className='h-full w-full dark:bg-[#202D2F] transition-all duration-200 bg-[#e2e7eb]'>
    <BrowserRouter>
     <Navbar/>
      <SideBar/>
      <Cart />
      <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/contactus' element={<Contact />} />
      <Route path='/category/:id' element={<Category />} />
      <Route path='/save' element={<SaveItems />} />
      <Route path='/searchresult/:id' element={<SearchResult />} />
      <Route path='/booksreview/:id' element={<BooksReview />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}
