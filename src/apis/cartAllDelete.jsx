export const cartAllDelete = async (deleteFunc, token) => {
	const res = await deleteFunc(token);

	try {
		if (res) {
			alert('삭제되었습니다.');
			window.location.reload();
		}
	} catch (error) {
		console.log(error.message);
	}
};
