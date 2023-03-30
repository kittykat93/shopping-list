var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// This original code will be refactored to..

// button.addEventListener("click", function(){
// 	if (input.value.length > 0) {
// 	var li = document.createElement("li"); //create element at bottom of list when input
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// 	}
// });

// input.addEventListener("keypress", function(event){
// 	if (input.value.length > 0 && event.code === "Enter") {
// 	var li = document.createElement("li"); //create element at bottom of list when input
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// 	}
// });

//this

function inputLength() {
	return input.value.length;
}

function createListElement (){
	var li = document.createElement("li"); //create element at bottom of list when input
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
if (inputLength() > 0) {
	createListElement();
	}
}

function addListAfterEnter(event){
	if (inputLength() > 0 && event.code === "Enter") {
	createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);