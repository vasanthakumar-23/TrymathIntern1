import React from 'react';
import "./faq.css";
import {motion} from "framer-motion";

const Faq = () => {
  return (
    <div className="faq" id='theen'>
        <h1 style={{color:'#64CCC5'}}>FAQ<motion.span style={{color:"white"}} whileInView={{scale:1,opacity:1}} initial={{scale:0,opacity:0}} transition={{delay:1}}>!</motion.span></h1>
        <div className="left">
           <motion.div className="one" whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.2,duration:0.5}}><div className="quest">How do I enroll in your tutoring programs?</div><div className="answer">Enrolling in our tutoring programs is easy! Simply visit our website and get the contact information</div></motion.div>
           <motion.div className="two" whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.4,duration:0.5}}><div className="quest">What subjects do you offer tutoring for?</div><div className="answer"> We offer tutoring services for a wide range of subjects, covering everything from mathematics and science to languages and humanities..</div></motion.div>
           <motion.div className="three" whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.6, duration:0.5}}> <div className="quest" >What is the duration of each tutoring session?</div><div className="answer"> The duration of each tutoring session varies based on the subject and the student's needs. Generally, sessions range from 45 minutes to an hour</div></motion.div>
        </div>
        <div className="line"></div>
        <div className="right"><motion.div className="four" whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.8, duration:0.7}}><div className="quest">Where the Tution center Located?</div><div className="answer">Tution center is Located at Manjakuppam,Cuddalore</div></motion.div>
           <motion.div className="five" whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:1, duration:0.7}}><div className="quest">Do i get guaranteed Pass?</div><div className="answer"> Our tutoring services are designed to provide comprehensive support, Our dedicated tutor work closely with students to enhance their skills and knowledge in preparation for exams</div></motion.div>
           <motion.div className="six" whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:1.2, duration:0.7}}> <div className="quest">Do you Provide online classes on holidays</div><div className="answer"> We do not offer online classes during holidays; only offline classes are conducted on working days</div></motion.div>
           </div>
    </div>
  )
}
export default Faq;
