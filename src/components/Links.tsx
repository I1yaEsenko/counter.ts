import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css'

const Links = () => {
   return (
      <div className='links'>
         <div className='item'>
            <NavLink to='/counter.ts/singlemode' className={({isActive}) => (isActive ? "link active" : " link")} >SingleMode</NavLink>
         </div>
         <div className='item'>
            <NavLink to='/counter.ts/twowindowmode' className={({isActive})=>  (isActive ? "link active" : " link")}>TwoWindowMode</NavLink>
         </div>
      </div>
   );
};

export default Links;