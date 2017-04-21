var feedback = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay")
var close = popup.querySelector(".close");

feedback.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});

var map = document.querySelector(".map");
var googleMap = document.querySelector(".modal-map");
var closeMap = googleMap.querySelector(".close");

map.addEventListener("click", function (event) {
	event.preventDefault();
	googleMap.classList.add("modal-map-show");
	overlay.classList.add("modal-overlay-show");
})

closeMap.addEventListener("click", function (event) {
	event.preventDefault();
	googleMap.classList.remove("modal-map-show");
	overlay.classList.remove("modal-overlay-show");
})

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (googleMap.classList.contains("modal-map-show")) {
			googleMap.classList.remove("modal-map-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});
