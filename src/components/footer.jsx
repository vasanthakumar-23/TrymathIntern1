import React from 'react';
import './footer.css';
import "/src/App.css";
import Email from "../assets/email.png";
import face from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import Logo from "../assets/logo.png";
import {Link} from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Footer = () => {
  return (
    <div className='footer'>
      <div ></div>
      <div className="blur f-blur"></div>
      <div className="blur z-blur"></div>
      <div className='container'>
        <section><h3><span style={{color:'#64CCCf',display:'block',marginBottom:'5px'}}>Tutor</span>G.Bhuvaneswari  <span style={{display:'block'}}>m.sc   b.ed(maths)</span> </h3>
        <h4 style={{color:'white',fontSize:'25px',}}><span id='contact-no' style={{color:'#64CCCf',marginRight:'10px'}}>Contact No:</span>9994890273</h4></section>

    <div className="logos">
      <img src={Email} data-bs-toggle="tooltip" data-bs-placement="bottom" title='trymathsedu@gmail.com' />
      <img src={insta} data-bs-toggle="tooltip" data-bs-placement="bottom" title='trymaths_intern24' />
      <img src={face} />
      

    </div>

    <div className="contents">
      <h5>Content</h5>
      <p>Home</p>
      <p>Why?</p>
      <p>Testimonials</p>
      <p>Faq</p>
      <p style={{color:'#64CCCf'}}>Contact Us</p>
    </div>

  </div>
    </div>
        
  )
}

export default Footer