import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import HomeTemplates from "./Home/templates/HomeTemplates";
import GoodsDetailTemplates from "./GoodsDetail/templates/GoodsDetailTemplates";
import CartTemplates from "./Cart/templates/CartTemplates";
import OrderTemplates from "./Order/templates/OrderTemplates";
import DashBoardTemplates from './DashBoard/templates/DashBoardTemplates';
import ProductRegistrationTemplates from "./ProductRegistration/templates/ProductRegistrationTemplates";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
    return (
      <Routes>
        <Route path="/" element = {<HomeTemplates />} />
        <Route path="/login" element = {<LoginTemplates />} />
        <Route path="/signup" element = {<SignupTemplates />} />
        <Route path="/goodsDetail" element = {<GoodsDetailTemplates />} />
        <Route path="/cart" element = {<CartTemplates />} />
        <Route path="/order" element = {<OrderTemplates />} />
        <Route path="/dashboard" element = {<DashBoardTemplates />} />
        <Route path="/productRegistration" element = {<ProductRegistrationTemplates />} />
      </Routes>
  );
}

export default App;
