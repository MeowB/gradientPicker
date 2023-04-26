// Get the computed background style property of the body
let background = window.getComputedStyle(document.body).getPropertyValue("background");

// Extract the linear-gradient and color values from the background string using a regular expression
let linearGradient = background.match(/linear-gradient\((.*?)\), rgb\((.*?)\)\)/)[0];

// Get the direction dropdown element, the two color picker elements and the color values paragraph element and the random button
const direction = document.getElementById("direction");
const colorPicker1 = document.getElementById("color-picker1");
const colorPicker2 = document.getElementById("color-picker2");
const colorValues = document.querySelector("body > div.values > p");
const random = document.querySelector("#random");

// Function to update the gradient when a color picker or direction value is changed
function updateGradient() {
	// Set the color values as custom CSS properties on the body element
	document.body.style.setProperty("--color1", colorPicker1.value);
	document.body.style.setProperty("--color2", colorPicker2.value);
	document.body.style.setProperty("--gradientDirection", direction.value);

	// Get the updated background string
	background = window.getComputedStyle(document.body).getPropertyValue("background");

	// Extract the linear-gradient and color values from the updated background string
	linearGradient = background.match(/linear-gradient\((.*?)\), rgb\((.*?)\)\)/)[0];

	// Update the color values paragraph with the new gradient CSS code
	colorValues.textContent = linearGradient + ";";
}

// Function to return a random hexadecimal color
function randomColor() {
	let color = Math.floor(Math.random() * 16777215).toString(16);
	color = "#" + "0".repeat(6 - color.length) + color;
	return color;
}

// Function to update the colors at random
function setRandomColor() {
	let color1 = randomColor();
	let color2 = randomColor();

	colorPicker1.value = color1;
	colorPicker2.value = color2;
	updateGradient()
}

// Add event listeners to the color picker and direction elements to trigger the updateGradient function
colorPicker1.addEventListener("input", updateGradient);
colorPicker2.addEventListener("input", updateGradient);
direction.addEventListener("input", updateGradient);
random.addEventListener("click", setRandomColor);

// Set the initial gradient CSS code in the color values paragraph
colorValues.textContent = linearGradient + ";";
