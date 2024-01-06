import React, {useState} from 'react'

import Cake from '../Components/UI/Cake'

const Cakes = ({cakes: initialCakes}) => {

    const [cakes, setCakes]=useState(initialCakes)

    function filterCakes(filter){
 console.log(filter)
 if( filter==='LOW_TO_HIGH'){
    setCakes(cakes.slice().sort((a,b)=> (a.salePrice|| a.cost)-(b.salePrice|| b.cost)))
    
 } 
 if( filter==="HIGH_TO_LOW"){
    setCakes(cakes.slice().sort((a,b)=> (b.salePrice|| b.cost)-(a.salePrice|| a.cost))) 
 }
 if( filter==='RATING'){
    setCakes(cakes.slice().sort((a,b)=> (b.rating)-(a.rating)))
    
 } 
    }

  return (
    <div  className='cakes__body'>
        <main id="cakes_main">
            <section>
                <div className="cakes_container">
                    <div className="row">
                        <div className="cakes__header">
                            <h2 className='section__title cakes__heade--title'>All Cakes</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterCakes(event.target.value)}>
                                <option value="DEFAULT"  disabled>Sort</option>
                                <option value="LOW_TO_HIGH"> Price, Low to High</option>
                                <option value="HIGH_TO_LOW">Price, High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="cakes">
                        {
                            cakes.map(cake =>
                                (<Cake  
                                    key={cake.id}
                                    img={cake.img} 
                                    cake={cake}
                                    />))
                        }

                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Cakes