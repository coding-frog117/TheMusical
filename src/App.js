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
import InlineText from "./Common/InlineText";
import CautionBox from "./ProductRegistration/atoms/CautionBox";
import Text from "./Cart/atoms/Text";
import ProductImg from "./ProductRegistration/atoms/ProductImg";
import ImgButton from "./ProductRegistration/atoms/ImgButton";
import ProductInput from "./ProductRegistration/atoms/ProductInput";
import { useState } from "react";
import GrayPriceBox from "./ProductRegistration/atoms/GrayPriceBox";
import FlexInputLayout from "./ProductRegistration/atoms/FlexInputLayout";
import ProductInputSmall from "./ProductRegistration/atoms/ProductInputSmall";
import SelectGreenButton from "./ProductRegistration/atoms/SelectGreenButton";
import SelectWhiteButton from "./ProductRegistration/atoms/SelectWhiteButton";
import EditorBox from "./ProductRegistration/atoms/EditorBox";
import Caution from "./ProductRegistration/molecules/Caution";
import ProductName from "./ProductRegistration/molecules/ProductName";
import ProductPrice from "./ProductRegistration/molecules/ProductPrice";
import DeliveryOptions from "./ProductRegistration/molecules/DeliveryOptions";
import DeliveryFee from "./ProductRegistration/molecules/DeliveryFee";
import Stock from "./ProductRegistration/molecules/Stock";
import ProductDetail from "./ProductRegistration/molecules/ProductDetail";
import ProductInfo from "./ProductRegistration/organisms/ProductInfo";
import ProductImage from "./ProductRegistration/molecules/ProductImage";
import ProductImgAndInfo from "./ProductRegistration/organisms/ProductImgAndInfo";
import Main from "./ProductRegistration/organisms/Main";
import SaveAndCancelBtn from "./ProductRegistration/molecules/SaveAndCancelBtn";
import ProductRegistrationTemplates from "./ProductRegistration/ProductRegistrationTemplates";


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

  <ProductRegistrationTemplates />
    </>
  );
}

export default App;
