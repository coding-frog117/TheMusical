export function getToday() {
	let today = new Date();

	let year = today.getFullYear();
	let month = today.getMonth() < 10 ? '0' + String(today.getMonth() + 1) : today.getMonth() + 1;
	let day = today.getDate() < 10 ? '0' + String(today.getDate()) : today.getDate();

	let todayDate = String(year) + String(month) + String(day);
	return todayDate;
}
