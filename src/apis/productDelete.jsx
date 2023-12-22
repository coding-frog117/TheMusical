export const productDelete = async (deleteFunc, token, setModal, navigator) => {
	const res = await deleteFunc(token);

	try {
		if (res) {
			console.log(res);
			alert('상품이 삭제되었습니다');
			setModal('');
			window.location.reload();
		}
	} catch (error) {
		console.log(error);
		alert(error);
	}
};
