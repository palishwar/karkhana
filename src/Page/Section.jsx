import React from 'react'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Component/What'
import Page_not_found from './Component/FAQS'
import Std_details from './Component/Std_details'
import FAQS from './Component/FAQS'
import Partners from './Component/Partners'
import What from './Component/What'

function Section() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/what" element={<Contact/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/contact" element={<What/>}/>
        <Route path="/*" element={<Page_not_found/>}/>
        <Route path="/faqs" element={<FAQS/>}/>
        <Route path="/std_details/:pro_id" element={<Std_details/>}/>
      </Routes>
    
  )
}

export default Section