import React from 'react'
import { Link } from 'react-router-dom'
 
const Explore = () => {
  return (
   <section id="explore">
    <div className="container">
        <div className="row row__column">
            <h2>
                Explore more <span className="purple">Cakes</span>
            </h2>
            <Link to="/cakes">
            <button className='btn'>Explore Cakes</button>
            </Link>
        </div>
    </div>
   </section>
  )
}
export default Explore