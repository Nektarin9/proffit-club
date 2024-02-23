export function resetStyle(array) {
	array.forEach((item) => {
		item.classList.remove("active");
	});
}
