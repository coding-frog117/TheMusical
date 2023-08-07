import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import HomeTemplates from "./Home/templates/HomeTemplates";
import GoodsDetailTemplates from "./GoodsDetail/templates/GoodsDetailTemplates";
import CartTemplates from "./Cart/templates/CartTemplates";
import OrderTemplates from "./Order/templates/OrderTemplates";
import { HomeLayout } from "./Common/HomeLayout";
import SellerHeader from "./Common/Header/SellerHeader";
import SideBar from "./DashBoard/molecules/SideBar";
import DashBoardHeader from "./DashBoard/molecules/DashBoardHeader";
import SellingTitle from "./DashBoard/molecules/SellingTitle";
import SellingItem from "./DashBoard/molecules/SellingItem";
import DashboardBox from "./DashBoard/organisms/DashboardBox";
import DashBoardTemplates from "./DashBoard/templates/DashBoardTemplates";
import RegistrationHeader from "./ProductRegistration/atoms/RegistrationHeader";
import GrayTitleText from "./ProductRegistration/atoms/GrayTitleText";


function App() {
    return (
    <>
    <SignupTemplates />
    <LoginTemplates />
    <HomeTemplates />
    <GoodsDetailTemplates />
    <CartTemplates />
    <OrderTemplates />

    <DashBoardTemplates />

    <RegistrationHeader />
    <GrayTitleText text = "상품이미지"/>
    </>
  );
}

export default App;
