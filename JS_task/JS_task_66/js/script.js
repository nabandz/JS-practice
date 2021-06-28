//Fibonacci numbers

function fib(n) {
    let arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[arr.length - 1];
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757