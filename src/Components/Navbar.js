import React from 'react';
import styles from './navbar.css';


function Navbar(){
return(

 <header>
  <div className="header-left">
   <span className='logo'>snappy</span>

  </div>

  <div className="header-right">
  <nav>
      <ul>
         <li><a>Home</a></li>
         <li><a>About</a></li>
         <li><a>Products</a></li>
         <li><a>Contact</a></li>
      </ul>
  </nav>

  </div>
   </header>
   
    )


}

export default Navbar