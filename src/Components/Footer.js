import React from 'react';
import './footer.css' 


const Footer = () => {
  return (
   <footer>
      <div className="links-and-contact">

        <div className="links">
          <h3>Links</h3>
          <ul className="links-list">
            <li><a href="https://facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://instagram.com/">Intagram</a></li>
          </ul>
        </div>


        <div>
          <form action="#">
            <label for="email">
              <h3>Write us about anything you need</h3>
              <h4>Email</h4>
              <input type="email" id="email" placeholder="Enter your email"/>
            </label>
            <label for="message">
              <h4>Message</h4>
              <textarea id="message">Your Message</textarea>
            </label>
            <div className="submit-button-wrapper">
              <input className="submit" type="submit" valid="Send Message" id="submit-button" />
            </div>
          </form>
        </div>

</div>

   </footer>
  )
}

export default Footer