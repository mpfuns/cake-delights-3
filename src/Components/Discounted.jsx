import React from 'react'
import { cakes } from '../data'
import Cake  from './UI/Cake'

 const Discounted = () => {
  return (
   <section id="recent">
    <div className="container">
        <div className="row">
            <h2 className="section__title">
              Discount <span className="purple">Cakes</span>
            </h2>
            <div className="cakes">
            {cakes.filter(cake => cake.salePrice>0)
                  .slice(0,8)
                  .map((cake) =>(
                  <Cake 
                  key={cake.id}
                  img={cake.img} 
                  cake={cake}
                
                  />))}
            </div>
        </div>
    </div>
   </section>
  )
}

export default Discounted