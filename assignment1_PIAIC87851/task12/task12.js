const usd = 10;
const sar = 25;
const pkr = usd * 264.25 + sar * 70.42;
const displayResult = document.getElementById("result");
displayResult.innerHTML = "Total currency in PKR:" + pkr;
//(Exchange rates : 1 US Dollar = 264.25 Pakistani Rupee and 1 Saudi Riyal = 70.42 Pakistani Rupee)
