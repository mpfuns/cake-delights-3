import './index.css';
import Nav from './Components/Nav';
import { cakes } from './data'
import Footer from './Components/Footer';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import CakeInfo from './pages/CakeInfo';
import Cart from './pages/Cart';
import React,{ useState, useEffect } from 'react';


function App() {

const [cart, setCart]=useState([]);
function addToCart(cake){
  setCart([...cart,{...cake, quantity: 1 }])
}
function numberOfItems(){
  let counter=0;
  cart.forEach(item => {
    counter+= item.quantity
  })
  return counter;
}

function removeFromCart(itemId){
 setCart(cart.filter(cake => +cake.id !== +itemId))
}
function changeQuanitly(cake, quantity){
   setCart(cart.map(item =>
      item.id === cake.id?
       {
        ...item,
         quantity: +quantity,
      }
     : item
    
   ))  
}

useEffect(()=>{
  console.log(cart)
}, [cart])


  return (
    <div className="App">
     <Nav numberOfItems={numberOfItems()} />
    <Routes>
    <Route path="/" exact element={ <Home />} />
    <Route path="/cakes" exact element={<Cakes cakes={cakes}/>} />
    <Route path= "/cakes/:id" element={<CakeInfo cakes={cakes} addToCart={addToCart} cart={cart}/>} />
    <Route path="/cart" exact element={<Cart cakes={cakes} cart={cart} changeQuanitly={changeQuanitly} removeFromCart={removeFromCart} />} />
    </Routes>
    <Footer />
    </div> 
    
   
  );
}

export default App;
