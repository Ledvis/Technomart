var feedback = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay")
var close = popup.querySelector(".close");
var form = popup.querySelector("form");
var name = popup.querySelector("#name");
var storage = localStorage.getItem("name");

feedback.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");
	if (storage) {
		storage = name.value;
		email.focus();
	} else {
		name.focus();
	}
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-content-error");
});

form.addEventListener("submit", function (event) {
	if (!name.value) {
		event.preventDefault();
		popup.classList.add("modal-content-error");
	} else {
		localStorage.setItem("name", "name.value");
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
			popup.classList.remove("modal-content-error");
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

var deliveryLi = document.querySelector(".delivery-item");
var garantyLi = document.querySelector(".garanty-item");
var creditLi = document.querySelector(".credit-item");
var deliveryDiv = document.querySelector(".delivery");
var garantyDiv = document.querySelector(".garanty");
var creditDiv = document.querySelector(".credit");

deliveryLi.addEventListener("click", function (event) {
	event.preventDefault;
	deliveryLi.classList.add("active-item");
	garantyLi.classList.remove("active-item");
	creditLi.classList.remove("active-item");
	deliveryDiv.classList.add("show");
	garantyDiv.classList.remove("show");
	creditDiv.classList.remove("show");
});

garantyLi.addEventListener("click", function (event) {
	event.preventDefault;
	garantyLi.classList.add("active-item");
	deliveryLi.classList.remove("active-item");
	creditLi.classList.remove("active-item");
	garantyDiv.classList.add("show");
	deliveryDiv.classList.remove("show");
	creditDiv.classList.remove("show");
});

creditLi.addEventListener("click", function (event) {
	event.preventDefault;
	creditLi.classList.add("active-item");
	deliveryLi.classList.remove("active-item");
	garantyLi.classList.remove("active-item");
	creditDiv.classList.add("show");
	deliveryDiv.classList.remove("show");
	garantyDiv.classList.remove("show");
});
