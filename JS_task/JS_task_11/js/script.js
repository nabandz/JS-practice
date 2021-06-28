//Output prime numbers
let userValue = prompt("Enten the value N","")

isPrime:
for (let i = 2; i < userValue; i++) {
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue isPrime;
    }
    alert(i);
}