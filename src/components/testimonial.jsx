import React from 'react';
import "/src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./testimonial.css";
import Thunder from '../assets/Bolt.png';
import Cap from '../assets/graduation-cap.png';
import {motion} from "framer-motion"

const Testimonial = () => {
  return (
    <div className="test" id="char">
      <div className="blur r-blur"></div>
        <div id='heading'>
         <h1 className="heading1">Testimonial <motion.img id="thunder" src={Thunder}   whileInView={{scale:1}} initial={{scale:0}} transition={{delay:0.6}} /></h1>
        </div>
       
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval='4000'>
      <h3 className='reviews'>"Enrolling in this tuition was a game-changer! The personalized attention and interactive sessions significantly boosted my understanding. Grateful for a supportive learning environment!"</h3>
      <h4 className='student'>~Vasanth</h4>
    </div>
    <div className="carousel-item" data-bs-interval='3000'>
    <h3 className='reviews'>"The tutors here go the extra mile! Their commitment to student success is palpable. I've seen a marked improvement in my grades and confidence since joining. Highly recommended!"</h3>
    <h4 className='student'>~Madesh</h4>
    </div>
    <div className="carousel-item" data-bs-interval='3000'>
    <h3 className='reviews'>"Exceptional tutoring! The engaging lessons and innovative teaching methods make learning enjoyable. My academic progress has been remarkable, and I owe it all to this fantastic tuition program.""</h3>
    <h4 className='student'>~Akash</h4>

    </div>
  </div>
  <button id='btn2'  className="carousel-control-prev bye" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button id='btn1' className="carousel-control-next bye" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

  )
}

export default Testimonial;