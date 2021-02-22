//Sum input numbers

function sumInput() {
    let array = [];
    let number;

    while (true) {
        number = prompt("Enter the number", "");
        if (number == null || number == "" || !isFinite(number)) break;
        array.push(+number);
    }

    let sum = 0;
    for (let item of array) {
        sum += item;
    }

    return sum;
}

alert( sumInput() );