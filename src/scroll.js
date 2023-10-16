const allSlides = document.querySelectorAll(".slide");

let scrollHeight = 0;
let downDir = true;
export const snapScroll = () => {
	const currentHeight = window.scrollY;
	if (currentHeight > scrollHeight) {
		downDir = true;
	} else if (currentHeight < scrollHeight) {
		downDir = false;
	}
	scrollHeight = currentHeight;
	for (let x = 0; x < allSlides.length; x++) {
		const slidePos = allSlides[x].getBoundingClientRect();
		const viewHeight = window.visualViewport.height;
		if (downDir === true && slidePos.y > 0 && slidePos.y < viewHeight) {
			allSlides[x].scrollIntoView({ behavior: "smooth" });
		} else if (downDir === false && slidePos.y > 0 && slidePos.y < viewHeight) {
			allSlides[x - 1].scrollIntoView({ behavior: "smooth" });
		}
	}
};

const footerLinks = document.querySelectorAll(".footer-link");

export const addFooterFunc = () => {
	for (let x = 0; x < footerLinks.length; x++) {
		footerLinks[x].addEventListener("click", () => {
			allSlides[x].scrollIntoView({ behavior: "smooth" });
		});
	}
};
