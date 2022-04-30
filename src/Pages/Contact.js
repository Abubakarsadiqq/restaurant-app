import React from 'react';
import './contact.css';


const Contact = () => {
  return (
    <div className='c-container'>
        <h1> contact us</h1>
        <section className='form'>

        

     <form>
   <input type='text ' placeholder='your name'/>
      <br/>
      <input type='text' className='' placeholder='Title of message'/>
    
     <textarea placeholder='leave a message'></textarea>

     <button>send</button>

     </form>
        </section>

    </div>
  )
}

export default Contact


