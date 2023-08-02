import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import HomeTemplates from "./Home/templates/HomeTemplates";
import GoodsDetailTemplates from "./GoodsDetail/templates/GoodsDetailTemplates";
import CartTemplates from "./Cart/templates/CartTemplates";
import OrderTemplates from "./Order/templates/OrderTemplates";
import { HomeLayout } from "./Common/HomeLayout";
import SellerHeader from "./Common/Header/SellerHeader";
import TitleText from "./Common/TitleText";
import PageTitle from "./Common/PageTitle";
import InlineText from "./Common/InlineText";
import Category from "./DashBoard/atoms/Category";
import SideBar from "./DashBoard/molecules/SideBar";
import UploadButton from "./DashBoard/atoms/UploadButton";
import DashBoardHeader from "./DashBoard/molecules/DashBoardHeader";
import SellingTitle from "./DashBoard/molecules/SellingTitle";
function App() {
    return (
    <>
    <SignupTemplates />
    <LoginTemplates />
    <HomeTemplates />
    <GoodsDetailTemplates />
    <CartTemplates />
    <OrderTemplates />

    <>
      <SellerHeader />

      <DashBoardHeader />

      <SellingTitle />

      <SideBar />



    </>
    </>
  );
}

export default App;
