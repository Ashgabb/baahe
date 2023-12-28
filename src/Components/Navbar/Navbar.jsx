import React, { useContext, useState } from 'react';
import './Navbar.css'
import shopping_cart from '../Assets/shopping_cart.png'
import { Link } from 'react-router-dom';
import logo_colors from '../Assets/logo_colors.png'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("homes");
   /*  const {getTotalCartItems}= useContext(ShopContext); */
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo_colors} alt="" />
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
        {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
      </div>
    </div>
  )
}

export default Navbar


