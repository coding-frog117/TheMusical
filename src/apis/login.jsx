import { depositLoginType } from '../store/loginTypeSlice';
import { depositToken } from '../store/userSlice';

export default async function login(data, postFunc, buySelect, setWarningText, dispatch, navigate) {
	let postId = data.id;
	let postPassword = data.password;

	const buyerData = {
		username: postId,
		password: postPassword,
		login_type: 'BUYER',
	};

	const sellerData = {
		username: postId,
		password: postPassword,
		login_type: 'SELLER',
	};

	try {
		let account = await postFunc(buySelect === true ? buyerData : sellerData);
		const token = account.data.token;
		dispatch(depositToken(token));
		dispatch(depositLoginType(buySelect === true ? 'BUYER' : 'SELLER'));
		navigate('/');
	} catch (error) {
		console.log(error);
		if (error.response.data.FAIL_Message === '로그인 정보가 없습니다.') {
			setWarningText('아이디 또는 비밀번호를 확인해주세요.');
		} else {
			setWarningText(Object.values(error.response.data)[0]);
		}
	}
}
