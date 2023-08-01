import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import HomeTemplates from "./Home/templates/HomeTemplates";
import GoodsDetailTemplates from "./GoodsDetail/templates/GoodsDetailTemplates";
import CartTemplates from "./Cart/templates/CartTemplates";
import OrderTItleBox from "./Order/molecules/OrderTItleBox";
import InlineText from "./Common/InlineText";
import PageTitle from "./Common/PageTitle";
import { HomeLayout } from "./Common/HomeLayout";
import OrderList from "./Order/organisms/OrderList";
import OrderTotalPrice from './Order/molecules/OrderTotalPrice'
import Text from "./Cart/atoms/Text";
import Border from "./Order/atoms/Border";
import BigBlank from "./Order/atoms/BigBlank";
import OrderNameInput from "./Order/molecules/OrderNameInput";
import PhoneInput from "./Order/molecules/PhoneInput";
import OrderEmailInput from "./Order/molecules/OrderEmailInput";
import OrderAddressBox from "./Order/molecules/OrderAddressBox";
import OrderInputTitle from "./Order/atoms/OrderInputTitle";
import OrderInputBox from "./Order/atoms/OrderInputBox";
import PayButton from "./Order/atoms/PayButton";
import PaymentCheckButton from "./Order/molecules/PaymentCheckButton";
import PaymentList from "./Order/organisms/PaymentList";
import Paymentbox from "./Order/atoms/Paymentbox";
import PaymentText from "./Order/molecules/PaymentText";
import PaymentTop from "./Order/organisms/PaymentTop";
import Terms from "./Common/Terms";
import BigButton, { Button } from './Cart/atoms/BigButton'
import PaymentBottom from "./Order/molecules/PaymentBottom";
import AddressLayout from "./Order/atoms/FlexLayout";
import Payment from "./Order/organisms/Payment";

function App() {
    return (
    <>
    <SignupTemplates />
    <LoginTemplates />
    <HomeTemplates />
    <GoodsDetailTemplates />
    <CartTemplates />
  
    <HomeLayout>
    <PageTitle text = "주문/결제하기"/>

    <OrderTItleBox />

    <OrderList />
    <OrderTotalPrice />

    
    <Text text="배송정보" fontSize= {(props)=>props.theme.xLg} fontWeight = "500"/>
    <Border height = "2px" margin = "18px 0 40px"/>
    
    <Text text = "주문자 정보" fontSize = {(props)=>props.theme.md} fontWeight="500"/>
    <Border height = "2px" margin = "8px 0 0"/>
    <OrderNameInput />
    <PhoneInput />
    <OrderEmailInput />

    <Text text = "배송지 정보" fontSize = {(props)=>props.theme.md} fontWeight="500" margin = "40px 0 0"/>
    <Border height = "2px" margin = "8px 0 0"/>
    <OrderNameInput />
    <PhoneInput />

    <OrderAddressBox />

    <OrderInputBox>
      <OrderInputTitle text = "배송 메세지" />
      <BigBlank />
    </OrderInputBox>

    <Payment />
    
    </HomeLayout>
    
    </>
  );
}

export default App;
