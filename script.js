//***********************************************************************************************
// Eg 1:
//***********************************************************************************************
/*
var h3tag = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var bodytag = document.getElementById('b1');
//console.log(h3tag);
//console.log(col1);
//console.log(col2);
//console.log(bodytag);
col1.addEventListener("input", function (){
	//console.log(col1.value);
	bodytag.style.background = "linear-gradient(to right,"+ col1.value + ", "+ col2.value +")";
});
col2.addEventListener("input", function (){
	//console.log(col2.value);
	bodytag.style.background = "linear-gradient(to right,"+ col1.value + ", "+ col2.value +")";
});
*/

//***********************************************************************************************
// Eg 2:
// we can rewrite code and put a function instead of repeating code, remember DRY
// note that In eventListener we call a reference "setGradient" instead of calling "setGradient()"
// if we call function that it will run on first time this script is parsed. and will not run again when event occour
// and we need the function to run everytime at event so we give reference 
//***********************************************************************************************
/*
var h3tag = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var bodytag = document.getElementById('b1');

function setGradient(){
	bodytag.style.background = "linear-gradient(to right,"+ col1.value + ", "+ col2.value +")";
}

col1.addEventListener("input", setGradient); 
col2.addEventListener("input", setGradient);
*/


//***********************************************************************************************
// Eg 3:
// There is another way to do it is using onclick property of html element. To do it
// Instead of addEventListener add oninput attribute to <input> tags oninput="setGradient()", 
// 		which is similar to onclick attribute to <button> tag so
// html lines will change to following
// 		<input oninput="setGradient()" class="color1" type="color" name="color1" value="#00FF00">
// 		<input oninput="setGradient()" class="color2" type="color" name="color2" value="#FF0000">
// also now we donot need to add event listeners in script so script is small now
//
// This is not the recomended way as all actions must be in scripts not in html since its seperation of consern
// Better to put only text content in html and all code in javascript
//***********************************************************************************************
/*
var h3tag = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var bodytag = document.getElementById('b1');

function setGradient(){
	bodytag.style.background = "linear-gradient(to right,"+ col1.value + ", "+ col2.value +")";
}
*/


//***********************************************************************************************
// Eg 4:
// Same as eg 2 but here we add text  to h3 tag 
// text is the gradient info selected by us
// 
//***********************************************************************************************
/*
var h3tag = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var bodytag = document.getElementById('b1');

function setGradient(){
	bodytag.style.background = "linear-gradient(to right,"+ col1.value + ", "+ col2.value +")";
	h3tag.textContent = bodytag.style.background + ";";
}

col1.addEventListener("input", setGradient); 
col2.addEventListener("input", setGradient);
*/
//***********************************************************************************************
// Eg 5:
// Input color matches the background color when page loaded
// 
//***********************************************************************************************

var h3tag = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var bodytag = document.getElementById('b1');

function setGradient(){
	bodytag.style.background = "linear-gradient(to right,"+ col1.value + ", "+ col2.value +")";
	h3tag.textContent = bodytag.style.background + ";";
}

col1.addEventListener("input", setGradient); 
col2.addEventListener("input", setGradient);

setGradient(); // call setGradient() function as soon as page loads once to match shown values