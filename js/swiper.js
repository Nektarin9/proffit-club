export function swiper(data) {
	const swiperWrapper = document.querySelector(".swiper-wrapper");

	swiperWrapper.innerHTML = data
		.map((data) => {
			return `
		  <div class="swiper-slide">
			<div class="slide-container">
			<img id=${data.id} src=${data.src} class="maitn_right_content_img ${data.target}"></img>
			</div>
		  </div>
		`;
		})
		.join("");
	const buttonPrev = document.querySelector(".swiper-button-prev");
	const buttonNext = document.querySelector(".swiper-button-next");
	const swiper = new Swiper(".swiper", {
		navigation: {
			nextEl: buttonNext,
			prevEl: buttonPrev,
		},

		breakpoints: {
			0: {
				slidesPerView: 4,
				spaceBetween: 4,
				slidesPerGroup: 4,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			},
			501: {
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 3,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			},
			850: {
				slidesPerView: 4,
				spaceBetween: 8,
				slidesPerGroup: 4,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			},
		},
	});
}
