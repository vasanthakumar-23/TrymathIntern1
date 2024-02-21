import React from 'react';
import "./Hero.css";
import Logo from "../assets/logo.png";
import graph from "../assets/graph-1.png";
import zero from  "../assets/hero.png";
import "/src/App.css";
import idea from "../assets/idea.png";
import cap from "../assets/graduation-cap.png";

import {motion} from "framer-motion";
import NumberCounter from "number-counter";
import {Link} from "react-scroll"


const Hero = () => {
  return (
    <div className="hero" id='ek'>
      <div className="blur h-blur"></div>
        <div className="header">
        <div className="logo">
            <img src={Logo}  />
            <h1 id='qontra'>Try Maths<span style={{color:'#64CCC5'}}>Intern</span> </h1>

        </div>
        <div className="navbar">
            <ul>
                <li> Home</li>
                <li><Link to='dho' span={true} smooth={true}> Reason</Link></li>
                <li><Link to='theen' span={true} smooth={true}>Faq</Link></li>
                <li><Link to='char' span={true} smooth={true}>Reviews</Link></li>
            </ul>
            
        </div>
        <button id='contact'><Link to='phone' span={true} smooth={true}>Contact</Link></button>
        </div>
       

       <div className="content"  > 
        <motion.img src={idea} initial={{x:-400,y:200,opacity:-1,rotate:30}} animate={{x:0,y:0,opacity:1}} transition={{duration:0.5,delay:0.5}} />  
        <motion.h1 initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{type:'tween', duration:0.5 }}>Great Place for <motion.span animate={{y:0, scale:1 ,opacity:1}} initial={{y:30,scale:0 ,opacity:0}} transition={{delay:0.5}}>Learning</motion.span><span id='para' style={{fontSize:'15px',whiteSpace:'wrap',letterSpacing:'1px',fontFamily:"Arial, Helvetica, sans-serif",color:'white'}}>Build your future right here.Our only concern is your education.The place gives you A to Z education</span></motion.h1>
         <motion.img src={graph} animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.2}}   />
         <motion.img src={zero} animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.7}} />
       </div>
       
       <div id='start'><button>Get started</button>
       <a href='#1'>Learn More</a></div>

       <div className="zo">
        <div><span id='no'><NumberCounter start={10} end={40} delay={3} prefix="+"/></span><span>Active Students</span></div>
        <div><span id='no'><NumberCounter start={80} end={120} delay={4} prefix="+"/></span><span>Total Students studied</span></div>
        <div><span id='no' ><NumberCounter start={70} end={98} delay={5} prefix="+"/></span><span>Pass Percentage</span></div>
       </div>




    </div>
  )
}
export default Hero;