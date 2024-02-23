import { resetStyle } from "./utils.js";
import { reviews } from "./data.js";
export function slider() {
	const content = document.querySelector("#content");
	const main_right_content = document.querySelector(".main_right_content");
	const img_content = document.querySelectorAll(".slide-container > img");

	function createElem(type, src, srs_video) {
		const elem = document.createElement(`${type}`);
		if (type === "img") {
			elem.src = `${src}`;
			elem.className = "content";
		} else if (type === "video") {
			elem.className = "video";
			elem.controls = true;
			const source = document.createElement("source");
			source.src = `${srs_video}`;
			source.type = "video/mp4";
			elem.append(source);
		}
		return elem;
	}
	content.append(
		createElem(reviews[0].type, reviews[0].src, reviews[0].srs_video)
	);

	main_right_content.addEventListener("click", (event) => {
		const { target } = event;
		if (target.closest("img")) {
			for (let i = 0; i < reviews.length; i++) {
				if (target.attributes.id.value === reviews[i].id) {
					content.innerHTML = "";
					content.append(
						createElem(
							reviews[i].type,
							reviews[i].src,
							reviews[i].srs_video
						)
					);
					resetStyle(img_content);
					target.classList.add("active");
				}
			}
		}
	});
}
