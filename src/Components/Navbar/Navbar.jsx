import React, { useState } from 'react';
import './Navbar.css'
import shopping_cart from '../Assets/shopping_cart.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("homes");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>BAAHE</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("homes")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="homes"?  <hr />:<></>}</li>
        <li onClick={() => {setMenu("electronic")}}><Link style={{textDecoration: 'none'}} to='/electronic'>Electronics</Link>{menu==="electronic"?  <hr />:<></>}</li>
        <li onClick={() => {setMenu("cloths")}}><Link style={{textDecoration: 'none'}} to='/cloths'>Clothing</Link>{menu==="cloths"?  <hr />:<></>}</li>
        <li onClick={() => {setMenu("groceries")}}><Link style={{textDecoration: 'none'}} to='/groceries'>Grocery</Link>{menu==="groceries"?  <hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={shopping_cart} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar


