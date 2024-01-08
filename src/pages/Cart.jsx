import React, { useEffect, useState } from 'react'
import EmptyCart from "../assets/undraw_empty_cart_co35.svg"
import { Link } from 'react-router-dom';
const Cart = ({ cart, changeQuanitly, removeFromCart}) => {
  const total = () =>{
    let price= 0;
    cart.forEach((item) => {
       price += (item.salePrice||item.cost) * item.quantity
    })
  
 return Math.round(price*100)/100
  }

return (
    <div id="cakes__body">
        <main id="cakes__main">
            <div className="cakes__container">
                <div className="row">
                    <div className="cake__selected--top">
                        <h2 className="cart__title">
                        Cart
                        </h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__cake">Cake</span>
                            <span className="cart__quantity">Quantity</span>
                            <span className="cart__total">Price</span>
                        </div>
                        <div className="cart__body">
                        {
                            cart.map(cake => {
                                return(
                                    <div className="cart__item">
                                    <div className="cart__cake">
                                        <img src={cake.img}  className="cart__cake--img" alt="" />
                                        <div className="cart__cake--info">
                                            <span className="cart__cake--title">{cake.title}</span>
                                            <span className="cart__cake--price">${cake.salePrice||cake.cost}</span>
                                            <button className="cart__cake--remove" onClick={()=>removeFromCart(cake.id)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                     <input type="number" 
                                     onChange={(event)=> changeQuanitly(cake, event.target.value)}
                                     value={cake.quantity}
                                     min={0} 
                                     max={99} className='cart__input' />
                                    </div>
                                    <div className="cart__total">
                                        ${Math.round((cake.salePrice||cake.cost)* cake.quantity*100)/100}
                                    </div>
                                  </div>       
                                )
                            })
                        }
                      
                        </div>
                            { cart.length === 0 && (
                            <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />
                                <h2>You don't have any cakes in your cart!</h2>
                                <Link to="/cakes">
                                <button className="btn">Browse Cakes</button>
                                </Link>
                        
                            </div>)}
                    
                    </div>
                    { cart.length > 0 && (<div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>${Math.round((total() *0.9)*100)/100}</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>${(Math.round((total() *0.1)*100)/100).toFixed(2)}</span>
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>${total()}</span>
                        </div>
                        <button className="btn btn__checkout no-cursor" onClick={()=> alert(`development is still in processing`)}>
                            Proceed to checkout
                        </button>
                    </div>)}
                </div>
            </div>

        </main>
    </div>


  )
}

export default Cart