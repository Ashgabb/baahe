import React, { useState } from 'react';
import './Navbar.css'
import shopping_cart from '../Assets/shopping_cart.png'

const Navbar = () => {

    const [menu, setMenu] = useState("homes");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>BAAHE</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("homes")}}>Home{menu==="homes"?  <hr />:<></>}</li>
        <li onClick={() => {setMenu("electronic")}}>Electronics{menu==="electronic"?  <hr />:<></>}</li>
        <li onClick={() => {setMenu("cloths")}}>Clothing{menu==="cloths"?  <hr />:<></>}</li>
        <li onClick={() => {setMenu("grocerie")}}>Grocery{menu==="grocerie"?  <hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={shopping_cart} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar


