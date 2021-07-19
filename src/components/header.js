import React from 'react';
import {Link} from 'react-router-dom';
import tvicon from './tvicon.png';
export const Header = () => {
    return (
        <header>
         <div className="container">
             <div className="inner-content">
                 <div className="brand">
                 
                     <Link to="/"><img style={{width:"27%", height:"auto"}} src={tvicon} alt="logo"/></Link>
                 </div>
                 <ul className="nav-links">
                     
                     <li>
                         <Link to="/favourite" style={{color:"goldenrod"}}>Favourite </Link>
                     </li>
                     <li>
                         <Link to="/add" className="btn" >Search</Link>
                     </li>
                     
                 </ul>
             </div>
         </div>
        </header>
    )
}
