"use strict";
// light or dark mode
function darkMode() {
	// get elements from document
	let body = document.querySelector("body");
	let div = document.querySelector("div");
	let h1 = document.querySelector("h1");
	let navLi = document.querySelectorAll("nav li");
	let navLink = document.querySelectorAll("nav a");
	let footer = document.querySelector("footer");
	let footerLink = document.querySelectorAll("footer a");
	let lightButton = document.querySelector("#lights");
	// toggle darkMode class
	body.classList.toggle("darkMode");
	div.classList.toggle("darkMode");
	h1.classList.toggle("h1Dark");
	footer.classList.toggle("textDark");
	for(let i=0; i<navLi.length; i++){
		navLi[i].classList.toggle("borderDark");
	}
	for(let i=0; i<navLink.length; i++){
		navLink[i].classList.toggle("textDark");
	}
	for (let i=0; i<footerLink.length; i++) {
		footerLink[i].classList.toggle("textDark");
	}
	// change text of button
	if(body.className === "darkMode"){
		lightButton.innerHTML = "Light Mode";
	} else {
		lightButton.innerHTML = "Dark Mode";
	}
}

// validate form
function validateForm(event) {
	event.preventDefault();
	// regex
	let fNameRegex = /^(?=.+[a-zA-Z])/;
	let lNameRegex = /^(?=.+[a-zA-Z])/;
	let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	let phoneRegex = /^[0-9]{10}$/;
	// inputs
	let fName = document.getElementById("firstName");
	let lName = document.getElementById("lastName");
	let phone = document.getElementById("phoneNum");
	let email = document.getElementById("emailAdd");
	let comment = document.getElementById("comments");
	let phoneChoice = document.getElementById("phone");
	let emailChoice = document.getElementById("email");
	// remove error
	fName.classList.remove("error");
	lName.classList.remove("error");
	phone.classList.remove("error");
	email.classList.remove("error");
	fName.nextSibling.innerHTML = "";
	lName.nextSibling.innerHTML = "";
	email.nextSibling.innerHTML = "";
	phone.nextSibling.innerHTML = "";
	comment.nextSibling.innerHTML = "";

	// keep track of form validity
	let isValid = true;
	
	// first name verify
	if(fName.value === "" || !(fNameRegex.test(fName.value))) {
		isValid = false;
		fName.classList.remove("default");
		fName.classList.add("error");
		fName.nextElementSibling.innerHTML = "Please enter your first name.";
	}
	// last name verify
	if(lName.value === "" || !(lNameRegex.test(lName.value))) {
		isValid = false;
		lName.classList.remove("default");
		lName.classList.add("error");
		lName.nextElementSibling.innerHTML = "Please enter your last name.";
	}
	// phone verify only if phone is picked for choice of contact
	if(phoneChoice.checked) {
		if(phone.value === "" || !(phoneRegex.test(phone.value))) {
			isValid = false;
			phone.classList.remove("default");
			phone.classList.add("error");
			phone.nextElementSibling.innerHTML = "Please enter a 10-digit phone number.";
		}
	}
	// email verify only if email is picked for choice of contact
	if(emailChoice.checked) {
		if(email.value === "" || !(emailRegex.test(email.value))) {
			isValid = false;
			email.classList.remove("default");
			email.classList.add("error");
			email.nextElementSibling.innerHTML = "Please enter a valid email address.";
		}
	}
	// comment verify
	if(comment.value === "") {
		isValid = false;
		comment.classList.remove("default");
		comment.classList.add("error");
		comment.nextElementSibling.innerHTML = "Please enter a comment.";
	}
	// verify form is valid
	if(isValid) {
		let choice = "";
		if(phoneChoice.checked) {
			choice = "Phone";
		} else {
			choice = "Email";
		}
		// create customer object
		let customer = {};
		customer = {
			firstName: fName.value,
			lastName: lName.value,
			phoneNumber: phone.value,
			emailAddress: email.value,
			contactChoice: choice,
			commentBox: comment.value
		};
		// submission message
		alert("Thank you for your submission!\nName: " + customer.firstName + " " + customer.lastName +"\nPhone Number: " + customer.phoneNumber + "\nEmail Address: " + customer.emailAddress + "\nChoice of Contact: " + customer.contactChoice + "\nComments: " + customer.commentBox);
		// clear values
		fName.value = "";
		lName.value = "";
		phone.value = "";
		email.value = "";
		comment.value = "";
		// clear errors
		fName.nextSibling.innerHTML = "";
		lName.nextSibling.innerHTML = "";
		email.nextSibling.innerHTML = "";
		phone.nextSibling.innerHTML = "";
		comment.nextSibling.innerHTML = "";
	}
}

