//Function min(a, b)

let numberA = +prompt("Enter number a", "");
let numberB = +prompt("Enter number b", "");

//First variant
function calcMin(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}

//Second variant
/* function calcMin(a, b) {
  return (a > b) ? b : a;
} */

alert(calcMin(numberA, numberB));
