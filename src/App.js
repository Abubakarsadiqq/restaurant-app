import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

//import{
//BrowserRouter as Router,
//Routes,
//Route,
//Link
//} from 'react-router-dom';
//import styles from './App.css';
//import Products from './Components/Products';
//import Contacts from './Components/Contacts';
//<Router>
//<Route exact path='/' element={<Home />}></Route>
//<Route exact path='/' element={<About />}></Route>
//<Route exact path='/' element={<Contact/>}></Route>
//<Route exact path='/' element={<Product/>}></Route>  
//</Router>
//


function App(){
return(
 <section>
   <Navbar/>
   <Home/>
 </section>

 )

}




export default App