import SignupTemplates from './Signup/templates/SignupTemplates';
import LoginTemplates from './Login/templates/LoginTemplates';
import HomeTemplates from './Home/templates/HomeTemplates';
import GoodsDetailTemplates from './GoodsDetail/templates/GoodsDetailTemplates';
import CartTemplates from './Cart/templates/CartTemplates';
import OrderTemplates from './Order/templates/OrderTemplates';
import DashBoardTemplates from './DashBoard/templates/DashBoardTemplates';
import ProductRegistrationTemplates from './ProductRegistration/templates/ProductRegistrationTemplates';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductEditTemplates from './productEdit/templates/ProductEditTemplates';
import MyPageTemplates from './MyPage/templates/MyPageTemplates';
import MusicalDetailTemplates from './MusicalDetail/templates/MusicalDetailTemplates';
import MusicalRankTemplates from './MusicalRank.jsx/templates/MusicalRankTemplates';
import Header from './Common/Header/Header';
import SellerBasicHeader from './Common/Header/SellerBasicHeader';
import SellerHeader from './Common/Header/SellerHeader';
import { useSelector } from 'react-redux';

function App() {
	const loginType = useSelector((state) => {
		return state.persistedReducer.login_type.value.payload;
	});

	return (
		<>
			<Routes>
				{loginType === 'SELLER' ? (
					<>
						<Route element={<SellerBasicHeader />}>
							<Route path="/" element={<HomeTemplates />} />
							<Route path="/login" element={<LoginTemplates />} />
							<Route path="/signup" element={<SignupTemplates />} />
							<Route path="/productDetail/:id" element={<GoodsDetailTemplates />} />
							<Route path="/musicalDetail/:id" element={<MusicalDetailTemplates />} />
							<Route path="/musicalRank" element={<MusicalRankTemplates />} />
						</Route>
						<Route element={<SellerHeader />}>
							<Route path="/dashboard" element={<DashBoardTemplates />} />
							<Route path="/productRegistration" element={<ProductRegistrationTemplates />} />
							<Route path="/productEdit/:id" element={<ProductEditTemplates />} />
						</Route>
					</>
				) : (
					<Route element={<Header />}>
						<Route path="/" element={<HomeTemplates />} />
						<Route path="/login" element={<LoginTemplates />} />
						<Route path="/signup" element={<SignupTemplates />} />
						<Route path="/productDetail/:id" element={<GoodsDetailTemplates />} />
						<Route path="/cart" element={<CartTemplates />} />
						<Route path="/order/cartOrder" element={<OrderTemplates />} />
						<Route path="/order/:id" element={<OrderTemplates />} />
						<Route path="/mypage" element={<MyPageTemplates />} />
						<Route path="/musicalDetail/:id" element={<MusicalDetailTemplates />} />
						<Route path="/musicalRank" element={<MusicalRankTemplates />} />
					</Route>
				)}
			</Routes>
		</>
	);
}

export default App;
