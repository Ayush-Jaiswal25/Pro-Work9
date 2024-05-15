import React from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Body from './Body/Body';
function Animation() {

  const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname} >
            <Route path='/' element={<Body/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default Animation