//Sum all numbers till the given one

function sumTo(n) {
    //First variant
    /* let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum; */

    //Second variant
    /* if (n==1) {
        return n;
    }
    else {
        return n + sumTo(n-1);
    } */

    //Third variant
    return ((1 + n) / 2) * n;
}

alert( sumTo(1) ); // 1
alert( sumTo(2) ); // 3
alert( sumTo(3) ); // 6
alert( sumTo(4) ); //10
alert( sumTo(100) ); // 5050