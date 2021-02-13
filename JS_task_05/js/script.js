//The name of JavaScript
officialName = prompt("What is the “official” name of JavaScript?", "");

if (officialName == "ECMAScript"){
    alert("Right!");
} 
else {
    alert("You don’t know? ECMAScript!");
}

//Show the sign
userNumber = prompt("Enter the number", "");

if (userNumber > 0) {
    alert(1);
}
else if (userNumber < 0) {
    alert(-1);
}
else {
    alert(0);
}

//Rewrite 'if' into '?'
let result = (a + b < 4) ? 'Below' : 'Over';

//Rewrite 'if..else' into '?'
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';