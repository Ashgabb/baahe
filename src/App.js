
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_electronics from './Components/Assets/banner_electronics.png'
import banner_clothing from './Components/Assets/banner_clothing.png'
import banner_groceries from './Components/Assets/banner_grocries.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/electronic' element={<ShopCategory banner={banner_electronics} category="electronic"/>}/>
          <Route path='/cloths' element={<ShopCategory banner={banner_clothing} category="cloths"/>} />
          <Route path='/groceries' element={<ShopCategory banner={banner_groceries} category="groceries"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
