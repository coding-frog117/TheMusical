export const cartAppend = async (postFunc, formData, token, navigator) => {
	const res = await postFunc(formData, token);

	try {
		if (res) {
			if (window.confirm('상품이 추가되었습니다. 장바구니로 이동하시겠습니까?')) {
				navigator('/cart');
			} else {
				window.location.reload();
			}
		}
	} catch (error) {
		console.log(error.message);
	}
};
