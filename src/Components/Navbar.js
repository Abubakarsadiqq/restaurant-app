import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


function Navbar(){
return(

 <header>
  <div className="header-left">
   <span className='logo'>snappy</span>

  </div>

  <div className="header-right">
  <nav>
      <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/about'>About</Link></li>
         <li><Link to='/product'>Products</Link></li>
         <li><Link to='/contact'>Contact</Link></li>
      </ul>
  </nav>

  </div>
   </header>
   
    )


}

export default Navbar