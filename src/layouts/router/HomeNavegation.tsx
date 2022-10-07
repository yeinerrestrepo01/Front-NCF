import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home';

const HomeNavegation: React.FC = () => {
  return (
    <>
     <Routes>
        <Route
         element={<Home />}
         path="/"
        />
     </Routes>
    </>
  )
}

export default HomeNavegation