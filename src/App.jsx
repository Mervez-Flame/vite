/* eslint-disable no-unused-vars */
import React from 'react';
import Awesome from './components/Awesome';
import Jason from './components/Jason';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';



const App = () => {
  return (
    <div>


      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/NavBar' exact element={<NavBar/>}/>
        <Route path='/Jason' exact element={<Jason/>}/>
      </Routes>
      {/* <Awesome name="Chinonso" age="17"/> */}
      {/* <Jason  name="Jason" age="17"/> */}
      {/* <Jason  name="Mark" age="12"/> */}


    </div>
  )
}

export default App