// return random number between max and min
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// number guessing game
function gamePlay() {
	let userNum = parseInt(document.getElementById("userNum").value);
	let winDisplay = document.getElementById("randomNum");
	let gameMessage = document.getElementById("gameMessage");
	// display random winning number
	let winNum = getRandomNumber(1, 10);
	winDisplay.innerHTML = winNum;
	// game message
	if(userNum === winNum) {
    	gameMessage.innerHTML = "<br>You guessed the winning number! You win!";
  	} else {
    	gameMessage.innerHTML = "<br>You didn't guess the winning number. Try again.";
  	}
}

// first product display
function pumpkinDisplay() {
	// remove hidden attribute and display product
	document.querySelector("#displayPumpkin figcaption").removeAttribute("hidden");
	document.querySelector("#displayPumpkin img").removeAttribute("hidden");
	// get elements from document
	let pumpkinImg = document.querySelector("#displayPumpkin img");
	let pumpkinCaption = document.querySelector("#displayPumpkin figcaption");
	let carrotImg = document.querySelector("#displayCarrot img");
	let carrotCaption = document.querySelector("#displayCarrot figcaption");
	let pbImg = document.querySelector("#displayPb img");
	let pbCaption = document.querySelector("#displayPb figcaption");
	// give other products hidden attribute
	document.querySelector("#displayCarrot figcaption").setAttribute("hidden", true);
	document.querySelector("#displayCarrot img").setAttribute("hidden", true);
	document.querySelector("#displayPb figcaption").setAttribute("hidden", true);
	document.querySelector("#displayPb img").setAttribute("hidden", true);
	// add and remove display styles
	pumpkinImg.classList.add("imgDisplay");
	pumpkinCaption.classList.add("imgDisplay");
	carrotImg.classList.remove("imgDisplay");
	carrotCaption.classList.remove("imgDisplay");
	pbImg.classList.remove("imgDisplay");
	pbCaption.classList.remove("imgDisplay");
}

// second product display
function carrotDisplay() {
	// remove hidden attribute and display product
	document.querySelector("#displayCarrot figcaption").removeAttribute("hidden");
	document.querySelector("#displayCarrot img").removeAttribute("hidden");
	// get elements from document
	let carrotImg = document.querySelector("#displayCarrot img");
	let carrotCaption = document.querySelector("#displayCarrot figcaption");
	let pumpkinImg = document.querySelector("#displayPumpkin img");
	let pumpkinCaption = document.querySelector("#displayPumpkin figcaption");
	let pbImg = document.querySelector("#displayPb img");
	let pbCaption = document.querySelector("#displayPb figcaption");
	// give other products hidden attribute
	document.querySelector("#displayPumpkin figcaption").setAttribute("hidden", true);
	document.querySelector("#displayPumpkin img").setAttribute("hidden", true);
	document.querySelector("#displayPb figcaption").setAttribute("hidden", true);
	document.querySelector("#displayPb img").setAttribute("hidden", true);
	// add and remove display styles
	carrotImg.classList.add("imgDisplay");
	carrotCaption.classList.add("imgDisplay");
	pumpkinImg.classList.remove("imgDisplay");
	pumpkinCaption.classList.remove("imgDisplay");
	pbImg.classList.remove("imgDisplay");
	pbCaption.classList.remove("imgDisplay");
}

// third product display
function pbDisplay() {
	// remove hidden attribute
	document.querySelector("#displayPb figcaption").removeAttribute("hidden");
	document.querySelector("#displayPb img").removeAttribute("hidden");
	// get elements from document
	let pbImg = document.querySelector("#displayPb img");
	let pbCaption = document.querySelector("#displayPb figcaption");
	let pumpkinImg = document.querySelector("#displayPumpkin img");
	let pumpkinCaption = document.querySelector("#displayPumpkin figcaption");
	let carrotImg = document.querySelector("#displayCarrot img");
	let carrotCaption = document.querySelector("#displayCarrot figcaption");
	// give other products hidden attribute
	document.querySelector("#displayPumpkin figcaption").setAttribute("hidden", true);
	document.querySelector("#displayPumpkin img").setAttribute("hidden", true);
	document.querySelector("#displayCarrot figcaption").setAttribute("hidden", true);
	document.querySelector("#displayCarrot img").setAttribute("hidden", true);
	// add and remove display styles
	pbImg.classList.add("imgDisplay");
	pbCaption.classList.add("imgDisplay");
	pumpkinImg.classList.remove("imgDisplay");
	pumpkinCaption.classList.remove("imgDisplay");
	carrotImg.classList.remove("imgDisplay");
	carrotCaption.classList.remove("imgDisplay");
}

// event listeners
window.onload = (event) => {
	document.getElementById("mySubmit").addEventListener("click", validateForm);
	document.getElementById("gamePlay").addEventListener("click", gamePlay);
	document.getElementById("lights").addEventListener("click", darkMode);
	document.getElementById("pumpkin").addEventListener("click", pumpkinDisplay);
	document.getElementById("carrot").addEventListener("click", carrotDisplay);
	document.getElementById("pb").addEventListener("click", pbDisplay);
};
