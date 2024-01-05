import React from 'react'

const Featured = () => {
  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured  <span className="purple">Cakes</span>
                </h2>
                <div className="cakes">
                 <div className="cake">
                    <a href="">
                    <figure className="cake__img--wrapper">
                        <img src="https://th.bing.com/th/id/R.62fbfe2568eb20bd41d34466dfba7c83?rik=S1VUswiv0G%2bEKA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-7DwfkXS0e7Y%2fT_QbtbP4SjI%2fAAAAAAAADwU%2fQ00ej-yT1yY%2fs1600%2fsphynx%2bcat%2bwallpapers%2b4.jpg&ehk=0RF3nJ5qb4j477wttBGqpLYp9EvSeCaxGKrr4vmothg%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </figure>
                    </a>
                 </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured