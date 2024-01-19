export const productEdit = async (formData, putFunc, token) => {
	const res = await putFunc(formData, token);

	try {
		if (res) {
			alert('상품이 수정되었습니다.');
			// window.location.reload();
		}
	} catch (error) {
		console.log(error);
		alert(error);
	}
};
