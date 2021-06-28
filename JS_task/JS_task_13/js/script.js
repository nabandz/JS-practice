//Rewrite "if" into "switch"

let number = +prompt("Please enter a number between 0 and 3", "");

/* if (number === 0) {
  alert("You entered the 0");
}

if (number === 1) {
  alert("You entered the 1");
}

if (number === 2 || number === 3) {
  alert("You entered the 2 or 3");
} */

switch (number) {
  case 0:
    alert("You entered the 0");
    break;

  case 1:
    alert("You entered the 1");
    break;

  case 2:
  case 3:
    alert("You entered the 2 or 3");
}