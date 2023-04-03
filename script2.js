var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


//making sure they enter something
function inputLength() {
	return input.value.length;
}


//this is striking a line through if they click on it. event.target is it being clicked
ul.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }

//removes item when delete button is clicked
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});



function createListElement (){

	var li = document.createElement("li"); //create element at bottom of list when input
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var deleteButton = document.createElement("button");
   deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);
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