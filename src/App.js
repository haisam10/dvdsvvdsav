import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route  path="./" element={<Shop />} />
        <Route  path="/mens" element={<ShopCategory category="men" />} />
        <Route  path="/women" element={<ShopCategory category="womens" />} />
        <Route  path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="/products" element={<ShopCategory category="products" />} />
        <Route path=":/productID" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
       
    </>
  );
}

export default App;
