import React from 'react';
import "./reason.css";
import "/src/App.css"
import affordable from "../assets/affordable.png";
import Quality from "../assets/quality.jpeg";
import Success from "../assets/success.png";
import { motion } from "framer-motion";

 const Reason = () => {
  return (
    <div className="reason" id='dho'>
      
           <h1>Why Choose <motion.span style={{color:'#64CCC5'}} initial={{opacity:0,scale:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.2,duration:1}}>Us?</motion.span></h1>

          <motion.div id="foo" style={{paddingTop:"-5rem"}} initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,duration:0.6}} > <img src={Quality} id='1'/><h2>Qualified and Experienced Tutors:</h2><p id='para'>At our tutoring center, we take pride in our exceptional team of educators who bring a wealth of knowledge and experience to the table. Our tutors are highly qualified, with a deep understanding of the subjects they teach.</p></motion.div>
          <motion.div id='zoo' style={{marginTop:'-3rem'}} initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.6}}><h2>Affordable Pricing and Packages:</h2> <p style={{color:'white'}}>We understand the importance of accessible education, and that's why we offer tutoring services at affordable prices. Quality education shouldn't come with a hefty price tag.</p><img style={{ objectFit: "cover",borderRadius: "50px", height: "10rem",width:"12rem"}} src={affordable} /></motion.div>
          <motion.div id="foo" initial={{x:250,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.6,duration:0.6}}> <img src={Success} id='1'/><h2 id='hara'>98% Pass Percentage:</h2><p id='para'>At our tutoring center, we take immense pride in our remarkable track record, boasting an impressive 98% pass percentage. This exceptional achievement reflects our unwavering commitment to academic excellence and the success of our students</p></motion.div>





    </div>
  )
}

export default Reason;