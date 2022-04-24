import React from 'react';
 import Navbar from './Components/Navbar';
import {
BrowserRouter,
Route,
Routes
} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';



function App(){
   
return(
 

    <BrowserRouter>
     <div className='app'>
       <Navbar />
       </div>
    <Routes>
   
      <Route path='/' element={<Home/>} exact/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>    
     </Routes>  
    </BrowserRouter>

    

    );

}



export default App