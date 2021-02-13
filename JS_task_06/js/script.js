//Check the range between
let userAge = prompt("Enter your age", "");

if (userAge >= 14 && userAge <= 90) {
    alert("Good!");
}
else  {
    alert("Bad!");
}

//Check the range outside
//First variant
if (!(userAge >= 14 && userAge <= 90)) {
    alert("Bad!");
}

//Second variant
if (userAge < 14 || userAge > 90) {
    alert("Bad!");
}