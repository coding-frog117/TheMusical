import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import HomeTemplates from "./Home/templates/HomeTemplates";
import GoodsDetailTemplates from "./GoodsDetail/templates/GoodsDetailTemplates";
import CartTemplates from "./Cart/templates/CartTemplates";

function App() {

    return (
    <>
    <SignupTemplates />
    <LoginTemplates />
    <HomeTemplates />
    <GoodsDetailTemplates />
    <CartTemplates />
    </>
  );
}

export default App;
