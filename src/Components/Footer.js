import React from 'react';
import './footer.css' 
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
    
     <ul>
       <li><Link to="/about">about</Link></li>
       <li><Link to="/product">product</Link></li>
       <li><Link to="/contact">contact</Link></li>
     </ul>
      <br/>
         <h3>Address: 02, victoria island, lagos</h3>
         <h3>Contact: +234(00) 335</h3>
         <h3>FAQ</h3>
      

   </footer>
  )
}

export default Footer