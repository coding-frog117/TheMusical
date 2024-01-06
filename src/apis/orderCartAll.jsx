export default async function orderCartAll(postFunc, token, data, price) {
	const postData = {
		total_price: price,
		order_kind: 'cart_order',

		receiver: data.receiver,
		receiver_phone_number:
			data.receiver_phone_number_first + data.receiver_phone_number_second + data.receiver_phone_number_third,
		address: data.address_number + data.address_first + data.address_second,
		address_message: data.address_message,
		payment_method: data.payment_method,
	};
	const res = await postFunc(postData, token);

	try {
		if (res) {
			return res;
		}
	} catch (errors) {
		console.log(errors.message);
	}
}
