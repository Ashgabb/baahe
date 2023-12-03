import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            GhC {props.new_price}.00
        </div>
        <div className="item-price-old">
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
