import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'
import { useRef } from 'react'

 const Cake = ({cake, photo}) => {
   const [img, setImg]= useState()
  
 

  useEffect(()=>{
    const image= new Image();
    image.src= `/${photo}`
    image.onload=()=>{
     
      setTimeout(() =>{
      
            setImg(image)
     
       
      }, 300) 

    }
    
   
  })
  
    return (
    <div className="cake">
        {img?
        <>
        <Link to={`/cakes/${cake.id}`}>
                    <figure className="cake__img--wrapper">
                        <img src={`/${photo}`} alt="" />
                    </figure>
                    </Link>
                    <div className="cake__title">
                        <Link to={`/cakes/${cake.id}`} className="cake__title--link">
                         {cake.title}
                        </Link>
                    </div>
                    
                   <Rating rating={cake.rating} />
    <Price  sale={cake.salePrice} cost={cake.cost}/>
        </>
        
        :
        <>
        <div className="cake__img--skeleton"></div>
        <div className="skeleton cake__title--skeleton"></div>
        <div className="skeleton cake__rating--skeleton"></div>
        <div className="skeleton cake__price--skeleton"></div>
        </>
    
    }
        
        
        
                 
                 </div>
             
  )
}
export default Cake