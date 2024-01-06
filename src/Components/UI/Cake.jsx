import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const Cake = ({img, cake}) => {
  
  
  
    return (
    <div className="cake">
                    <a href="">
                    <figure className="cake__img--wrapper">
                        <img src={img} alt="" />
                    </figure>
                    </a>
                    <div className="cake__title">
                        <a href="/" className="cake__title--link">
                         {cake.title}
                        </a>
                    </div>
                    <div className="cake__ratings">
                        {
                        new Array(Math.floor(cake.rating)).fill(0).map((_, index)=> <FontAwesomeIcon icon="star" key={index} />)
                        }
                        {
                           !Number.isInteger(cake.rating)&& <FontAwesomeIcon icon="star-half-alt" />
                        }
                    </div>
                   
                    <div className="cake__price">
                        {cake.salePrice?
                        (<><span className="cake__price--normal">${cake.cost}</span> ${cake.salePrice}</>): (<>${cake.cost}</>)
                    }
                       
                    </div>
                 </div>
             
  )
}
export default Cake