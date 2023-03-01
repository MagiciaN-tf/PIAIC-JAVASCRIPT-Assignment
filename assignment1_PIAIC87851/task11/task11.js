// Celsius to Fahrenheit conversion
const celciusTemp = 25;
const fahrenheitTemp = (celciusTemp * 9) / 5 + 32;
const displayTemp = document.getElementById("result1");
displayTemp.innerHTML = `${celciusTemp}°C is ${fahrenheitTemp.toFixed(1)}°F`;
// Fahrenheit to Celsius conversion
const fahrenheitTemp2 = 70;
const celciusTemp2 = ((fahrenheitTemp2 - 32) * 5) / 9;
const displayTemp2 = document.getElementById("result2");
displayTemp2.innerHTML = `${fahrenheitTemp2}°F is ${celciusTemp2.toFixed(1)}°C`;
