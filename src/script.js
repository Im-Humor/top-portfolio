/* eslint-disable no-console */
/* eslint-disable no-plusplus */

import "./style.css";

const testButton = document.getElementById("testclick");
const div2 = document.querySelector(".about");

testButton.addEventListener("click", () =>
	div2.scrollIntoView({ behavior: "smooth" })
);
