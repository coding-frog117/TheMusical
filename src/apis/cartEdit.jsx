export const cartEdit = async (putFunc, putData, token) => {
	const res = await putFunc(putData, token);

	try {
		if (res) {
			console.log(res);
		}
	} catch (error) {
		console.log(error.message);
	}
};
