import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import HomeTemplates from "./Home/templates/HomeTemplates";
import GoodsDetailTemplates from "./GoodsDetail/templates/GoodsDetailTemplates";
import CartTemplates from "./Cart/templates/CartTemplates";
import OrderTItleBox from "./Order/molecules/OrderTItleBox";
import OrderItemText from "./Order/molecules/OrderItemText";
import GoodsImg from "./Common/GoodsImg";
import OrderListMainBox from "./Order/atoms/OrderListMainBox";
import InlineText from "./Common/InlineText";
import OrderPriceBox from "./Order/atoms/OrderPriceBox";
import PageTitle from "./Common/PageTitle";
import { HomeLayout } from "./Common/HomeLayout";
import OrderList from "./Order/organisms/OrderList";
import OrderTotalPrice from './Order/molecules/OrderTotalPrice'
import Text from "./Cart/atoms/Text";
import Border from "./Order/atoms/Border";
import MiddleBlank from "./Order/atoms/MiddleBlank";
import SmallBlank from "./Order/atoms/SmallBlank";
import BigBlank from "./Order/atoms/BigBlank";
import NameInput from "./Order/molecules/OrderNameInput";
import PhoneInput from "./Order/molecules/PhoneInput";
import OrderEmailInput from "./Order/molecules/OrderEmailInput";


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
    <NameInput />
    <PhoneInput />
    <OrderEmailInput />

    </HomeLayout>
    
    </>
  );
}

export default App;
