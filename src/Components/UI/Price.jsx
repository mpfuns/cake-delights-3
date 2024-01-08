import React from 'react'

const Price = ({cost, sale}) => {
  return (
    <div className="cake__price">
    {sale?
    (<><span className="cake__price--normal">${cost}</span> ${sale}</>): (<>${cost}</>)
}
   
</div>
  )
}

export default Price