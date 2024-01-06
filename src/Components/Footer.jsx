import React from 'react'
import Logo from "../assets/Cake-Delights.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
<footer>
    <div className="container">
        <div className="row row__column">
            <Link to="/">
                <figure>
                    <img src={Logo} className='footer__logo--img' alt="" />
                </figure>
            </Link>
            <div className="footer__list">
                <a href="/" className='footer__link'>Home</a>
                <span className="footer__link no-cursor">About</span>
                 <a href="/cakes" className='footer__link'>Cakes</a>
                 <a href="/cart" className='footer__link'>Cart</a>
            </div>
            <div className="footer__copyright">
                Copyright &copy;2023 Cake Delights
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer