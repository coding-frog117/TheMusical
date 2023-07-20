import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import HomeTemplates from "./Home/templates/HomeTemplates";
import GoodsDetailTemplates from "./GoodsDetail/templates/GoodsDetailTemplates";
import TitleBox from "./Cart/molecules/TitleBox";
import { HomeLayout } from "./Common/HomeLayout";
import PageTitle from "./Common/PageTitle";
import CartMain from "./Cart/organisms/CartMain";

function App() {

    return (
    <>
    <SignupTemplates />
    <LoginTemplates />
    <HomeTemplates />
    <GoodsDetailTemplates />
    <HomeLayout>
      
      <PageTitle text = "장바구니"/>
      <TitleBox />
    
      <CartMain />
    </HomeLayout>
    </>
  );
}

export default App;
