import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../Components/UI/Rating';

const CakeInfo = ({cakes}) => {
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
                        <img src="" alt="" className="cake__selcted--img" />
                      </figure>
                      <div className="cake__selected--description">
                        <h2 className="ckae__slected--title">
                          test
                        </h2>
                         <Rating  rating='4.5'/>
                      </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default CakeInfo