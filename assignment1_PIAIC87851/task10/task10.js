// Step a: Declare a variable
var num;

// Step b: Show the value of variable in your browser
var outputDiv = document.getElementById("output");
outputDiv.innerHTML += "Value after variable declaration is: " + num + "<br>";

// Step c: Initialize the variable with some number
num = 5;

// Step d: Show the value of variable in your browser
outputDiv.innerHTML += "Initial value: " + num + "<br>";

// Step e: Increment the variable
num++;

// Step f: Show the value of variable in your browser
outputDiv.innerHTML += "Value after increment is: " + num + "<br>";

// Step g: Add 7 to the variable
num += 7;

// Step h: Show the value of variable in your browser
outputDiv.innerHTML += "Value after addition is: " + num + "<br>";

// Step i: Decrement the variable
num--;

// Step j: Show the value of variable in your browser
outputDiv.innerHTML += "Value after decrement is: " + num + "<br>";

// Step k: Show the remainder after dividing the variable’s value by 3
var remainder = num % 3;

// Step l: Output the remainder
outputDiv.innerHTML += "The remainder is: " + remainder;
