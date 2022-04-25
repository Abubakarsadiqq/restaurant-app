import React from 'react';
import './contact.css';


const Contact = () => {
  return (
    <div className='c-container'>
        <h1> contact us</h1>
     <form>
       <label  for="name">Name</label>
      <input type='text' className='' placeholder='your name'/>
    
   
       <label  for="title">Title of message</label>
      <input type='text' className='' placeholder='your message'/>

     
     
      <label>message</label>
     
     <textarea placeholder='leave a message'></textarea>

           
     <button>send</button>
     </form>

    </div>
  )
}

export default Contact


