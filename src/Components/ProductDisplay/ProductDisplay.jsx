import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="pd-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="pd-image">
            <img className='pd-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="pd-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(180)</p>
        </div>
        <div className="pd-right-prices">
            <div className="pd-right-price-old">GhC{product.old_price}</div>
            <div className="pd-right-price-new">GhC{product.new_price}</div>
        </div>
        <div className="pd-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur molestias delectus nam eum laborum modi non voluptas fugit deleniti?
        </div>
        <div className="pd-right-sizes">
            <h1>Select Size</h1>
            <div className="pd-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="pd-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="pd-right-category"><span>Tags :</span>Modern, Latest</p>
        <p className="pd-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
      </div>
    </div>
  )
}

export default ProductDisplay
