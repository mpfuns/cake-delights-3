import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import librarayLogo from "../assets/Cake-Delights.png"
import { Link } from "react-router-dom";


const Nav= ({numberOfItems}) => {
    function openMenu(){
        document.body.classList+=" menu--open"
    }
    function closeMenu(){
        document.body.classList.remove("menu--open")
    }
    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={librarayLogo} alt="" className="logo"/>
                </Link>
                <ul className="nav__links" >
                    <li className="nav__list"> <Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__list"> <Link to="/cakes" className="nav__link">Cakes</Link></li>
                    <button className="btn__menu" onClick={openMenu}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" /> 
                    </button>
                    <li className="nav__icon"> <Link to="/cart" className="nav__link"> 
                    <FontAwesomeIcon icon="shopping-cart" /></Link> 
                    {
                       numberOfItems >0 && <span className="cart__length">{numberOfItems}</span>
                    }
                    
                    </li>
                  
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                     <FontAwesomeIcon icon='fa-times' />  
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link">
                                Home
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cakes" className="menu__link">
                              Cakes  
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cart" className="menu__link">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
    }
    export default Nav;
