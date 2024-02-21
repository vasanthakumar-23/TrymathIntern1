import React,{useRef} from 'react';
import emailjs from "@emailjs/browser";
import './contact.css';

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_sanii52", 'template_zkai5wq', form.current, '6tvH6Kw6WK9mUbNN-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contacts' id='phone'>
        <div className="container">
           <div id='contact-us'>
            <h1>Contact Us <span style={{color:'#64CCCf'}}> now</span> </h1>
            <p>Fill out the form below to get in touch with us. We are here to help you with any questions or inquiries you may have.</p>

           </div>
           <form ref={form} onSubmit={sendEmail}>
            <input placeholder='Name' type='text' name='from_name'/>
            <input placeholder='Email' type='email' name='user_email' />
            <button onClick={()=>alert('MESSAGE SENT')}>Send</button>
            <p>This site is protected by reCAPTCHA and the Google<span style={{color:'#64CCCf',fontSize:'16px'}}> privacy policy </span> and <span style={{color:'#64CCCf',fontSize:'16px'}}>Terms of Service apply</span>.</p>
            
           </form>
        </div>
        
    </div>
  )
}

export default Contact
