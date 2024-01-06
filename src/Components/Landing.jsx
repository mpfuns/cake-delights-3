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
                            <h1>Welcome to Cake Delights, the ultimate destination for all your cake cravings in the USA.</h1>
                            <h2>Our handcrafted cakes are the perfect addition to any celebration, and we take pride in being the best online cake shop.</h2>
                            <Link to="#features">
                                <button className="btn">Browswe cakes</button>
                            </Link>
                        </div>
                        <figure  className="header__img--wrapper">
                            <img src={undrawCake} alt="" />
                        </figure>
                    </div>
                </header>

        </section>
    )
    }
    export default Landing;