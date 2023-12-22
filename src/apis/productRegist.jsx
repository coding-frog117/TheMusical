export const productRegist = async (formData, postFunc, token) => {
	const res = await postFunc(formData, token);

	try {
		if (res) {
			alert('상품이 등록되었습니다.');
			window.location.reload();
		}
	} catch (error) {
		console.log(error);
		alert(error);
	}
};
