import React from 'react'
 
const Explore = () => {
  return (
   <section id="explore">
    <div className="container">
        <div className="row row__column">
            <h2>
                Explore more  <span className="purple">Cakes</span>
            </h2>
            <a href="/cakes">
            <button className='btn'>
                Explore Cakes
            </button>
            </a>
        </div>
    </div>
   </section>
  )
}
export default Explore
