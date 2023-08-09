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
    <GrayTitleText text = "상품명"/>
    <GrayTitleText text = "판매가"/>
    <GrayTitleText text = "상품이미지"/>
    <InlineText text = "*상품 등록 주의사항" color = {(props)=>props.theme.red} fontSize = {(props)=>props.theme.sm}/>
    <CautionBox>
      <Text text = "-너무 귀여운 사진은 심장이 아플수 있습니다" fontSize = "14px"/>
      <Text text = "- 상품 등록 시 정확한 판매가를 입력하시기 바랍니다. 시세보다 과도하게 높은 가격은 판매율이 낮아질 수 있습니다." fontSize = "14px"/>
    </CautionBox>

    <ProductImg>
      <ImgButton />
    </ProductImg>

    <FlexInputLayout>
    <ProductInputSmall />
    <GrayPriceBox text = "원"/>
    </FlexInputLayout>

    <SelectGreenButton text = "택배, 소포, 등기" height ="54px"/>
    <SelectWhiteButton text = "직접배송" height = "54px"/>

    <SelectGreenButton text = "저장하기" height ="60px"/>
    <SelectWhiteButton text = "취소" height = "60px"/>

    <EditorBox></EditorBox>

    <Caution />

    <ProductImgAndInfo />
    <ProductDetail />
    </>
  );
}

export default App;
