//Rewrite the function using '?' or '||'

let age = prompt("Enter your age","");

/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
} */

//Use ?
function checkAge_v1(age) {
  (age > 18) ? true : confirm('Did parents allow you?');
}

//Use ||
function checkAge_v2(age) {
  (age > 18) || confirm('Did parents allow you?');
}

checkAge_v1(age);
checkAge_v2(age);
