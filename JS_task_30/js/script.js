//A random integer from min to max

function  randomInteger(min, max) {
    let number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );