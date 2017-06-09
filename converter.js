function toCelsius (tempFar) {
	var newCelsTemp = (tempFar - 32) / 1.8;
	return newCelsTemp
}

function toFahrenheit (tempCels) {
	var newFarTemp = (tempCels * 1.8) + 32;
	return newFarTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var convertedTemp = document.getElementById("convertedTemp");

function determineConverter () {
	var enteredTemp = document.getElementById("tempField").value;
	var chosenTemp = document.getElementsByName("tempType").value;
	if (document.getElementById("toFar").checked) {
		return toFahrenheit(enteredTemp);
		
	} else {
		return toCelsius(enteredTemp);
	}

}

function colorAlert () {
	var tempResult = determineConverter();
	var farTrue = document.getElementById("toFar")
	var celsTrue = document.getElementById("toCels")
	if ((tempResult > 90 && farTrue.checked) 
		|| (tempResult > 32 && celsTrue.checked)) {
		convertedTemp.innerHTML = "<div class='hot'>" + tempResult + "</div>";
	} else if ((tempResult < 32 && farTrue.checked) 
		|| (tempResult < 0 && celsTrue.checked)) {
		convertedTemp.innerHTML = "<div class='cold'>" + tempResult + "</div>";
	}	else {
		convertedTemp.innerHTML = "<div class='other'>" + tempResult + "</div>";
	} 
}

// // Assign a function to be executed when the button is clicked
button.addEventListener("click", colorAlert);