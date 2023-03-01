var num1 = 3;
var num2 = 5;

var additionResult = num1 + num2;
var subtractionResult = num1 - num2;
var multiplicationResult = num1 * num2;
var divisionResult = num1 / num2;
var modulusResult = num1 % num2;

var additionDiv = document.getElementById("additionResult");
additionDiv.innerText = "The sum of " + num1 + " and " + num2 + " is " + additionResult;

var subtractionDiv = document.getElementById("subtractionResult");
subtractionDiv.innerText = "The difference between " + num1 + " and " + num2 + " is " + subtractionResult;

var multiplicationDiv = document.getElementById("multiplicationResult");
multiplicationDiv.innerText = "The product of " + num1 + " and " + num2 + " is " + multiplicationResult;

var divisionDiv = document.getElementById("divisionResult");
divisionDiv.innerText = "The quotient of " + num1 + " and " + num2 + " is " + divisionResult;

var modulusDiv = document.getElementById("modulusResult");
modulusDiv.innerText = "The remainder of " + num1 + " divided by " + num2 + " is " + modulusResult;