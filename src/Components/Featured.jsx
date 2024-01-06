
import React from 'react'
import  Cake  from './UI/Cake'
import {cakes}from '../data'

const Featured = () => {
 
  

  
  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured  <span className="purple">Cakes</span>
                </h2>
                <div className="cakes">
                  {cakes.filter(cake => cake.rating===5)
                  .slice(0,4)
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

export default Featured