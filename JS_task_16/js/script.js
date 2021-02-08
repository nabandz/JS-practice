//Function pow(x,n)

let numberX = prompt("Enter number x", "");
let powerN = prompt("Enter power n", "");

function calcPow(x, n){
  return x**n;
}

if (powerN < 1) {
  alert("Use a natural number");
}
else {
  alert(calcPow(numberX, powerN));
}
