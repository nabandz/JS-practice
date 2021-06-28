//A random number from min to max

function random(min, max) {
    let number = Math.random() * (max - min) + min;
    return number;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );