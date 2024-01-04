export default async function orderDirect(postFunc, token, data, id, quantity, price) {
	const postData = {
		product_id: id,
		quantity: quantity,
		order_kind: 'direct_order',
		receiver: data.receiver,
		receiver_phone_number:
			data.receiver_phone_number_first + data.receiver_phone_number_second + data.receiver_phone_number_third,
		address: data.address_number + data.address_first + data.address_second,
		address_message: data.address_message,
		payment_method: data.payment_method,
		total_price: price * quantity,
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
