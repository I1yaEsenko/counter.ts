import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';

import {CounterTwoWindowMode} from "./components/counters/CounterTwoWindowMode";
import {CounterSingleWindowMode} from "./components/counters/CounterSingleWindowMode";
import Links from "./components/Links";


function App() {

   return (
      <BrowserRouter>
         <div className='main'>
            <Links/>
            <div>
               <Routes>
                  <Route path='/counter.ts/twowindowmode' element={<CounterTwoWindowMode/>}/>
                  <Route path='/counter.ts/singlemode' element={<CounterSingleWindowMode/>}/>
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )

}

export default App;

