//Output every second

function printNumbers(from, to) {
    let value = from;

    let timer = setInterval(function() {
        alert(value);
        if (value == to) {
            clearInterval(timer);
        }
        value++;
    }, 1000);
}

printNumbers(1, 10);