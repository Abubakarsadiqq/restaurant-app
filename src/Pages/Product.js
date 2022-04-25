import React from 'react';
import './product.css';
import Img from './download (4).jpeg';


const Product = () => {
  return (
    <div className='p-container'>
          <h1>products</h1>
      <section className='products'>
           <div className='p-card'>
               <img src={Img}  />
                  <h2>sauce</h2>
      
              </div>
              
           <div className='p-card'>
               <img src={Img}  />
                  <h2>sauce</h2>
      
              </div>
           <div className='p-card'>
               <img src={Img}  />
                  <h2>sauce</h2>
      
              </div>
           <div className='p-card'>
               <img src={Img}  />
                  <h2>sauce</h2>
      
              </div>
           <div className='p-card'>
               <img src={Img}  />
                  <h2>sauce</h2>
      
              </div>
           <div className='p-card'>
               <img src={Img}  />
                  <h2>sauce</h2>
      
              </div>

           </section>
      
      
         </div>
      )
}

export default Product