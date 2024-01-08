import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import undrawCake from "../assets/undraw_birthday_cake_re_bsw5.svg"
import { Link } from "react-router-dom"


const Landing = () => {
    return (
        <section id="landing">
                <header>
                    <div className="header__container">
                        <div className="header__description">
                            <h2>Welcome to <span className="special-color">Cake Delights</span> , the ultimate destination for all your cake cravings in the USA.</h2>
                            <h3>Our handcrafted cakes are the perfect addition to any celebration, and we take pride in being the best online cake shop.</h3>
                            <Link to="#features">
                                <button className="btn">Browse cakes</button>
                            </Link>
                        </div>
                        <div className="space">
                        <figure  className="header__img--wrapper">
                            <img src={undrawCake} alt="" />
                        </figure>
                        </div>
                    </div>
                </header>

        </section>
    )
    }
    export default Landing;