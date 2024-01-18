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

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomeTemplates />} />
				<Route path="/login" element={<LoginTemplates />} />
				<Route path="/signup" element={<SignupTemplates />} />
				<Route path="/productDetail/:id" element={<GoodsDetailTemplates />} />
				<Route path="/cart" element={<CartTemplates />} />
				<Route path="/order/cartOrder" element={<OrderTemplates />} />
				<Route path="/order/:id" element={<OrderTemplates />} />
				<Route path="/dashboard" element={<DashBoardTemplates />} />
				<Route path="/productRegistration" element={<ProductRegistrationTemplates />} />
				<Route path="/productEdit/:id" element={<ProductEditTemplates />} />
				<Route path="/mypage" element={<MyPageTemplates />} />
				<Route path="/musicalDetail/:id" element={<MusicalDetailTemplates />} />
				<Route path="/musicalRank" element={<MusicalRankTemplates />} />
			</Routes>
		</>
	);
}

export default App;
