import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Rating from '../Components/UI/Rating';
import Price from '../Components/UI/Price';
import Cake from '../Components/UI/Cake';

const CakeInfo = ({cakes, addToCart, cart}) => {
const {id}= useParams();
const cake= cakes.find(cake => +cake.id === +id)




function addCakeToCart(cake){
  addToCart(cake)
}
function cakeExistOnCart(){
  return  cart.find(cake => cake.id === +id)
}
console.log(cake.img)
  return (
    <div id="cakes__body">
        <main id="cakes__main">
            <div className="cakes__container">
                <div className="row">
                    <div className="cake__selected--top">
                    <Link to="/cakes" className="cake__link">
                    <FontAwesomeIcon icon="fa-arrow-left" />
                      </Link> 
                      <Link to="/cakes"><h2 className='cake__selected--title--top'>Cakes</h2></Link>
                    </div>
                    <div className="cake__selected">
                      <figure className="cake__selected--figure">
                        <img src={`/${cake.img}`} alt="" className="cake__selcted--img" />
                      </figure>
                      <div className="cake__selected--description">
                        <h2 className="ckae__selected--title">
                          {cake.title}
                        </h2>
                         <Rating  rating={cake.rating}/>
                         <div className="cake__selected--price">
                          <Price  sale={cake.salePrice} cost={cake.cost} />
                         </div>
                         <div className="cake__summary">
                          <h3 className="cake__summary--title">
                           Summary 
                          </h3>
                          <p className="cake__summary--para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rerum eveniet est dolorum! Magnam, tenetur animi ut maxime quia velit sed iure deleniti dignissimos dolorem officia possimus molestias sequi consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur illum. Officiis, ex a odio facilis totam quas neque quos nihil, blanditiis debitis explicabo earum aperiam ducimus deleniti ipsam tempora.
                          </p>
                          <p className="cake__summary--para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rerum eveniet est dolorum! Magnam, tenetur animi ut maxime quia velit sed iure deleniti dignissimos dolorem officia possimus molestias sequi consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur illum. Officiis, ex a odio facilis totam quas neque quos nihil, blanditiis debitis explicabo earum aperiam ducimus deleniti ipsam tempora.
                          </p>
                         </div>
                         {
                          cakeExistOnCart()?
                          <Link to={`/cart`} className='cake__link' >
                          <button className="btn">Checkout</button>
                          </Link>
                           
                          : <button className="btn" onClick={()=> addCakeToCart(cake)}> Add to cart</button>
                         }
                        
                      </div>
                    </div>
                </div>
            </div>
            <div className="cakes__container">
            <div className="row">
              <div className="cake__selceted--top">
                <h2 className="cake__selected--title--top">
                  Recommended Cakes 
                </h2>
              </div>
              <div className="cakes">
              {
                cakes
                .filter(cake => cake.rating=== 5 && +cake.id!== +id)
                .slice(0,4)
                .map(cake => <Cake  cake={cake}  key={cake.id} />)
              }
              </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default CakeInfo