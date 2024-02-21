import React from 'react';
import Hero from "./components/Hero.jsx";
import Reason from "./components/Reason.jsx";
import Faq from "./components/faq.jsx";
import Footer from "./components/footer.jsx";
import Testimonial from "./components/testimonial.jsx";
import Contact from "./components/contact.jsx"
 const App = () => {
  return (
    <div className='App'><Hero />
    <Reason />
    <Testimonial />
    <Faq />
    <Contact />
    <Footer />
    
    </div>
  )
}

export default App