import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Highlight from './UI/Highlight'

const Highlights = () => {
  return (
    <section id='highlights'>
       <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why  choose<span className="special-color"> Cake Delights</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight icon={<FontAwesomeIcon icon="fa-cake-candles" />} 
            title="Quality" 
            para="Enjoy a variety of flavors, from classic chocolate and vanilla to bold combinations. We make every cake with the freshest, highest-quality ingredients, ensuring that each slice is a moment of pure bliss." />
            
            <Highlight icon={<FontAwesomeIcon icon="fa-solid fa-cart-plus" />} 
            title="Place Order Easily" 
            para="Our website has easy-to-use features that let you explore a variety of cakes made by skilled pastry chefs." />
            <Highlight icon={<FontAwesomeIcon icon="fa-solid fa-truck-fast" />} 
            title="Quality" 
            para="Enjoy a variety of flavors, from classic chocolate and vanilla to bold combinations. We make every cake with the freshest, highest-quality ingredients, ensuring that each slice is a moment of pure bliss." />
            
        
          </div>
        </div>
       </div>
    </section>
  )
}

export default Highlights


