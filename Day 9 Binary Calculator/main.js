var btnClr = document.getElementById("btnClr");
var btn1   = document.getElementById("btn1");
var btn0   = document.getElementById("btn0");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");
var btnEql = document.getElementById("btnEql");
var result = document.getElementById("result");

btnEql.addEventListener("click", function() {
    let [num1, op, num2] = result.innerHTML.split(/\b/);
    let n1 = parseInt(num1, 2);
    let n2 = parseInt(num2, 2);
    switch(op){
        case "+": result.innerHTML = (n1 + n2).toString(2); break;
        case "-": result.innerHTML = (n1 - n2).toString(2); break;
        case "*": result.innerHTML = (n1 * n2).toString(2); break;
        case "/": result.innerHTML = (n1 / n2).toString(2); break;
    }
});

btnClr.addEventListener("click", function() {
	result.innerHTML = "";
});

btn1.addEventListener("click", function() {
	result.innerHTML += "1";
});

btn0.addEventListener("click", function() {
	result.innerHTML += "0";
});

btnSum.addEventListener("click", function() {
	result.innerHTML += "+";
});

btnSub.addEventListener("click", function() {
	result.innerHTML += "-";
});

btnMul.addEventListener("click", function() {
	result.innerHTML += "*"
});

btnDiv.addEventListener("click", function() {
	result.innerHTML += "/";
});

