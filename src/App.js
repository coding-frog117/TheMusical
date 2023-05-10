import SignupTemplates from "./Signup/templates/SignupTemplates";
import LoginTemplates from "./Login/templates/LoginTemplates";
import CartOff from './Home/atoms/CartOff'
import MyPageIcon from "./Home/atoms/MyPageIcon";
import SearchIcon from "./Home/atoms/SearchIcon";
import {SearchBarLayout} from "./Home/atoms/SearchBarLayout";
import IconText from "./Home/atoms/IconText";
import { IconLayout } from "./Home/atoms/IconLayout";
import { HeaderBar } from "./Home/atoms/HeaderBar";
import GoodsImg from "./Home/atoms/GoodsImg";
import GoodsSeller from "./Home/atoms/GoodsSeller";
import GoodsName from "./Home/atoms/GoodsName";
import GoodsPrice from "./Home/atoms/GoodsPrice";
import GoodsPriceCount from "./Home/atoms/GoodsPriceCount";
import SearchBar from "./Home/molecules/SearchBar";
import CartButton from "./Home/molecules/CartButton";
import MyPageButton from "./Home/molecules/MyPageButton";
import Header from "./Home/organisms/Header";
import { HomeLayout } from "./Home/atoms/HomeLayout";
function App() {
    return (
    <>
    <SignupTemplates />
    <LoginTemplates />

    <HeaderBar>
    <SearchIcon />
    <SearchBarLayout/>
    <IconLayout>
    <CartOff />
    <IconText text="장바구니"/>
    </IconLayout>
    <IconLayout>
    <MyPageIcon />
    <IconText text="마이페이지"/>
    </IconLayout>
    </HeaderBar>
    <GoodsImg />
    <GoodsSeller text ="백엔드 글로벌"/>
    <GoodsName text = "딥러닝 개발자 무릎담요"/>
    <GoodsPrice text="29,000" />
    <GoodsPriceCount />

    <HomeLayout>
    <Header />
    </HomeLayout>
    </>
  );
}

export default App;
