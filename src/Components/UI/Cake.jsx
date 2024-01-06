import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

 const Cake = ({img, cake}) => {
  
  
  
    return (
    <div className="cake">
                    <Link to="/cakes/1">
                    <figure className="cake__img--wrapper">
                        <img src={img} alt="" />
                    </figure>
                    </Link>
                    <div className="cake__title">
                        <Link to="/" className="cake__title--link">
                         {cake.title}
                        </Link>
                    </div>
                    
                   <Rating rating={cake.rating} />
                    <div className="cake__price">
                        {cake.salePrice?
                        (<><span className="cake__price--normal">${cake.cost}</span> ${cake.salePrice}</>): (<>${cake.cost}</>)
                    }
                       
                    </div>
                 </div>
             
  )
}
export default Cake